import { createIcons, icons } from 'lucide';
import { coursesData, installStepsData, printingChecklistData, slicerGuidesData, practicePrintersData } from './curriculumData.js';

let searchIndex = [];
let selectedIndex = -1;
let searchDebounceTimer = null;

function stripHtml(html) {
  if (!html) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text, terms) {
  if (!terms.length || !text) return text;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi');
  return text.replace(pattern, '<mark class="search-hl">$1</mark>');
}

function createSnippet(content, terms, maxLength = 95) {
  if (!content) return '';
  const lowerContent = content.toLowerCase();

  let firstIdx = -1;
  for (const term of terms) {
    const idx = lowerContent.indexOf(term);
    if (idx !== -1 && (firstIdx === -1 || idx < firstIdx)) {
      firstIdx = idx;
    }
  }

  if (firstIdx === -1) {
    const truncated = content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
    return highlightText(truncated, terms);
  }

  const start = Math.max(0, firstIdx - 25);
  const end = Math.min(content.length, firstIdx + 70);
  let snippet = content.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';

  return highlightText(snippet, terms);
}

export function buildSearchIndex() {
  const index = [];

  // 1. Courses and Lessons
  coursesData.forEach(course => {
    course.lessons.forEach(lesson => {
      if (lesson.id >= 2) return; // 2~4회차 비활성화
      // Lesson Summary
      index.push({
        id: `lesson-${course.id}-${lesson.id}`,
        category: `${course.title} ➔ ${lesson.id}회차`,
        badge: `${lesson.id}회차 개요`,
        badgeClass: 'badge-lesson',
        title: `${lesson.title} (${lesson.subtitle})`,
        content: `${lesson.badge} ${lesson.id}회차 ${lesson.id}차시 ${lesson.outcomes ? lesson.outcomes.join(' ') : ''} ${lesson.title} ${lesson.subtitle}`,
        hash: `course-${course.id}-lesson-${lesson.id}`,
        selector: '#view-lesson .panel-header'
      });

      // Outcomes
      if (lesson.outcomes && lesson.outcomes.length > 0) {
        index.push({
          id: `lesson-${course.id}-${lesson.id}-outcomes`,
          category: `${lesson.id}회차: ${lesson.subtitle}`,
          badge: '학습 목표',
          badgeClass: 'badge-tip',
          title: `${lesson.subtitle} - 핵심 학습 목표`,
          content: `${lesson.id}회차 ${lesson.id}차시 ${lesson.outcomes.join(' ')}`,
          hash: `course-${course.id}-lesson-${lesson.id}`,
          selector: '#current-outcomes'
        });
      }

      // Steps
      if (lesson.steps && lesson.steps.length > 0) {
        lesson.steps.forEach((step, sIdx) => {
          let stepContent = `${step.title} ${stripHtml(step.desc)}`;
          if (step.subItems && step.subItems.length > 0) {
            step.subItems.forEach(sub => {
              stepContent += ` ${sub.subTitle} ${sub.subDesc}`;
              if (sub.details) {
                stepContent += ` ${sub.details.map(d => stripHtml(d)).join(' ')}`;
              }
              if (sub.table) {
                stepContent += ` ${sub.table.headers.join(' ')} ${sub.table.rows.map(r => r.join(' ')).join(' ')}`;
              }
            });
          }

          index.push({
            id: `lesson-${course.id}-${lesson.id}-step-${step.step}`,
            category: `${lesson.id}회차: ${lesson.subtitle}`,
            badge: `STEP ${step.step}`,
            badgeClass: 'badge-step',
            title: `[${lesson.id}회차 STEP ${step.step}] ${step.title}`,
            content: `${stepContent} ${lesson.id}회차 ${lesson.id}차시`,
            hash: `course-${course.id}-lesson-${lesson.id}`,
            selector: `#current-steps .step-item:nth-child(${sIdx + 1})`
          });
        });
      }

      // Print Tips
      if (lesson.printTips && lesson.printTips.length > 0) {
        index.push({
          id: `lesson-${course.id}-${lesson.id}-tips`,
          category: `${lesson.id}회차: ${lesson.subtitle}`,
          badge: '프린팅 팁',
          badgeClass: 'badge-tip',
          title: `${lesson.subtitle} - 3D 프린팅 실전 출력 팁`,
          content: `${lesson.id}회차 ${lesson.id}차시 ${lesson.printTips.join(' ')}`,
          hash: `course-${course.id}-lesson-${lesson.id}`,
          selector: '.print-tips-box'
        });
      }

      // Hotkeys in Lesson
      if (lesson.hotkeys && lesson.hotkeys.length > 0) {
        lesson.hotkeys.forEach(h => {
          index.push({
            id: `lesson-${course.id}-${lesson.id}-hotkey-${h.key}`,
            category: `${lesson.id}회차 단축키`,
            badge: h.key,
            badgeClass: 'badge-hotkey',
            title: `단축키 [${h.key}] : ${h.desc}`,
            content: `${h.key} ${h.desc} 블렌더 단축키 키보드 ${lesson.id}회차 ${lesson.id}차시`,
            hash: `course-${course.id}-lesson-${lesson.id}`,
            selector: '.hotkey-quick-bar'
          });
        });
      }
    });
  });

  // 2. Install & Language Guide
  installStepsData.forEach((item, idx) => {
    index.push({
      id: `install-step-${item.step}`,
      category: '설치 및 환경설정 가이드',
      badge: `설치 STEP ${item.step}`,
      badgeClass: 'badge-install',
      title: item.title,
      content: `${item.title} ${stripHtml(item.desc)}`,
      hash: 'install-guide',
      selector: `#install-steps-container .install-step-card:nth-child(${idx + 1})`
    });
  });

  // 3. Printing Checklist
  printingChecklistData.forEach((item, idx) => {
    index.push({
      id: `checklist-${idx}`,
      category: '3D 프린팅 검수 수칙',
      badge: '출력 점검',
      badgeClass: 'badge-checklist',
      title: item.title,
      content: `${item.title} ${stripHtml(item.desc)}`,
      hash: 'print-checklist',
      selector: `#checklist-container .check-card:nth-child(${idx + 1})`
    });
  });

  // 4. AI 3D Pipeline
  const aiSteps = [
    { num: 1, title: 'AI 3D Model Gen', desc: 'Text/Image-to-3D AI 도구(Tripo3D, Meshy 등)로 초안 3D Mesh (GLB/OBJ) 생성' },
    { num: 2, title: 'Blender Mesh Repair', desc: '3D Print Toolbox로 Non-manifold 에러 검출, Remesh & Solidify 두께 강화' },
    { num: 3, title: 'Slicing & G-Code', desc: 'Cura / PrusaSlicer로 서포터 배치, 적층 레이어 및 오버행 경사각 검수' },
    { num: 4, title: '3D Physical Print', desc: 'FDM / SLA 3D 프린터로 실제 손에 잡히는 커스텀 소품 출력 완료' }
  ];
  aiSteps.forEach((item, idx) => {
    index.push({
      id: `ai-step-${item.num}`,
      category: 'AI X 3D 파이프라인',
      badge: `AI 단계 0${item.num}`,
      badgeClass: 'badge-pipeline',
      title: `${item.title} (파이프라인 0${item.num})`,
      content: `${item.title} ${item.desc} 생성형 AI 3D 워크플로우`,
      hash: 'ai-pipeline',
      selector: `.pipeline-flow .flow-card:nth-of-type(${idx + 1})`
    });
  });

  // 5. 3D Slicer Installation & Guides (Bambu & Cubicon)
  if (slicerGuidesData) {
    const { intro, slicers, commonSettings, troubleshootingTips } = slicerGuidesData;

    // Slicer Intro
    index.push({
      id: 'slicer-intro',
      category: '3D 슬라이서 설치 가이드',
      badge: '슬라이서 개요',
      badgeClass: 'badge-slicer',
      title: intro.title,
      content: `${intro.title} ${stripHtml(intro.desc)} ${intro.coreRole.map(r => `${r.title} ${r.desc}`).join(' ')} 3D 슬라이서 G-Code 슬라이싱 레이어 서포터`,
      hash: 'slicer-guide',
      selector: '.slicer-intro-card'
    });

    // Practice-Supported 3D Printers
    if (practicePrintersData) {
      practicePrintersData.forEach(p => {
        index.push({
          id: `practice-printer-${p.id}`,
          category: '실습 지원 3D프린터',
          badge: p.countBadge || p.brand,
          badgeClass: p.slicerTab === 'bambu' ? 'badge-slicer-bambu' : 'badge-slicer-cubicon',
          title: p.countBadge ? `${p.model} (${p.brand}) - ${p.countBadge}` : `${p.model} (${p.brand})`,
          content: `${p.model} ${p.brand} ${p.type} ${p.role} ${p.features.join(' ')} ${p.slicer} 실습 장비 Bambu Cubicon P2S Style NEO-A22C`,
          hash: 'slicer-guide',
          selector: '.practice-printers-section'
        });
      });
    }

    // Bambu Studio Overview
    const bambu = slicers.bambu;
    if (bambu) {
      index.push({
        id: 'slicer-bambu-card',
        category: '3D 슬라이서 (뱀부 스튜디오)',
        badge: 'Bambu Studio',
        badgeClass: 'badge-slicer-bambu',
        title: `${bambu.name} - ${bambu.vendor} (${bambu.badge})`,
        content: `${bambu.name} 뱀부 스튜디오 뱀부랩 Bambu Lab AMS 멀티컬러 초고속 출력 ${bambu.printers.join(' ')} ${bambu.highlights.join(' ')}`,
        hash: 'slicer-guide',
        selector: '.bambu-card'
      });

      // Bambu Steps
      bambu.steps.forEach(st => {
        index.push({
          id: `slicer-bambu-step-${st.step}`,
          category: '뱀부 스튜디오 설치 단계',
          badge: `뱀부 STEP ${st.step}`,
          badgeClass: 'badge-slicer-bambu',
          title: `[뱀부 스튜디오] STEP ${st.step}: ${st.title}`,
          content: `${st.title} ${stripHtml(st.desc)} ${st.tip || ''} 뱀부 Bambu Studio 설치 노즐 AMS`,
          hash: 'slicer-guide',
          selector: '#slicer-steps-section'
        });
      });
    }

    // Cubicreator Slicer Overview
    const cubicon = slicers.cubicon;
    if (cubicon) {
      index.push({
        id: 'slicer-cubicon-card',
        category: '3D 슬라이서 (Cubicreator)',
        badge: 'Cubicreator',
        badgeClass: 'badge-slicer-cubicon',
        title: cubicon.vendor ? `${cubicon.name} - ${cubicon.vendor}` : `${cubicon.name}`,
        content: `${cubicon.name} 큐비콘 슬라이서 큐비크리에이터 Cubicreator Style Plus Prime ${cubicon.printers.join(' ')} ${cubicon.highlights.join(' ')}`,
        hash: 'slicer-guide',
        selector: '.cubicon-card'
      });

      // Cubicreator Steps
      cubicon.steps.forEach(st => {
        index.push({
          id: `slicer-cubicon-step-${st.step}`,
          category: 'Cubicreator 설치 단계',
          badge: `Cubicreator STEP ${st.step}`,
          badgeClass: 'badge-slicer-cubicon',
          title: `[Cubicreator] STEP ${st.step}: ${st.title}`,
          content: `${st.title} ${stripHtml(st.desc)} ${st.tip || ''} 큐비콘 Cubicreator 설치 HVS Gcode 드라이버`,
          hash: 'slicer-guide',
          selector: '#slicer-steps-section'
        });
      });
    }

    // Slicer Common Settings
    commonSettings.forEach((cs, idx) => {
      index.push({
        id: `slicer-setting-${idx}`,
        category: '슬라이서 필수 파라미터',
        badge: '슬라이서 설정',
        badgeClass: 'badge-slicer',
        title: `[슬라이서 설정] ${cs.param} : 권장 ${cs.recommended}`,
        content: `${cs.param} ${cs.recommended} ${cs.desc || ''} ${cs.importance}`,
        hash: 'slicer-guide',
        selector: '.slicer-settings-table'
      });
    });

    // Troubleshooting Tips
    troubleshootingTips.forEach((tb, idx) => {
      index.push({
        id: `slicer-troubleshoot-${idx}`,
        category: '프린팅 트러블슈팅',
        badge: '출력 문제해결',
        badgeClass: 'badge-troubleshoot',
        title: `[트러블슈팅 #${idx + 1}] ${tb.issue}`,
        content: `${tb.issue} 원인: ${tb.cause} 해결: ${tb.solution}`,
        hash: 'slicer-guide',
        selector: `.troubleshoot-grid .troubleshoot-card:nth-child(${idx + 1})`
      });
    });
  }

  return index;
}

