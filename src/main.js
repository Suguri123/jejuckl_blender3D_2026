import { createIcons, icons } from 'lucide';
import { coursesData, printingChecklistData, installStepsData } from './curriculumData.js';
import { ThreeViewer } from './threeViewer.js';

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
  renderInstallGuide();
  renderChecklist();

  // 4. Setup Event Listeners & Router
  setupSidebarToggle();
  setupEventListeners();

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
          const cleanTitle = lesson.title.replace(/^[0-9]+차시:\s*/, '');
          const isUnderConstruction = false;
          return `
            <a href="${isUnderConstruction ? 'javascript:void(0)' : `#course-${course.id}-lesson-${lesson.id}`}" 
               class="nav-item ${isUnderConstruction ? 'disabled' : ''}" 
               data-target="${isUnderConstruction ? '' : `course-${course.id}-lesson-${lesson.id}`}"
               data-course="${course.id}"
               data-lesson="${lesson.id}"
               ${isUnderConstruction ? 'onclick="alert(\'준비 중인 차시입니다.\'); return false;"' : ''}>
              <div class="nav-badge">${lesson.id}차시</div>
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
          const isUnderConstruction = false;
          return `
            <a href="${isUnderConstruction ? 'javascript:void(0)' : `#course-${course.id}-lesson-${lesson.id}`}" 
               class="quick-card ${isUnderConstruction ? 'disabled' : ''}"
               ${isUnderConstruction ? 'onclick="alert(\'준비 중인 차시입니다.\'); return false;"' : ''}>
              <div class="quick-num">${lesson.id}차시 실습 ${isUnderConstruction ? '(준비중)' : ''}</div>
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
  document.getElementById('current-lesson-name').innerText = `${lesson.id}차시: ${lesson.subtitle}`;

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
              <h5 style="font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-bottom: 0.3rem;">${sub.subTitle}</h5>
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
  const tipsEl = document.getElementById('current-print-tips');
  tipsEl.innerHTML = lesson.printTips.map(t => `<li>${t}</li>`).join('');

  // Quick Hotkeys
  const hotkeysEl = document.getElementById('quick-hotkeys');
  hotkeysEl.innerHTML = lesson.hotkeys.map(h => `
    <div class="key-pill">
      <span class="key-badge">${h.key}</span>
      <span>${h.desc}</span>
    </div>
  `).join('');

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
