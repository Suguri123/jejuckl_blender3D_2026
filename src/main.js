import { createIcons, icons } from 'lucide';
import { coursesData, printingChecklistData, installStepsData, slicerGuidesData, practicePrintersData } from './curriculumData.js';
import { ThreeViewer } from './threeViewer.js';
import { initGlobalSearch } from './search.js';

let viewer = null;
let currentCourseId = coursesData[0].id;
let currentLessonId = 1;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide icons
  createIcons({ icons });

  // 2. Initialize 3D Viewer if container exists
  const container = document.getElementById('webgl-container');
  if (container) {
    viewer = new ThreeViewer(container);
  }

  // 3. Render Dynamic Sidebar Courses & Overview Cards
  renderSidebarCourses();
  renderOverviewCards();
  renderSlicerGuide();
  renderInstallGuide();
  renderChecklist();

  // 4. Setup Event Listeners & Router
  setupSidebarToggle();
  setupEventListeners();
  initGlobalSearch();

  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
});

function renderSidebarCourses() {
  const container = document.getElementById('sidebar-courses-container');
  if (!container) return;

  container.innerHTML = coursesData.map((course, index) => `
    <div class="course-accordion ${index === 0 ? 'open' : ''}" id="accordion-${course.id}">
      <div class="course-accordion-header" data-course-id="${course.id}">
        <div class="course-info">
          <span class="course-badge">${course.badge}</span>
          <span class="course-title">${course.title}</span>
        </div>
        <i data-lucide="chevron-down" class="accordion-arrow"></i>
      </div>
      <div class="course-lessons-list">
        ${course.lessons.map(lesson => {
          const cleanTitle = lesson.title.replace(/^[0-9]+(차시|회차):\s*/, '');
          const isUnderConstruction = lesson.id > 4;
          return `
            <a href="${isUnderConstruction ? 'javascript:void(0)' : `#course-${course.id}-lesson-${lesson.id}`}" 
               class="nav-item ${isUnderConstruction ? 'disabled' : ''}" 
               data-target="${isUnderConstruction ? '' : `course-${course.id}-lesson-${lesson.id}`}"
               data-course="${course.id}"
               data-lesson="${lesson.id}"
               ${isUnderConstruction ? 'onclick="alert(\'준비 중인 차시입니다.\'); return false;"' : ''}>
              <div class="nav-badge">${lesson.id}회차</div>
              <div class="nav-label-box">
                <span class="nav-title">${cleanTitle}${isUnderConstruction ? ' <span class="status-badge-preparing">준비중</span>' : ''}</span>
                <span class="nav-sub">${lesson.subtitle}</span>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  // Accordion Header Toggle logic
  container.querySelectorAll('.course-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.course-accordion');
      parent.classList.toggle('open');
    });
  });

  createIcons({ icons });
}

function renderOverviewCards() {
  const container = document.getElementById('overview-courses-grid');
  const statEl = document.getElementById('stat-total-courses');
  if (statEl) statEl.innerText = `${coursesData.length}개 전문 과정`;

  if (!container) return;

  container.innerHTML = coursesData.map(course => `
    <div class="course-overview-card">
      <div class="course-overview-header">
        <div>
          <h2>${course.title}</h2>
        </div>
        <span class="badge">${course.badge}</span>
      </div>
      <div class="lessons-grid">
        ${course.lessons.map(lesson => {
          const isUnderConstruction = lesson.id > 4;
          return `
            <a href="${isUnderConstruction ? 'javascript:void(0)' : `#course-${course.id}-lesson-${lesson.id}`}" 
               class="quick-card ${isUnderConstruction ? 'disabled' : ''}"
               ${isUnderConstruction ? 'onclick="alert(\'준비 중인 차시입니다.\'); return false;"' : ''}>
              <div class="quick-num">${lesson.id}회차 실습 ${isUnderConstruction ? '(준비중)' : ''}</div>
              <h3>${lesson.subtitle}</h3>
              <p>${lesson.title}</p>
              <span class="quick-link">${isUnderConstruction ? '준비 중입니다' : '학습 시작하기 →'}</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '') || 'overview';

  // Clear active states
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Hide all views
  document.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));

  if (hash.includes('lesson-')) {
    // Parse course and lesson ID
    let courseId = coursesData[0].id;
    let lessonId = 1;

    if (hash.startsWith('course-')) {
      const parts = hash.split('-lesson-');
      courseId = parts[0].replace('course-', '');
      lessonId = parseInt(parts[1], 10);
    } else {
      // fallback legacy format #lesson-1
      lessonId = parseInt(hash.replace('lesson-', ''), 10);
    }

    currentCourseId = courseId;
    currentLessonId = lessonId || 1;

    if (currentLessonId > 4) {
      alert('준비 중인 차시입니다.');
      window.location.hash = '#overview';
      return;
    }



    // Open target course accordion
    const targetAccordion = document.getElementById(`accordion-${currentCourseId}`);
    if (targetAccordion) targetAccordion.classList.add('open');

    // Highlight active nav item
    const activeNav = document.querySelector(`.nav-item[data-target="${hash}"]`) || 
                      document.querySelector(`.nav-item[data-course="${currentCourseId}"][data-lesson="${currentLessonId}"]`);
    if (activeNav) activeNav.classList.add('active');

    // Show lesson view
    const viewLesson = document.getElementById('view-lesson');
    if (viewLesson) viewLesson.classList.add('active');

    updateLessonContent(currentCourseId, currentLessonId);

  } else if (hash === 'slicer-guide') {
    const activeNav = document.querySelector('.nav-item[data-target="slicer-guide"]');
    if (activeNav) activeNav.classList.add('active');
    document.getElementById('view-slicer-guide')?.classList.add('active');
  } else if (hash === 'install-guide') {
    const activeNav = document.querySelector('.nav-item[data-target="install-guide"]');
    if (activeNav) activeNav.classList.add('active');
    document.getElementById('view-install-guide')?.classList.add('active');
  } else if (hash === 'ai-pipeline') {
    const activeNav = document.querySelector('.nav-item[data-target="ai-pipeline"]');
    if (activeNav) activeNav.classList.add('active');
    document.getElementById('view-ai-pipeline')?.classList.add('active');
  } else if (hash === 'print-checklist') {
    const activeNav = document.querySelector('.nav-item[data-target="print-checklist"]');
    if (activeNav) activeNav.classList.add('active');
    document.getElementById('view-print-checklist')?.classList.add('active');
  } else {
    // Overview
    const activeNav = document.querySelector('.nav-item[data-target="overview"]');
    if (activeNav) activeNav.classList.add('active');
    document.getElementById('view-overview')?.classList.add('active');
  }

  closeMobileSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let activeSlicerKey = 'bambu';