export function initGlobalSearch() {
  searchIndex = buildSearchIndex();

  const wrap = document.getElementById('site-search-wrap');
  const input = document.getElementById('global-search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  const dropdown = document.getElementById('search-dropdown');
  const resultsList = document.getElementById('search-dropdown-list');
  const countSpan = document.getElementById('search-results-count');

  if (!wrap || !input || !dropdown || !resultsList) return;

  // Search input handler
  input.addEventListener('input', () => {
    const val = input.value;
    if (val.trim()) {
      if (clearBtn) clearBtn.style.display = 'flex';
    } else {
      if (clearBtn) clearBtn.style.display = 'none';
    }

    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      performSearch(val);
    }, 120);
  });

  // Focus handler
  input.addEventListener('focus', () => {
    if (input.value.trim()) {
      performSearch(input.value);
    }
  });

  // Clear button handler
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      closeSearchDropdown();
      input.focus();
    });
  }

  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    const items = resultsList.querySelectorAll('.search-result-item');
    if (e.key === 'Escape') {
      closeSearchDropdown();
      input.blur();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (items.length > 0) {
        selectedIndex = (selectedIndex + 1) % items.length;
        updateItemSelection(items);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (items.length > 0) {
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateItemSelection(items);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (items.length > 0) {
        const target = selectedIndex >= 0 ? items[selectedIndex] : items[0];
        if (target) target.click();
      }
    }
  });

  // Global shortcut '/' and 'Ctrl+K' / 'Cmd+K'
  window.addEventListener('keydown', (e) => {
    if (
      (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) &&
      document.activeElement !== input &&
      !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)
    ) {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) {
      closeSearchDropdown();
    }
  });

  function performSearch(query) {
    const trimmed = query.trim();
    if (!trimmed) {
      closeSearchDropdown();
      return;
    }

    const terms = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
    const results = [];

    searchIndex.forEach(item => {
      const lowerTitle = item.title.toLowerCase();
      const lowerContent = item.content.toLowerCase();
      const lowerCat = item.category.toLowerCase();

      // Check if every term matches title or content
      const allMatch = terms.every(term => 
        lowerTitle.includes(term) || lowerContent.includes(term) || lowerCat.includes(term)
      );

      if (allMatch) {
        // Calculate relevance score
        let score = 0;
        terms.forEach(term => {
          if (lowerTitle.includes(term)) score += 30;
          if (lowerCat.includes(term)) score += 10;
          if (lowerContent.includes(term)) score += 5;
        });
        results.push({ item, score });
      }
    });

    results.sort((a, b) => b.score - a.score);

    renderSearchResults(results.map(r => r.item), terms);
  }

  function renderSearchResults(results, terms) {
    selectedIndex = -1;
    dropdown.style.display = 'block';

    if (countSpan) {
      countSpan.innerText = `검색 결과 ${results.length}건`;
    }

    if (results.length === 0) {
      resultsList.innerHTML = `
        <div class="search-empty-box">
          <i data-lucide="search-x"></i>
          <span class="search-empty-title">일치하는 검색 결과가 없습니다.</span>
          <span class="search-empty-desc">철자를 확인하거나 다른 키워드(예: 베벨, 익스트루드, 불리언, 단축키 등)로 검색해 보세요.</span>
        </div>
      `;
      createIcons({ icons });
      return;
    }

    // Limit to top 25 results to maintain snappy rendering
    const displayResults = results.slice(0, 25);

    resultsList.innerHTML = displayResults.map((item, idx) => {
      const highlightedTitle = highlightText(item.title, terms);
      const snippet = createSnippet(item.content, terms);

      return `
        <div class="search-result-item" data-index="${idx}" data-hash="${item.hash}" data-selector="${item.selector || ''}">
          <div class="search-result-top">
            <span class="search-result-badge ${item.badgeClass || ''}">${item.badge}</span>
            <span class="search-result-category">${item.category}</span>
          </div>
          <div class="search-result-title">${highlightedTitle}</div>
          ${snippet ? `<div class="search-result-snippet">${snippet}</div>` : ''}
        </div>
      `;
    }).join('');

    // Attach click event to each result
    resultsList.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const hash = el.getAttribute('data-hash');
        const selector = el.getAttribute('data-selector');
        navigateToResult(hash, selector);
      });
    });

    createIcons({ icons });
  }

  function updateItemSelection(items) {
    items.forEach((it, idx) => {
      if (idx === selectedIndex) {
        it.classList.add('selected');
        it.scrollIntoView({ block: 'nearest' });
      } else {
        it.classList.remove('selected');
      }
    });
  }

  function closeSearchDropdown() {
    dropdown.style.display = 'none';
    selectedIndex = -1;
  }

  function navigateToResult(hash, selector) {
    closeSearchDropdown();

    const currentHash = window.location.hash.replace('#', '') || 'overview';
    if (currentHash !== hash) {
      window.location.hash = hash;
    }

    // Scroll and pulse target element
    setTimeout(() => {
      if (selector) {
        const el = document.querySelector(selector);
        if (el) {
          document.querySelectorAll('.search-target-highlight').forEach(e => {
            e.classList.remove('search-target-highlight');
          });

          el.classList.add('search-target-highlight');
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });

          setTimeout(() => {
            el.classList.remove('search-target-highlight');
          }, 3500);
        }
      }
    }, 150);
  }
}