function renderSlicerGuide() {
  const container = document.getElementById('slicer-guide-container');
  if (!container || !slicerGuidesData) return;

  const base = import.meta.env.BASE_URL;
  const { intro, slicers, commonSettings, troubleshootingTips } = slicerGuidesData;
  const bambu = slicers.bambu;
  const cubicon = slicers.cubicon;

  container.innerHTML = `
    <!-- 1. Slicer Introduction & Core Roles -->
    <div class="slicer-intro-card">
      <div class="slicer-intro-header">
        <div class="slicer-intro-badge">
          <i data-lucide="layers"></i>
          <span>핵심 개념 이해</span>
        </div>
        <h3>${intro.title}</h3>
        <p>${intro.desc}</p>
      </div>

      <!-- 3D Printing & Slicing Process Infographic Box -->
      <div class="slicer-diagram-box">
        <div class="slicer-diagram-topbar">
          <div class="slicer-diagram-tag-box">
            <span class="diagram-tag">3D 프린팅 & 슬라이싱 5단계 워크플로우</span>
          </div>
        </div>

        <div class="slicer-diagram-headline">
          <h4>3D 모델링(Blender) ➔ 데이터 변환(STL) ➔ 3D 슬라이싱(G-code) ➔ 3D 프린터 출력 ➔ 피규어 후가공</h4>
        </div>

        <div class="slicer-diagram-img-wrap">
          <img id="slicer-process-img" src="${base}images/slicer_process_infographic.jpg" alt="3D 프린팅 및 슬라이싱 5단계 워크플로우 과정" class="slicer-diagram-img" loading="lazy" />
        </div>

        <div class="slicer-diagram-caption">
          <i data-lucide="info"></i>
          <span><b>3D 슬라이서(Slicer)의 핵심 역할</b>: 컴퓨터 속의 3차원 다각형 메시(STL)를 3D 프린터 하드웨어가 층층이(Layer by Layer) 노즐로 녹여 쌓아 올릴 수 있도록 2D 단면 경로 및 G-code 명령어로 연산·변환해 주는 필수 소프트웨어 단계입니다.</span>
        </div>
      </div>

      <div class="slicer-roles-grid">
        ${intro.coreRole.map(role => `
          <div class="slicer-role-item">
            <div class="slicer-role-icon">
              <i data-lucide="${role.icon}"></i>
            </div>
            <div class="slicer-role-text">
              <h4>${role.title}</h4>
              <p>${role.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 2. Practice-Supported 3D Printers Section -->
    <div class="practice-printers-section">
      <div class="slicer-section-title">
        <i data-lucide="printer"></i>
        <h3>실습 지원 3D프린터</h3>
        <span class="sub-desc">교육장 및 메이커스페이스에 비치된 실제 3D 프린터 하드웨어 보유 현황입니다. (뱀부랩 2대 · 큐비콘 3대)</span>
      </div>

      <div class="practice-printers-grid">
        ${practicePrintersData.map(printer => `
          <div class="practice-printer-card" style="border-top: 4px solid ${printer.badgeColor};">
            <div class="printer-card-top">
              <div class="printer-brand-box">
                <div class="printer-logo-badge" style="background: ${printer.badgeColor};">
                  <i data-lucide="${printer.icon}"></i>
                </div>
                <div>
                  <span class="printer-brand">${printer.brand}</span>
                  <h4 class="printer-model">${printer.model}</h4>
                </div>
              </div>
              ${printer.countBadge ? `
                <span class="printer-count-pill" style="background: ${printer.badgeColor}15; color: ${printer.badgeColor}; border: 1px solid ${printer.badgeColor}40;">
                  ${printer.countBadge}
                </span>
              ` : ''}
            </div>

            <div class="printer-type-tag">
              <i data-lucide="cpu"></i>
              <span>${printer.type}</span>
            </div>

            ${printer.image ? `
              <div class="printer-img-wrap">
                <img src="${printer.image.startsWith('./') ? base + printer.image.slice(2) : printer.image}" alt="${printer.model} 실물 장비" class="printer-card-img" loading="lazy" />
              </div>
            ` : ''}

            <div class="printer-features">
              <div class="features-label">장비 주요 특장점</div>
              <ul>
                ${printer.features.map(f => `<li><i data-lucide="check-circle-2"></i><span>${f}</span></li>`).join('')}
              </ul>
            </div>

            <div class="printer-card-bottom">
              <div class="printer-role-box">
                <span class="role-value">${printer.role}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 3. Dual Slicer Overview & Download Cards -->
    <div class="slicer-comparison-section">
      <div class="slicer-section-title">
        <i data-lucide="download-cloud"></i>
        <h3>실습 지원 3D 슬라이서 다운로드</h3>
        <span class="sub-desc">보유 장비(뱀부랩 P2S 2대, 큐비콘 Style NEO-A22C 3대)에 맞춰 최신 공식 슬라이서를 설치하세요.</span>
      </div>

      <div class="slicer-cards-grid">
        <!-- Bambu Studio Card -->
        <div class="slicer-card bambu-card">
          <div class="slicer-card-top">
            <div class="slicer-brand-box">
              <div class="slicer-logo-badge" style="background: linear-gradient(135deg, #00ae42, #10b981);">
                <i data-lucide="zap"></i>
              </div>
              <div>
                ${bambu.vendor ? `<span class="slicer-vendor">${bambu.vendor}</span>` : ''}
                <h4 class="slicer-name">${bambu.name}</h4>
              </div>
            </div>
            ${bambu.badge ? `<span class="slicer-pill" style="background: rgba(0, 174, 66, 0.12); color: #008f36; border: 1px solid rgba(0, 174, 66, 0.3);">${bambu.badge}</span>` : ''}
          </div>

          <p class="slicer-desc">${bambu.desc}</p>

          <div class="slicer-specs">
            <div class="spec-row">
              <span class="spec-label">지원 기종</span>
              <span class="spec-value">${bambu.printers.join(', ')}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">지원 OS</span>
              <span class="spec-value">${bambu.osSupport}</span>
            </div>
          </div>

          <div class="slicer-highlights">
            <div class="highlight-title">주요 특장점</div>
            <ul>
              ${bambu.highlights.map(h => `<li><i data-lucide="check-circle-2"></i><span>${h}</span></li>`).join('')}
            </ul>
          </div>

          <div class="slicer-actions">
            <a href="${bambu.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-slicer-primary btn-bambu">
              <i data-lucide="download"></i>
              <span>공식 다운로드 (Windows / Mac)</span>
            </a>
            <button type="button" class="btn-slicer-secondary btn-jump-guide" data-slicer="bambu">
              <i data-lucide="chevron-right"></i>
              <span>뱀부 설치 가이드 보기</span>
            </button>
          </div>
        </div>

        <!-- Cubicon Slicer Card -->
        <div class="slicer-card cubicon-card">
          <div class="slicer-card-top">
            <div class="slicer-brand-box">
              <div class="slicer-logo-badge" style="background: linear-gradient(135deg, #0284c7, #2563eb);">
                <i data-lucide="box"></i>
              </div>
              <div>
                ${cubicon.vendor ? `<span class="slicer-vendor">${cubicon.vendor}</span>` : ''}
                <h4 class="slicer-name">${cubicon.name}</h4>
              </div>
            </div>
            ${cubicon.badge ? `<span class="slicer-pill" style="background: rgba(2, 132, 199, 0.12); color: #0284c7; border: 1px solid rgba(2, 132, 199, 0.3);">${cubicon.badge}</span>` : ''}
          </div>

          <p class="slicer-desc">${cubicon.desc}</p>

          <div class="slicer-specs">
            <div class="spec-row">
              <span class="spec-label">지원 기종</span>
              <span class="spec-value">${cubicon.printers.join(', ')}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">지원 OS</span>
              <span class="spec-value">${cubicon.osSupport}</span>
            </div>
          </div>

          <div class="slicer-highlights">
            <div class="highlight-title">주요 특장점</div>
            <ul>
              ${cubicon.highlights.map(h => `<li><i data-lucide="check-circle-2"></i><span>${h}</span></li>`).join('')}
            </ul>
          </div>

          <div class="slicer-actions">
            <a href="${cubicon.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-slicer-primary btn-cubicon">
              <i data-lucide="download"></i>
              <span>Cubicreator 공식 다운로드</span>
            </a>
            <button type="button" class="btn-slicer-secondary btn-jump-guide" data-slicer="cubicon">
              <i data-lucide="chevron-right"></i>
              <span>Cubicreator 설치 가이드 보기</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Interactive Step-by-Step Installation Tabs -->
    <div class="slicer-tabs-container" id="slicer-steps-section">
      <div class="slicer-tabs-header">
        <div class="tabs-title-group">
          <i data-lucide="wrench"></i>
          <div>
            <h3>슬라이서 단계별 설치 & 환경 설정 가이드</h3>
            <p>소프트웨어 인스톨부터 초기 노즐/베드 설정 및 첫 슬라이싱까지 순서대로 따라 해보세요.</p>
          </div>
        </div>

        <div class="slicer-tab-buttons" role="tablist">
          <button type="button" class="slicer-tab-btn ${activeSlicerKey === 'bambu' ? 'active' : ''}" data-tab="bambu">
            <i data-lucide="zap"></i>
            <span>뱀부 스튜디오 (Bambu Studio)</span>
          </button>
          <button type="button" class="slicer-tab-btn ${activeSlicerKey === 'cubicon' ? 'active' : ''}" data-tab="cubicon">
            <i data-lucide="box"></i>
            <span>Cubicreator (큐비크리에이터)</span>
          </button>
        </div>
      </div>

      <!-- Tab Content: Step Cards -->
      <div id="slicer-steps-content" class="slicer-steps-content">
        <!-- Rendered dynamically by updateSlicerSteps() -->
      </div>
    </div>

    <!-- 4. Bambu Studio Software Screen Showcase -->
    <div class="slicer-screen-section" id="bambu-studio-preview">
      <div class="slicer-section-title">
        <i data-lucide="monitor"></i>
        <h3>Bambu Studio 실행화면 (슬라이서 메인 인터페이스)</h3>
        <span class="sub-desc">실제 교육용 Bambu Lab P2S 3D 프린터 및 텍스처 PEI 플레이트 환경의 뱀부 스튜디오 슬라이서 실행 화면입니다.</span>
      </div>

      <div class="slicer-screen-card">
        <div class="slicer-screen-topbar">
          <div class="slicer-screen-tags">
            <span class="screen-tag-bambu"><i data-lucide="zap"></i> Bambu Studio</span>
            <span class="screen-tag-printer"><i data-lucide="printer"></i> Bambu Lab P2S (0.4mm Nozzle)</span>
            <span class="screen-tag-plate"><i data-lucide="layers"></i> Textured PEI Plate</span>
          </div>
          <span class="screen-zoom-hint"><i data-lucide="maximize-2"></i> 클릭하여 원본 크게 보기</span>
        </div>

        <div class="slicer-screen-img-wrap" id="btn-zoom-bambu-screen" title="클릭하여 원본 크게 보기">
          <img id="bambu-screen-img" src="${base}images/bambu_studio_screen.png" alt="Bambu Studio 실행화면 (슬라이서 메인 인터페이스)" class="slicer-screen-img" loading="lazy" />
          <div class="slicer-screen-hover-overlay">
            <span class="screen-hover-badge"><i data-lucide="zoom-in"></i> 원본 크기로 확대 보기</span>
          </div>
        </div>

        <div class="slicer-screen-caption">
          <i data-lucide="info"></i>
          <div>
            <b>Bambu Studio UI 구성 & 파라미터 가이드</b>: 좌측 패널의 [프린터 / 필라멘트 / 프로세스] 영역에서 바로 아래 <b>'3D 모델 출력 필수 슬라이서 설정'</b>의 권장 값(0.20mm 표준 레이어 높이, 인필 15~20%, 외벽 2~3회, 트리 서포트 등)을 손쉽게 설정하고, 중앙 3D 뷰포트에서 모델의 안착 상태와 서포트 형성을 직관적으로 확인합니다.
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Essential Slicer Parameters Cheat Sheet -->
    <div class="slicer-settings-section">
      <div class="slicer-section-title">
        <i data-lucide="sliders"></i>
        <h3>3D 모델 출력 필수 슬라이서 설정</h3>
        <span class="sub-desc">블렌더 모델링의 디테일과 내구성을 살리기 위한 6대 핵심 파라미터 최적값입니다.</span>
      </div>

      <div class="settings-table-wrapper">
        <table class="slicer-settings-table">
          <thead>
            <tr>
              <th style="width: 15%;">출력 파라미터</th>
              <th style="width: 37%;">파라미터 의미 & 설명</th>
              <th style="width: 16%;">권장 설정값</th>
              <th style="width: 32%;">설정 이유 & 주의사항</th>
            </tr>
          </thead>
          <tbody>
            ${commonSettings.map(set => `
              <tr>
                <td class="param-name font-bold">${set.param}</td>
                <td class="param-desc">${set.desc}</td>
                <td class="param-recom"><span class="recom-badge">${set.recommended}</span></td>
                <td class="param-why">${set.importance}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- 6. Bambu Studio 5-Step Essential Operation Guide -->
    <div class="slicer-screen-section" id="bambu-studio-workflow-guide">
      <div class="slicer-section-title">
        <i data-lucide="list-ordered"></i>
        <h3>Bambu Studio 슬라이서 조작 5단계 핵심 가이드</h3>
        <span class="sub-desc">3D 모델 파일 임포트부터 프린터 매핑, 상세 모델 설정, 층높이 및 출력 파라미터 지정까지의 5대 핵심 순서입니다.</span>
      </div>

      <div class="slicer-screen-card">
        <div class="slicer-screen-topbar">
          <div class="slicer-screen-tags">
            <span class="screen-tag-bambu"><i data-lucide="check-circle-2"></i> 핵심 조작 순서</span>
            <span class="screen-tag-printer">①~⑤단계 프로세스 맵</span>
            <span class="screen-tag-plate">Bambu Lab P2S</span>
          </div>
          <span class="screen-zoom-hint"><i data-lucide="maximize-2"></i> 클릭하여 원본 크게 보기</span>
        </div>

        <div class="slicer-screen-img-wrap zoomable-img-wrap" data-title="Bambu Studio 슬라이서 조작 5단계 핵심 가이드" title="클릭하여 원본 크게 보기">
          <img src="${base}images/bambu_studio_step_guide.png" alt="Bambu Studio 슬라이서 조작 5단계 핵심 가이드" class="slicer-screen-img" loading="lazy" />
          <div class="slicer-screen-hover-overlay">
            <span class="screen-hover-badge"><i data-lucide="zoom-in"></i> 원본 크기로 확대 보기</span>
          </div>
        </div>

        <div class="slicer-workflow-steps-grid">
          <div class="workflow-step-badge-card">
            <span class="wf-num">①</span>
            <div class="wf-info">
              <b>프린터 선택</b>
              <p>교육장 보유 기종인 Bambu Lab P2S, 0.4mm 노즐 및 텍스처 PEI 플레이트를 지정합니다.</p>
            </div>
          </div>
          <div class="workflow-step-badge-card">
            <span class="wf-num">②</span>
            <div class="wf-info">
              <b>3D모델(출력 파일) 선택</b>
              <p>상단의 [추가 (Ctrl+I)] 버튼을 누르거나 작업 뷰포트로 STL/3MF 파일을 드래그합니다.</p>
            </div>
          </div>
          <div class="workflow-step-badge-card">
            <span class="wf-num">③</span>
            <div class="wf-info">
              <b>상세 모델 설정</b>
              <p>상단 도구 모음을 통해 모델 크기(Scale), 회전, 자동 배치, 서포트 그리기 및 컬러를 지정합니다.</p>
            </div>
          </div>
          <div class="workflow-step-badge-card">
            <span class="wf-num">④</span>
            <div class="wf-info">
              <b>층높이(Layer Height) 설정</b>
              <p>출력 디테일에 맞춰 0.20mm Standard 또는 0.12mm Fine 레이어 프로파일을 선택합니다.</p>
            </div>
          </div>
          <div class="workflow-step-badge-card">
            <span class="wf-num">⑤</span>
            <div class="wf-info">
              <b>상세 출력 설정</b>
              <p>[품질], [강도](인필/외벽), [속도], [서포트](트리 서포트) 탭에서 최적 파라미터를 확정합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7. Online Free 3D Models Direct Import in Bambu Studio -->
    <div class="slicer-screen-section" id="bambu-online-models-section">
      <div class="slicer-section-title">
        <i data-lucide="cloud-download"></i>
        <h3>온라인 무료 3D 모델 뱀부스튜디오에서 바로 불러오기 (MakerWorld 연동)</h3>
        <span class="sub-desc">별도의 웹 서핑이나 복잡한 파일 변환 없이, 뱀부스튜디오 내부에서 수많은 온라인 무료 3D 모델을 원클릭으로 탐색하고 슬라이서에 즉시 불러올 수 있습니다.</span>
      </div>

      <!-- Feature Highlight Banner -->
      <div class="slicer-online-feature-banner">
        <div class="feature-banner-icon">
          <i data-lucide="sparkles"></i>
        </div>
        <div class="feature-banner-text">
          <h4>💡 온라인 무료 3D 모델 원클릭 다이렉트 로드 기능</h4>
          <p>
            <b>온라인에 있는 다양한 무료 3D 모델(피규어, 캐릭터, 실생활 굿즈 등)을 뱀부스튜디오에서 바로 검색하고 원클릭으로 불러올 수 있습니다.</b><br />
            웹 브라우저를 따로 열어 파일을 다운로드하고 압축을 풀 필요 없이, 슬라이서 내 [온라인 모델] 탭에서 원하는 모델을 골라 [다운로드 및 열기]를 클릭하면 작업 화면의 빌드 플레이트로 자동 배치되어 즉시 슬라이싱과 출력이 가능합니다.
          </p>
        </div>
      </div>

      <div class="slicer-online-models-flow">
        <!-- Step 1: Search & One-Click Download -->
        <div class="slicer-online-step-card">
          <div class="slicer-screen-topbar">
            <div class="slicer-screen-tags">
              <span class="screen-tag-bambu"><i data-lucide="search"></i> 1단계: 온라인 무료 모델 탐색</span>
              <span class="screen-tag-printer">키워드 검색 (예: 피규어)</span>
              <span class="screen-tag-plate">원클릭 [다운로드 및 열기]</span>
            </div>
            <span class="screen-zoom-hint"><i data-lucide="maximize-2"></i> 클릭하여 원본 크게 보기</span>
          </div>

          <div class="slicer-screen-img-wrap zoomable-img-wrap" data-title="온라인 무료 모델 검색 및 [다운로드 및 열기]" title="클릭하여 원본 크게 보기">
            <img src="${base}images/bambu_online_model_search.png" alt="온라인 무료 모델 검색 및 다운로드 및 열기" class="slicer-screen-img" loading="lazy" />
            <div class="slicer-screen-hover-overlay">
              <span class="screen-hover-badge"><i data-lucide="zoom-in"></i> 원본 크기로 확대 보기</span>
            </div>
          </div>

          <div class="slicer-screen-caption">
            <i data-lucide="info"></i>
            <div>
              <b>① 온라인 무료 모델 검색 & [다운로드 및 열기]</b>: 뱀부스튜디오 홈 화면의 좌측 메뉴에서 <b>[온라인 모델]</b> 탭을 클릭한 뒤, 상단 검색창에 <i>피규어</i> 등의 키워드를 입력합니다. 마음에 드는 무료 모델을 선택하면 나타나는 팝업에서 우측 하단의 초록색 <b>[다운로드 및 열기]</b> 버튼을 누릅니다.
            </div>
          </div>
        </div>

        <!-- Step 2: Loaded directly onto Build Plate -->
        <div class="slicer-online-step-card">
          <div class="slicer-screen-topbar">
            <div class="slicer-screen-tags">
              <span class="screen-tag-bambu"><i data-lucide="box"></i> 2단계: 슬라이서 플레이트 자동 로드</span>
              <span class="screen-tag-printer">3D 모델 자동 배치 완료</span>
              <span class="screen-tag-plate">[플레이트 슬라이스] 준비</span>
            </div>
            <span class="screen-zoom-hint"><i data-lucide="maximize-2"></i> 클릭하여 원본 크게 보기</span>
          </div>

          <div class="slicer-screen-img-wrap zoomable-img-wrap" data-title="온라인 모델이 뱀부스튜디오 빌드 플레이트에 자동 로드된 모습" title="클릭하여 원본 크게 보기">
            <img src="${base}images/bambu_online_model_loaded.png" alt="온라인 모델이 뱀부스튜디오 빌드 플레이트에 자동 로드된 모습" class="slicer-screen-img" loading="lazy" />
            <div class="slicer-screen-hover-overlay">
              <span class="screen-hover-badge"><i data-lucide="zoom-in"></i> 원본 크기로 확대 보기</span>
            </div>
          </div>

          <div class="slicer-screen-caption">
            <i data-lucide="check-circle"></i>
            <div>
              <b>② 빌드 플레이트 자동 안착 & 슬라이싱 준비 완료</b>: 다운로드 완료 즉시 뱀부스튜디오의 3D 작업 화면으로 자동 전환되며, 선택한 피규어 모델이 <b>빌드 플레이트 위에 자동으로 안착</b>됩니다. 레이어 높이, 외벽 수, 인필 등 슬라이서 옵션을 확인한 후 우측 상단의 <b>[플레이트 슬라이스]</b>를 클릭하여 바로 출력할 수 있습니다. <b>설정을 변경해도 됩니다.</b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 8. 3D Print Failure Prevention & Troubleshooting -->
    <div class="slicer-troubleshoot-section">
      <div class="slicer-section-title">
        <i data-lucide="alert-triangle"></i>
        <h3>3D 프린팅 출력 실패 방지 트러블슈팅 (Troubleshooting)</h3>
        <span class="sub-desc">슬라이싱 및 첫 출력 과정에서 자주 마주치는 4대 오류 원인과 즉각적인 해결법입니다.</span>
      </div>

      <div class="troubleshoot-grid">
        ${troubleshootingTips.map((tip, idx) => `
          <div class="troubleshoot-card">
            <div class="troubleshoot-header">
              <span class="troubleshoot-num">문제 #${idx + 1}</span>
              <h4>${tip.issue}</h4>
            </div>
            <div class="troubleshoot-body">
              <div class="tb-item tb-cause">
                <span class="tb-tag">발생 원인</span>
                <p>${tip.cause}</p>
              </div>
              <div class="tb-item tb-sol">
                <span class="tb-tag">해결 방법</span>
                <p>${tip.solution}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Scroll Top Button -->
    <div class="scroll-top-box" style="margin-top: 2rem;">
      <button id="btn-scroll-top-slicer" class="btn-scroll-top">
        <i data-lucide="arrow-up-circle"></i>
        <span>맨 위로 올라가기</span>
      </button>
    </div>
  `;

  // Render initial step list for active tab
  updateSlicerSteps(activeSlicerKey);

  // Tab Button Click Listeners
  container.querySelectorAll('.slicer-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      if (tabKey && tabKey !== activeSlicerKey) {
        activeSlicerKey = tabKey;
        container.querySelectorAll('.slicer-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateSlicerSteps(activeSlicerKey);
      }
    });
  });

  // Jump to guide buttons
  container.querySelectorAll('.btn-jump-guide').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSlicer = btn.getAttribute('data-slicer');
      if (targetSlicer) {
        activeSlicerKey = targetSlicer;
        container.querySelectorAll('.slicer-tab-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-tab') === targetSlicer);
        });
        updateSlicerSteps(activeSlicerKey);
        const stepsSection = document.getElementById('slicer-steps-section');
        if (stepsSection) {
          stepsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Scroll to top button
  const btnScroll = document.getElementById('btn-scroll-top-slicer');
  if (btnScroll) {
    btnScroll.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Zoom preview click for all zoomable images in slicer guide
  const zoomableWraps = container.querySelectorAll('.zoomable-img-wrap, #btn-zoom-bambu-screen');
  const imageModal = document.getElementById('image-modal');
  const imageModalImg = document.getElementById('image-modal-img');
  const imageModalTitle = document.getElementById('image-modal-title');

  zoomableWraps.forEach(wrap => {
    wrap.addEventListener('click', () => {
      const img = wrap.querySelector('img');
      const title = wrap.getAttribute('data-title') || img?.getAttribute('alt') || '이미지 확대 미리보기';
      if (img && imageModal && imageModalImg) {
        imageModalImg.src = img.src;
        if (imageModalTitle) {
          imageModalTitle.innerHTML = `<i data-lucide="image"></i> <span>${title}</span>`;
        }
        imageModal.classList.remove('hidden');
        createIcons({ icons });
      }
    });
  });

  createIcons({ icons });
}

function updateSlicerSteps(slicerKey) {
  const contentEl = document.getElementById('slicer-steps-content');
  if (!contentEl || !slicerGuidesData) return;

  const currentSlicer = slicerGuidesData.slicers[slicerKey];
  if (!currentSlicer) return;

  contentEl.innerHTML = `
    <div class="slicer-steps-banner" style="border-left: 4px solid ${currentSlicer.badgeColor};">
      <div class="banner-badge" style="background: ${currentSlicer.badgeColor}; color: #ffffff;">
        ${currentSlicer.shortName}
      </div>
      <div class="banner-info">
        <h4>${currentSlicer.name} - 단계별 설치 및 환경 구성</h4>
        <p>${currentSlicer.desc}</p>
      </div>
    </div>

    <div class="slicer-steps-grid">
      ${currentSlicer.steps.map(step => `
        <div class="slicer-step-card" id="step-${currentSlicer.id}-${step.step}">
          <div class="slicer-step-header">
            <span class="slicer-step-pill">STEP ${step.step}</span>
            <h4>${step.title}</h4>
          </div>
          <div class="slicer-step-body">
            <p class="slicer-step-desc">${step.desc}</p>

            ${step.link ? `
              <div class="slicer-step-link-box">
                <a href="${step.link}" target="_blank" rel="noopener noreferrer" class="slicer-direct-btn">
                  <i data-lucide="external-link"></i>
                  <span>${step.linkText || '공식 다운로드 링크'}</span>
                </a>
              </div>
            ` : ''}

            ${step.tip ? `
              <div class="slicer-pro-tip">
                <div class="tip-badge"><i data-lucide="help-circle"></i><span>핵심 팁</span></div>
                <div class="tip-text">${step.tip}</div>
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  createIcons({ icons });
}

function renderInstallGuide() {
  const container = document.getElementById('install-steps-container');
  if (!container) return;

  const cardsHtml = installStepsData.map(item => `
    <div class="install-step-card">
      <div class="install-step-header">
        <span class="install-step-num">STEP ${item.step}</span>
        <div class="install-step-info">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
      <div class="install-step-img-box">
        <img src="${item.img}" alt="${item.title}" loading="lazy" ${[9, 12, 13].includes(item.step) ? 'style="height: auto; width: 100%; max-width: 100%;"' : ''} />
      </div>
    </div>
  `).join('');

  const topButtonHtml = `
    <div class="scroll-top-box">
      <button id="btn-scroll-top-guide" class="btn-scroll-top">
        <i data-lucide="arrow-up-circle"></i>
        <span>맨 위로 올라가기</span>
      </button>
    </div>
  `;

  container.innerHTML = cardsHtml + topButtonHtml;

  const btnScroll = document.getElementById('btn-scroll-top-guide');
  if (btnScroll) {
    btnScroll.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  createIcons({ icons });
}

function updateLessonContent(courseId, lessonId) {
  const course = coursesData.find(c => c.id === courseId) || coursesData[0];
  const lesson = course.lessons.find(l => l.id === lessonId) || course.lessons[0];

  // Breadcrumbs
  document.getElementById('current-course-name').innerText = course.title;
  document.getElementById('current-lesson-name').innerText = `${lesson.id}회차: ${lesson.subtitle}`;

  // Content
  document.getElementById('current-badge').innerText = lesson.badge;
  document.getElementById('current-title').innerText = lesson.title;
  document.getElementById('current-subtitle').innerText = lesson.subtitle;

  // Outcomes
  const outcomesEl = document.getElementById('current-outcomes');
  outcomesEl.innerHTML = lesson.outcomes.map(o => `<li>${o}</li>`).join('');

  // Steps
  const stepsEl = document.getElementById('current-steps');
  stepsEl.innerHTML = lesson.steps.map(s => `
    ${s.beforeStepImg ? `
      <div class="before-step-img-box" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.5rem; margin-bottom: 0.6rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <img src="${s.beforeStepImg}" alt="${s.title}" style="width: 100%; display: block; height: auto; object-fit: contain; border-radius: 6px;" />
      </div>
    ` : ''}
    <div class="step-item flex-col">
      <div class="step-header-box">
        <div class="step-num">${s.step}</div>
        <div class="step-content">
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
        </div>
      </div>
      ${s.subItems && s.subItems.length > 0 ? `
        <div class="step-sub-items-box" style="margin-top: 0.8rem; display: flex; flex-direction: column; gap: 0.8rem;">
          ${s.subItems.map(sub => `
            <div class="sub-item-card" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.8rem 1rem;">
              ${sub.img && sub.imgPos === 'before-title' ? `
                <div class="sub-item-img-box" style="border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; padding: 0.3rem; background: #fafafa; margin-bottom: 0.6rem; display: inline-block;">
                  <img src="${sub.img}" alt="${sub.subTitle}" style="max-width: ${sub.imgWidth || '100%'}; width: 100%; display: block; height: auto; object-fit: contain;" />
                </div>
              ` : ''}
              ${sub.subTitle ? `<h5 style="font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-bottom: 0.3rem;">${sub.subTitle}</h5>` : ''}
              <p style="font-size: 0.83rem; color: #475569; margin-bottom: 0.5rem;">${sub.subDesc}</p>
              ${sub.img && sub.imgPos === 'top' ? `
                <div class="sub-item-img-box" style="border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; padding: 0.3rem; background: #fafafa; margin-bottom: 0.6rem; display: inline-block;">
                  <img src="${sub.img}" alt="${sub.subTitle}" style="max-width: ${sub.imgWidth || '100%'}; width: 100%; display: block; height: auto; object-fit: contain;" />
                </div>
              ` : ''}
              ${sub.details && sub.details.length > 0 ? `
                <ul style="list-style: disc; padding-left: 1.2rem; margin-bottom: 0.6rem; font-size: 0.82rem; color: #334155;">
                  ${sub.details.map(d => (d.startsWith('<div') || d.startsWith('<img')) ? `<div style="list-style: none; margin-left: -1.2rem; margin-top: 0.4rem; margin-bottom: 0.4rem;">${d}</div>` : `<li style="margin-bottom: 0.25rem;">${d}</li>`).join('')}
                </ul>
              ` : ''}
              ${sub.table ? `
                <div class="sub-item-table-box" style="margin-bottom: 0.6rem; overflow-x: auto;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left; background: #ffffff; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1;">
                    <thead>
                      <tr style="background: #f1f5f9; color: #1e293b; font-weight: 600;">
                        ${sub.table.headers.map(h => `<th style="padding: 7px 10px; border-bottom: 2px solid #cbd5e1;">${h}</th>`).join('')}
                      </tr>
                    </thead>
                    <tbody>
                      ${sub.table.rows.map(row => `
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                          <td style="padding: 6px 10px; font-weight: 600; color: #2563eb;">${row[0]}</td>
                          <td style="padding: 6px 10px; font-weight: 600; color: #0f172a;">${row[1]}</td>
                          <td style="padding: 6px 10px; color: #475569;">${row[2]}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              ` : ''}
              ${sub.img && sub.imgPos !== 'top' && sub.imgPos !== 'before-title' ? `
                <div class="sub-item-img-box" style="border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; padding: 0.3rem; background: #fafafa; margin-bottom: ${sub.img2 ? '0.6rem' : '0'};">
                  <img src="${sub.img}" alt="${sub.subTitle}" style="max-width: ${sub.imgWidth || '100%'}; width: 100%; display: block; height: auto; object-fit: contain;" />
                </div>
              ` : ''}
              ${sub.img2 ? `
                <div class="sub-item-img-box2" style="border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; padding: 0.5rem; background: #f8fafc; margin-top: 0.6rem;">
                  ${sub.img2Title ? `<p style="font-size: 0.8rem; font-weight: 600; color: #1e3a8a; margin-bottom: 0.3rem;">📌 ${sub.img2Title}</p>` : ''}
                  <img src="${sub.img2}" alt="${sub.img2Title || sub.subTitle}" style="max-width: ${sub.img2Width || '100%'}; width: 100%; display: block; height: auto; object-fit: contain;" />
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : s.img ? `
        <div class="step-img-box" style="margin-top: 0.8rem; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.4rem; background: #fff;">
          <img src="${s.img}" alt="${s.title}" style="width: 100%; display: block; height: auto; object-fit: contain;" />
        </div>
      ` : ''}
    </div>
  `).join('');

  // Print Tips
  const tipsBox = document.querySelector('.print-tips-box');
  const tipsEl = document.getElementById('current-print-tips');
  if (tipsBox && tipsEl) {
    if (lesson.printTips && lesson.printTips.length > 0) {
      tipsBox.style.display = '';
      tipsEl.innerHTML = lesson.printTips.map(t => `<li>${t}</li>`).join('');
    } else {
      tipsBox.style.display = 'none';
    }
  }

  // Quick Hotkeys
  const hotkeysBox = document.querySelector('.hotkey-quick-bar');
  const hotkeysEl = document.getElementById('quick-hotkeys');
  if (hotkeysBox && hotkeysEl) {
    if (lesson.hotkeys && lesson.hotkeys.length > 0) {
      hotkeysBox.style.display = '';
      hotkeysEl.innerHTML = lesson.hotkeys.map(h => `
        <div class="key-pill">
          <span class="key-badge">${h.key}</span>
          <span>${h.desc}</span>
        </div>
      `).join('');
    } else {
      hotkeysBox.style.display = 'none';
    }
  }

  // 3D Model Render
  if (viewer && lesson.objectType) {
    viewer.loadModel(lesson.objectType);
  }

  createIcons({ icons });
}

function renderChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;

  container.innerHTML = printingChecklistData.map(item => `
    <div class="check-card">
      <div class="check-icon">
        <i data-lucide="check-circle-2"></i>
      </div>
      <div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');

  createIcons({ icons });
}

function setupSidebarToggle() {
  const toggleBtn = document.getElementById('btn-sidebar-toggle');
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      closeMobileSidebar();
    });
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

function setupEventListeners() {
  // 3D Viewer Controls
  const btnSolid = document.getElementById('btn-mode-solid');
  const btnWire = document.getElementById('btn-mode-wire');
  const btnReset = document.getElementById('btn-reset-cam');

  if (btnSolid && btnWire) {
    btnSolid.addEventListener('click', () => {
      btnSolid.classList.add('active');
      btnWire.classList.remove('active');
      if (viewer) viewer.toggleWireframe(false);
    });

    btnWire.addEventListener('click', () => {
      btnWire.classList.add('active');
      btnSolid.classList.remove('active');
      if (viewer) viewer.toggleWireframe(true);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (viewer) viewer.resetCamera();
    });
  }

  // Modal Hotkeys
  const btnOpenHotkeys = document.getElementById('btn-open-hotkeys');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const modal = document.getElementById('hotkey-modal');
  const searchInput = document.getElementById('hotkey-search');

  if (btnOpenHotkeys && modal) {
    btnOpenHotkeys.addEventListener('click', () => {
      modal.classList.remove('hidden');
      renderModalHotkeys('');
    });
  }

  if (btnCloseModal && modal) {
    btnCloseModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderModalHotkeys(e.target.value.toLowerCase());
    });
  }

  // Image Lightbox Modal handlers
  const imageModal = document.getElementById('image-modal');
  const btnCloseImageModal = document.getElementById('btn-close-image-modal');

  if (btnCloseImageModal && imageModal) {
    btnCloseImageModal.addEventListener('click', () => {
      imageModal.classList.add('hidden');
    });
  }

  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        imageModal.classList.add('hidden');
      }
    });
  }

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
      }
      if (imageModal && !imageModal.classList.contains('hidden')) {
        imageModal.classList.add('hidden');
      }
    }
  });
}

function renderModalHotkeys(filterText) {
  const container = document.getElementById('modal-hotkey-list');
  if (!container) return;

  const allHotkeys = [];
  coursesData.forEach(c => {
    c.lessons.forEach(l => {
      l.hotkeys.forEach(h => {
        if (!allHotkeys.some(item => item.key === h.key)) {
          allHotkeys.push(h);
        }
      });
    });
  });

  const filtered = allHotkeys.filter(h => 
    h.key.toLowerCase().includes(filterText) || h.desc.toLowerCase().includes(filterText)
  );

  container.innerHTML = filtered.map(h => `
    <div class="key-pill" style="padding: 0.6rem;">
      <span class="key-badge">${h.key}</span>
      <span style="color: var(--text-muted);">${h.desc}</span>
    </div>
  `).join('');
}
