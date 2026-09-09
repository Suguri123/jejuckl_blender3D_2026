export const installStepsData = [
  {
    step: 1,
    title: "1. 공식 홈페이지 접속 및 설치 파일 다운로드",
    desc: "블렌더 공식 웹사이트(<a href='https://www.blender.org/download/' target='_blank' rel='noopener noreferrer' class='external-link'>blender.org/download ↗</a>)에 접속하여 'Download Blender' (Windows Installer LTS 최신 버전) 버튼을 클릭하여 설치 프로그램(.msi)을 다운로드합니다.",
    img: "./images/install/01.png"
  },
  {
    step: 2,
    title: "2. 설치 마법사(Setup Wizard) 시작",
    desc: "다운로드한 설치 파일을 실행하면 Blender 마법사 안내 창이 나타납니다. 'Next' 버튼을 클릭합니다.",
    img: "./images/install/02.png"
  },
  {
    step: 3,
    title: "3. 설치 폴더 경로 확인 및 지정",
    desc: "블렌더가 설치될 컴퓨터 경로(기본: C:\\Program Files\\Blender Foundation\\Blender\\)를 확인하고 'Next'를 누릅니다.",
    img: "./images/install/03.png"
  },
  {
    step: 4,
    title: "4. 설치 실행 준비 완료",
    desc: "'Ready to install Blender' 화면에서 'Install' 버튼을 눌러 실제 파일 설치를 시작합니다.",
    img: "./images/install/04.png"
  },
  {
    step: 5,
    title: "5. 시스템 구성 요소 등록 진행",
    desc: "3D 그래픽 엔진 및 관련 라이브러리 구성 요소가 등록되는 동안 잠시 기다립니다.",
    img: "./images/install/05.png"
  },
  {
    step: 6,
    title: "6. 파일 복사 및 설치 마무리",
    desc: "새로운 3D 렌더링 엔진 파일들이 지정된 디렉터리로 복사되며 인스톨이 완료됩니다.",
    img: "./images/install/06.png"
  },
  {
    step: 7,
    title: "7. 블렌더 설치 완료 확인",
    desc: "'Completed the Blender Setup Wizard' 문구가 뜨면 'Finish' 버튼을 눌러 마법사를 종료합니다.",
    img: "./images/install/07.png"
  },
  {
    step: 8,
    title: "8. 후원재단 안내 페이지 (선택)",
    desc: "오픈소스 블렌더 재단 안내 웹페이지가 열립니다. 확인 후 창을 닫거나 블렌더를 실행합니다.",
    img: "./images/install/08.png"
  },
  {
    step: 9,
    title: "9. 블렌더 첫 실행 및 기본 영문 설정 화면",
    desc: "설치된 블렌더를 처음 실행하면 영문 웰컴 스플래시(Splash Screen) 상자가 나타납니다.",
    img: "./images/install/09.png"
  },
  {
    step: 10,
    title: "10. 언어(Language) 드롭다운에서 한국어 선택",
    desc: "'Language' 드롭다운 메뉴를 클릭하고 목록에서 'Korean - 한국어'를 찾아서 선택합니다.",
    img: "./images/install/10.png"
  },
  {
    step: 11,
    title: "11. 한글 언어 설정 환경 저장",
    desc: "화면 UI 텍스트가 한국어로 변경된 것을 확인하고 하단의 파란색 '새로운 환경설정 저장' 버튼을 누릅니다.",
    img: "./images/install/11.png"
  },
  {
    step: 12,
    title: "12. 한국어 지원 스플래시 확인",
    desc: "'새로운 파일 (일반, 2D 애니메이션, 조각 등)' 메뉴가 한글로 표시되는지 검수합니다.",
    img: "./images/install/12.png"
  },
  {
    step: 13,
    title: "13. 3D 뷰포트 작업 공간 한글화 완료",
    desc: "상단 메뉴(파일, 편집, 렌더, 창, 도움말) 및 우측 아웃라이너 탭이 한국어로 변경되어 준비가 완료되었습니다!",
    img: "./images/install/13.png"
  }
];

export const coursesData = [
  {
    id: "jejuckl_blender3d_2026",
    title: "AI와 블렌더를 활용한 3D 캐릭터 굿즈 모델링 & 시제품 제작",
    icon: "box",
    badge: "캐릭터 굿즈 / 시제품 제작",
    lessons: [
      {
        id: 1,
        title: "1회차: 블렌더 기초 3D 모델링",
        subtitle: "3D 열쇠고리 제작 (화면 구성 & 기초 모델링·모디파이어)",
        badge: "1회차 / 기초 3D 모델링",
        objectType: "nametag",
        outcomes: [
          "블렌더 기본 화면 구성(Header, Viewport, Outliner, Properties) 및 3D 작업공간 이해",
          "오브젝트 기본 조작(G, R, S)과 점·선·면(1, 2, 3) 에디트 모드 핵심 편집 기법 습득",
          "오브젝트 복제(Shift+D/Alt+D), 정렬, 결합(Ctrl+J) 및 주요 모디파이어(Boolean, Bevel) 활용",
          "실습예제 : 나만의 이니셜과 형태가 들어간 3D 열쇠고리(키링/네임택) 모델링 완성"
        ],
        steps: [
          {
            step: 1,
            title: "1. 블렌더 주요 인터페이스 구성 요소",
            desc: "블렌더 3D 작업을 위한 화면 영역별 핵심 인터페이스 메뉴와 주요 기능들의 위치를 파악합니다.",
            subItems: [
              {
                subTitle: "1) Header (헤더 / 상단 메뉴바)",
                subDesc: "상단 메인 메뉴(파일, 편집, 렌더, 창, 도움말), 워크스페이스 탭(Layout, Modeling, Sculpting, Shading 등) 및 뷰포트 헤더 옵션(Object Mode/Edit Mode 전환, 트랜스폼 좌표계 등)의 기본 구성과 기능을 이해합니다.",
                img: "./images/header.png"
              },
              {
                subTitle: "2) 3D Viewport (3D 뷰포트)",
                subDesc: "3D 모델을 실제로 보고, 만들고, 배치하는 메인 작업 공간입니다.",
                details: [
                  "Toolbar (툴바 - 왼쪽): 이동, 회전, 스케일, 드로잉 등 자주 쓰는 도구가 모여 있습니다. (단축키: T 키로 숨기기/열기)",
                  "Sidebar (사이드바 - 오른쪽): 선택한 오브젝트의 정확한 위치(Location), 회전(Rotation), 크기(Scale) 수치 및 플러그인 메뉴가 위치합니다. (단축키: N 키로 숨기기/열기)",
                  "Navigation Gizmo (기즈모 - 우상단): 축 아이콘(X, Y, Z)을 클릭/드래그하여 정면, 측면, 탑뷰 등으로 시점을 전환합니다."
                ],
                img: "./images/viewport.png"
              },
              {
                subTitle: "3) Outliner (아웃라이너 / 우측 상단)",
                subDesc: "씬(Scene) 안에 있는 모든 요소(메시, 카메라, 조명, 컬렉션 등)를 트리 구조 목록으로 보여주는 파일 탐색기 역할을 합니다.",
                details: [
                  "Collection (컬렉션): 폴더처럼 오브젝트들을 그룹화하여 관리합니다.",
                  "표시/비활성화 (눈/모니터 아이콘): 특정 오브젝트를 뷰포트에서 숨기거나 렌더링 대상에서 제외할 수 있습니다."
                ],
                img: "./images/outliner.png",
                imgWidth: "50%"
              },
              {
                subTitle: "4) Properties (속성 창 / 우측 하단)",
                subDesc: "블렌더의 가장 중요한 세부 설정 공간입니다. 탭 아이콘을 클릭하여 영역별 수치를 조절합니다.",
                table: {
                  headers: ["아이콘 탭", "주요 기능", "설명"],
                  rows: [
                    ["Render (렌더)", "렌더 세팅", "Eevee / Cycles 엔진 선택, 화질 및 샘플링 설정"],
                    ["Output (출력)", "출력 세팅", "이미지/영상 해상도, 프레임 레이트, 저장 경로 지정"],
                    ["World (월드)", "배경 환경", "전체 씬의 배경색, HDRI 환경광 및 조명 세팅"],
                    ["Modifier (모디파이어)", "수정자 세팅", "미러(대칭), 불리언(결합·타공), 베벨(모따기) 등 비파괴 편집 도구 추가"],
                    ["Material (매터리얼)", "재질 세팅", "색상, 광택(Roughness), 금속성(Metallic) 등 질감 부여"]
                  ]
                },
                img: "./images/properties.png",
                imgWidth: "40%"
              },
              {
                subTitle: "5) Timeline (타임라인 / 하단)",
                subDesc: "애니메이션 프레임을 확인하고 키프레임을 제어하는 재생바입니다.",
                details: [
                  "재생/정지 버튼과 프레임 이동, 애니메이션 길이 설정이 가능합니다."
                ],
                img: "./images/timeline.png"
              },
              {
                subTitle: "6) Area Edge Options (패널 영역 분할 & 합치기)",
                subDesc: "패널과 패널 사이 경계선(Edge) 또는 헤더에서 마우스 우클릭 시 Area Edge Options 메뉴가 나타나 작업 공간을 자유롭게 분할, 합치기, 닫기 할 수 있습니다.",
                details: [
                  "수직 / 수평 분할 (Vertical / Horizontal Split): 메인 화면을 가로 또는 세로로 나누어 여러 뷰포트나 셰이더 편집 창을 동시 배치할 수 있습니다.",
                  "조인 (Join Areas): 분할된 인접 영역을 하나로 합쳐 작업 화면을 통합합니다.",
                  "영역 닫기 (Close Area): 필요하지 않은 창(예: 3D프린팅 모델링 중 불필요한 타임라인)을 닫아 뷰포트 작업 공간을 넓힙니다.",
                  "영역 교환 (Swap Areas): 서로 인접한 두 영역의 화면 위치를 맞바꿉니다.",
                  "💡 <b>레이아웃 초기화</b>: 화면이 꼬였을 땐 상단 탭 우측 <b>'+' (Add Workspace) ➔ General ➔ Layout</b> 추가 후, 기존 꼬인 Layout 탭을 우클릭하여 Delete로 삭제합니다."
                ],
                img: "./images/area_edge_options.png",
                imgWidth: "50%",
                img2: "./images/timeline_close.png",
                img2Width: "40%",
                img2Title: "타임라인 헤더/경계선 마우스 좌클릭 > '영역 닫기' (실전 응용)"
              }
            ]
          },
          {
            step: 2,
            title: "2. 3D 공간 기본 개념 및 화면 탐색",
            desc: "평면 모니터 안에서 3차원 공간을 자유롭게 다루기 위해 3가지 기본 작동 방식(시점, 변형, 좌표축)을 마스터합니다.",
            subItems: [
              {
                subTitle: "① 공간을 바라보는 시점 조작 (Navigation)",
                subDesc: "깊이(Z축)가 존재하는 3D 공간에서 마우스 조작을 통해 사물의 입체감을 파악합니다.",
                details: [
                  "화면 회전 (Orbit): 마우스 휠 클릭 + 드래그 (MMB Drag)",
                  "화면 평행 이동 (Pan): Shift + 마우스 휠 클릭 + 드래그 (Shift + MMB Drag)",
                  "화면 확대/축소 (Zoom): 마우스 휠 스크롤 (Wheel Scroll)",
                  "<div style='font-weight: 700; color: #1e3a8a; margin-top: 0.6rem; margin-bottom: 0.2rem;'>📌 뷰포트 컨트롤 아이콘 (내비게이션 아이콘 영역)</div>",
                  "<div style='display: flex; align-items: center; gap: 1.2rem; margin: 0.4rem 0; padding: 0.6rem 0.8rem; background: #f8fafc; border-radius: 8px;'><div style='flex-shrink: 0; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.3rem; display: flex; align-items: center; justify-content: center;'><img src='./images/nav_controls.png' alt='내비게이션 아이콘 영역' style='max-width: 45px; width: 100%; display: block; height: auto;' /></div><div style='font-size: 0.82rem; color: #334155; line-height: 1.6;'><p style='margin-bottom: 0.3rem;'><b>Zoom In/Out (돋보기)</b>: 클릭 후 위아래로 드래그하여 뷰를 확대/축소합니다.</p><p style='margin-bottom: 0.3rem;'><b>Move the View (손)</b>: 클릭 후 드래그하여 뷰를 평행 이동(Panning)합니다.</p><p style='margin-bottom: 0.3rem;'><b>Switch the Camera View (카메라)</b>: 클릭하여 활성화된 카메라 뷰로 전환하거나 빠져나옵니다 (Numpad 0 기능).</p><p style='margin-bottom: 0;'><b>Switch the Current Perspective (그리드)</b>: 클릭하여 원근감 뷰(Perspective)와 정사영 뷰(Orthographic) 사이를 전환합니다 (Numpad 5 기능).</p></div></div>"
                ]
              },
              {
                subTitle: "② 3차원 공간에서의 3대 기본 변형 (Transform)",
                subDesc: "3D 공간 안의 모든 물체는 위치, 방향, 크기라는 3가지 기본 요소로 조작됩니다.",
                details: [
                  "이동 (Position / Move): G (Grab)",
                  "회전 (Rotation): R (Rotate)",
                  "크기 조절 (Scale): S (Scale)"
                ]
              },
              {
                subTitle: "③ 3축 공간 좌표계 고정 (Transform Axis)",
                subDesc: "X(가로/빨강), Y(세로/초록), Z(높이/파랑) 3개 축 중 원하는 방향으로만 정확히 움직이려면 변형 키 입력 후 축 기호를 누릅니다.",
                details: [
                  "X축 고정: 변형 단축키(G/R/S) 누른 후 X",
                  "Y축 고정: 변형 단축키(G/R/S) 누른 후 Y",
                  "Z축 고정: 변형 단축키(G/R/S) 누른 후 Z (예: G ➔ Z 입력 시 위/아래 수직 방향으로만 이동)",
                  "<div style='display: flex; align-items: center; gap: 1rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 60%; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/transform_3d.png' alt='이동 예시' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>이동 예시</div></div>",
                  "<div style='display: flex; align-items: center; gap: 1rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 60%; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/transform_rotate.png' alt='회전 예시' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>회전 예시</div></div>",
                  "<div style='display: flex; align-items: center; gap: 1rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 60%; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/transform_scale.png' alt='크기 조절 예시' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>크기 조절 예시</div></div>"
                ]
              },
              {
                subTitle: "④ 공간 탐색 및 오브젝트 하부 구조",
                subDesc: "가상 공간에 오브젝트를 생성하고 조작 모드를 전환합니다.",
                details: [
                  "오브젝트 추가 (Create): Shift + A (Add) — 가상 공간에 새로운 3D 도형 생성",
                  "작업 모드 전환 (Mode): Tab — 전체 형태 조작(Object Mode) ↔ 세부 점·선·면 편집(Edit Mode)",
                  "<div style='display: flex; gap: 1.5rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 48%;'><div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; margin-bottom: 0.4rem;'><img src='./images/object_mode_setup.png' alt='오브젝트 모드 설정' style='width: 100%; height: 180px; display: block; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>오브젝트 모드 설정</div></div><div style='flex: 1; max-width: 48%;'><div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; margin-bottom: 0.4rem;'><img src='./images/edit_mode_setup.png' alt='에디트 모드 설정' style='width: 100%; height: 180px; display: block; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>에디트 모드 설정</div></div></div>"
                ]
              }
            ]
          },
          {
            step: 3,
            title: "3. 3D 커서(3D Cursor) 개념 및 위치 지정",
            desc: "3D 커서는 새로운 오브젝트(Shift + A)가 생성되는 기준점이자 회전/변형의 중심축 역할을 하는 포인터입니다.",
            subItems: [
              {
                subTitle: "1) 3D 커서 위치 이동 및 리셋 방법",
                subDesc: "원하는 지점에 정확하게 오브젝트를 배치하거나 중심점을 변경할 때 3D 커서를 사용합니다.",
                details: [
                  "마우스 자유 이동: Shift + Right Click (Shift + 우클릭)으로 클릭한 3차원 지점에 3D 커서를 즉시 배치합니다.",
                  "커서 스냅 파이 메뉴 (Shift + S): 파이 메뉴를 호출하여 다양한 기준점으로 3D 커서 및 선택 항목을 스냅 이동시킵니다.",
                  "<div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; max-width: 534px; margin: 0.5rem 0;'><img src='./images/cursor_pie_menu.png' alt='Shift + S 커서 스냅 파이 메뉴' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div>",
                  "<div style='background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 0.9rem; margin: 0.5rem 0; font-size: 0.82rem; color: #1e3a8a; line-height: 1.6; display: inline-block; width: fit-content; max-width: 100%;'><p style='margin-bottom: 0.3rem;'><b>Cursor to Selected</b>: 현재 선택한 오브젝트(또는 점/선/면)의 정중앙으로 커서 이동</p><p style='margin-bottom: 0.3rem;'><b>Cursor to World Origin</b>: 3D 공간의 절대 원점(0, 0, 0)으로 커서 이동</p><p style='margin-bottom: 0;'><b>Cursor to Active</b>: 마지막으로 선택한(활성화된) 요소 위치로 이동</p></div>",
                  "수치(좌표)를 직접 입력해서 이동: 정확한 X, Y, Z 좌표에 커서를 배치해야 할 때 사용합니다.",
                  "<div style='margin-left: 0.5rem; margin-top: 0.2rem; color: #475569; font-size: 0.81rem;'>(N 키를 누르고 ➔ 오른쪽 사이드바(Sidebar) ➔ View 탭 ➔ 3D Cursor 항목에서 Location X, Y, Z 수치 직접 입력)</div>",
                  "<div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; max-width: 210px; margin: 0.5rem 0 0.5rem 0.5rem;'><img src='./images/cursor_location_sidebar.png' alt='사이드바 View 탭 3D 커서 수치 입력' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div>",
                  "원점 리셋 & 뷰 정렬 (Shift + C): 3D 커서를 좌표계 원점(0, 0, 0)으로 복구하고 전체 오브젝트가 보이도록 화면을 정렬합니다."
                ]
              }
            ]
          },
          {
            step: 4,
            title: "4. 오브젝트 복제, 결합 및 정렬 (Duplicate & Join & Align)",
            desc: "오브젝트를 독립적 또는 연동하여 복제하고, 정밀하게 정렬 및 단일화하는 필수 조작 기법을 익힙니다.",
            subItems: [
              {
                subTitle: "1. 오브젝트 복제하기 (Duplicate)",
                subDesc: "작업 효율을 높여주는 두 가지 핵심 복제 방법(독립 복제 vs 링크 복제)을 비교합니다.",
                details: [
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>① 기본 복제하기: Shift + D</div>",
                  "가장 일반적으로 쓰이는 <b>완전 독립형 복제</b>입니다. 복제본과 원본이 완전히 별개의 데이터로 분리됩니다.",
                  "<b>축 고정 팁</b>: Shift + D를 누른 후 바로 X, Y, Z 키를 누르면 해당 축으로만 직선 이동하여 깔끔하게 정렬할 수 있습니다.",
                  "<div style='margin-top: 1.2rem; font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>② 링크 복제하기: Alt + D</div>",
                  "원본의 형태(Mesh Data)를 공유하는 <b>\"분신\" 복제</b>입니다. 원본이나 복제본 한쪽을 에디트 모드에서 수정하면 모두 함께 변형됩니다."
                ],
                img: "./images/duplicate_compare.png",
                imgWidth: "70%"
              },
              {
                subTitle: "2. 오브젝트 결합하기: Ctrl + J (Join)",
                subDesc: "독립된 여러 오브젝트를 하나의 단일 오브젝트로 통합합니다.",
                details: [
                  "<b>방법</b>: 합치고 싶은 개체들을 Shift를 누른 채 여러 개 선택 후, 마지막 기준 개체가 활성화된 상태에서 Ctrl + J를 누릅니다."
                ]
              },
              {
                subTitle: "3. 오브젝트 정렬 및 스냅 (Align & Snap)",
                subDesc: "두 개체를 정확한 위치와 각도로 맞추는 정렬 기법입니다.",
                details: [
                  "<b>Align Objects</b>: Object > Transform > Align Objects 메뉴에서 X/Y/Z 축 기준 정렬",
                  "<b>스냅 기능 (Shift + Tab)</b>: 이동 중 다른 개체의 Vertex(점), Edge(선), Face(면)에 자석처럼 밀착 결합"
                ],
                img: "./images/align_objects_panel.png",
                imgWidth: "50%"
              }
            ]
          },
          {
            step: 5,
            title: "5. 에디트 모드 핵심 편집 (점·선·면, Extrude, Inset, Bevel)",
            desc: "Tab 키로 에디트 모드에 진입하여 점(1), 선(2), 면(3)을 선택하고 입체감을 부여하는 기초 모델링 도구를 실습합니다.",
            subItems: [
              {
                subTitle: "1. 모드 전환 및 점·선·면 선택 (숫자키 1, 2, 3)",
                subDesc: "1(점: Vertex), 2(선: Edge), 3(면: Face)으로 선택 단위를 전환합니다.",
                img: "./images/edit_mode_switch.png",
                imgPos: "top",
                details: [
                  "<b>A</b>: 전체 선택 / <b>Alt + A</b>: 전체 선택 해제",
                  "<b>Alt + 좌클릭</b>: 연속된 선/면 루프(Loop) 한 번에 선택",
                  "<b>투시 모드 (Alt + Z)</b>: 오브젝트 반대편 뒤에 가려진 점·선·면까지 투과 선택"
                ]
              },
              {
                subTitle: "2. 돌출 (Extrude: E) 및 면 삽입 (Inset: I)",
                subDesc: "면을 뽑아내어 입체화하거나 안쪽으로 테두리 면을 생성합니다.",
                details: [
                  "<b>돌출 (E)</b>: 선택한 면을 지정 방향으로 밀고 당겨 3차원 두께를 만듭니다.",
                  "<b>인셋 (I)</b>: 선택한 면 테두리를 따라 안쪽으로 축소된 평면을 생성합니다.",
                  "<b>조합 팁</b>: I 키로 안쪽 면을 만든 후 E 키로 밀어 넣으면 오목한 홈이나 액자 형태가 완성됩니다."
                ],
                img: "./images/inset_faces.png",
                imgWidth: "60%"
              },
              {
                subTitle: "3. 모서리 둥글리기: 베벨 (Bevel: Ctrl + B)",
                subDesc: "3D 프린팅 시 날카로운 모서리를 부드럽게 깎아내어 출력 품질과 손에 닿는 촉감을 향상시킵니다.",
                details: [
                  "<b>단축키</b>: 모서리 선(Edge) 선택 후 <b>Ctrl + B</b> 누르고 마우스 드래그 (마우스 휠을 굴려 분할 세그먼트 수 증가)"
                ]
              }
            ]
          },
          {
            step: 6,
            title: "6. 실습예제 : 3D 열쇠고리(키링/네임택) 제작 & Boolean 모디파이어",
            desc: "배운 기능들을 종합하여 플레이트를 만들고, Boolean 모디파이어로 고리 구멍을 뚫은 뒤 입체 텍스트를 배치하여 출력 가능한 실물 열쇠고리를 완성합니다.",
            subItems: [
              {
                subTitle: "① 베이스 플레이트 제작 & 베벨",
                subDesc: "Shift + A ➔ Mesh ➔ Cube를 추가하고 S키로 [X: 70mm, Y: 28mm, Z: 3mm] 크기의 기본 바디를 만듭니다.",
                details: [
                  "외곽 모서리를 선택하고 Ctrl + B로 부드러운 라운드 베벨을 적용합니다."
                ]
              },
              {
                subTitle: "② Boolean 모디파이어로 열쇠고리 구멍 뚫기",
                subDesc: "Shift + A ➔ Cylinder를 추가하여 열쇠고리가 들어갈 위치에 배치한 뒤, 베이스 플레이트에 Boolean Modifier(차집합: Difference)를 적용하여 관통 홀을 뚫어줍니다.",
                details: [
                  "<b>방법</b>: 플레이트 선택 ➔ Modifier Properties ➔ Add Modifier ➔ Boolean (Difference 선택, Target: Cylinder)",
                  "<b>단축키 팁 (Bool Tool)</b>: 실린더 선택 ➔ 플레이트 선택 ➔ Ctrl + Shift + Numpad - (Difference 타공 즉시 적용)"
                ]
              },
              {
                subTitle: "③ 텍스트 추가 및 3D 솔리드화 (Extrude)",
                subDesc: "Shift + A ➔ Text로 원하는 이니셜이나 문구를 입력하고, Font 속성에서 Extrude(0.8~1.2mm)를 주어 양각 입체 글자를 완성합니다.",
                details: [
                  "<div style='margin-top: 10px; max-width: 560px;'><iframe width='100%' height='315' src='https://www.youtube.com/embed/BOjRwSiwtfc' title='열쇠고리/네임택 제작 가이드' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen style='border-radius: 8px;'></iframe><p style='font-size: 0.95rem; font-weight: 600; color: #334155; margin-top: 8px; text-align: center;'>3D 열쇠고리 제작 영상 가이드</p></div>"
                ]
              }
            ]
          }
        ],
        hotkeys: [
          { key: "MMB Drag", desc: "3D 화면 회전 (Orbit)" },
          { key: "Shift + MMB", desc: "3D 화면 평행 이동 (Pan)" },
          { key: "G / R / S", desc: "이동(Grab) / 회전(Rotate) / 크기(Scale)" },
          { key: "Tab", desc: "Object Mode ↔ Edit Mode 전환" },
          { key: "Shift + A", desc: "새로운 오브젝트 추가 메뉴" },
          { key: "Ctrl + B", desc: "모서리 베벨(Bevel) 깎기" },
          { key: "1 / 2 / 3", desc: "Edit Mode 점/선/면 선택 모드 변경" },
          { key: "E / I", desc: "돌출(Extrude) / 면 안쪽 삽입(Inset)" },
          { key: "Shift + D / Alt + D", desc: "독립 복제 / 링크 복제" },
          { key: "Ctrl + J", desc: "선택한 여러 개체 단일 오브젝트로 결합" },
          { key: "Numpad 1 / 3 / 7 / 0", desc: "정면 / 측면 / 상면 / 카메라 뷰 전환" },
          { key: "T / N", desc: "툴바(T) / 사이드바(N) 패널 켜기·끄기" },
          { key: "Shift + S", desc: "3D 커서 및 스냅 파이 메뉴" },
          { key: "Alt + Z", desc: "반대편 투과 선택 (X-Ray 모드)" }
        ],
        printTips: [
          "열쇠고리 체인용 구멍 내경은 연결 링의 두께를 고려하여 노즐 오차 감안 최소 지름 3mm 이상 확보해야 안전합니다.",
          "텍스트 양각 높이는 베이스 표면 기준 1.0mm ~ 1.4mm 돌출시켰을 때 FDM 3D프린터 출력 시 가장 또렷하게 표현됩니다.",
          "바닥면 안착을 위해 베이스 플레이트의 첫 번째 레이어는 평평하게 유지하세요."
        ]
      },
      {
        id: 2,
        title: "2회차: AI 기반 3D 캐릭터 모델링",
        subtitle: "3D 캐릭터 조명 제작 (생성형 AI 3D & 스컬프팅)",
        badge: "2회차 / AI 캐릭터 & 조명",
        objectType: "mini_character",
        outcomes: [
          "생성형 AI(Text-to-3D, Image-to-3D)를 활용한 3D 캐릭터 초안 메쉬 생성 프로세스 이해",
          "블렌더 3D Print Toolbox를 활용한 Non-Manifold 에러 검출 및 출력 최적화 수리",
          "Bool Tool 애드온 활성화 및 불리언(Union/Difference) 연산을 활용한 메쉬 결합",
          "Sculpt Mode의 핵심 7대 브러시 조형과 Voxel Remesh로 유기적인 이목구비·디테일 보정",
          "실습예제 : 내부 중공(Hollow) 및 LED 조명 모듈 결합 홀을 갖춘 3D 캐릭터 조명(무드등) 모델링"
        ],
        steps: [
          {
            step: 1,
            title: "1. 생성형 AI를 활용한 3D 캐릭터 모델 생성",
            desc: "아이디어 스케치나 프롬프트 텍스트 한 줄로 생성형 AI 엔진을 통해 초기 3D 캐릭터 메쉬(OBJ/GLB/STL)를 생성하고 다운로드합니다.",
            subItems: [
              {
                subTitle: "① 주요 3D 생성 AI 서비스 플랫폼 비교 및 활용",
                subDesc: "목적에 맞는 생성형 AI 도구를 선택하여 캐릭터 굿즈 프로토타입을 신속하게 도출합니다.",
                details: [
                  "<b>Meshy AI (<a href='https://www.meshy.ai' target='_blank' rel='noopener noreferrer' style='color:#2563eb; font-weight:600;'>meshy.ai ↗</a>)</b>: 텍스트 또는 2D 캐릭터 일러스트를 입력하여 고품질 텍스처와 함께 3D 메쉬를 생성합니다. 대화형 AI 에이전트(Agent) 기능을 지원하여 자연어 프롬프트로 형태 수정, 파츠 편집, 리텍스처링 등을 대화하듯 제어할 수 있습니다.",
                  "<b>Tripo3D (<a href='https://www.tripo3d.ai' target='_blank' rel='noopener noreferrer' style='color:#2563eb; font-weight:600;'>tripo3d.ai ↗</a>)</b>: 몇 초 만에 빠른 속도로 3D 메쉬 초안을 뽑아내어 아이디어 브레인스토밍에 최적화되어 있습니다.",
                  "<b>Hi3D AI (<a href='https://hi3d.ai' target='_blank' rel='noopener noreferrer' style='color:#2563eb; font-weight:600;'>hi3d.ai ↗</a>)</b>: 다양한 스타일의 3D 조형물 및 에셋 생성 지원",
                  "<div style='margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;'><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;'><div style='background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>Meshy AI</div><img src='./images/ai_platform_meshy.png' alt='Meshy AI 작업화면' style='width: 100%; height: auto; border-radius: 4px; display: block; object-fit: cover;' /></div><div style='background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>Tripo3D</div><img src='./images/ai_platform_tripo.png' alt='Tripo3D 작업화면' style='width: 100%; height: auto; border-radius: 4px; display: block; object-fit: cover;' /></div><div style='background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>Hi3D AI</div><img src='./images/ai_platform_hi3d.png' alt='Hi3D AI 작업화면' style='width: 100%; height: auto; border-radius: 4px; display: block; object-fit: cover;' /></div></div></div>"
                ]
              }
            ]
          },
          {
            step: 2,
            title: "2. 블렌더 임포트 및 메시 에러 검사·수리 (3D Print Toolbox)",
            desc: "AI가 생성한 3D 메쉬는 구멍(Non-Manifold), 꼬인 면, 뒤집힌 노멀이 많아 그대로 출력하면 실패합니다. 블렌더 내장 3D Print Toolbox로 정밀 검수하고 수리합니다.",
            subItems: [
              {
                subTitle: "① 3D Print Toolbox 애드온 활성화",
                subDesc: "Edit ➔ Preferences ➔ Add-ons ➔ '3D Print' 검색 후 'Mesh: 3D Print Toolbox' 체크박스를 켭니다.",
                details: [
                  "3D 뷰포트에서 단축키 <b>N</b> 키를 눌러 우측 사이드바의 <b>3D Print</b> 탭을 엽니다.",
                  "<div style='margin-top: 10px; display: flex; gap: 12px; flex-wrap: wrap; max-width: 480px;'><div style='flex: 1; min-width: 170px; max-width: 220px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>3D Print 패널 (Check All)</div><img src='./images/3d_print_toolbox_panel.png' alt='3D Print 패널' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div><div style='flex: 1; min-width: 170px; max-width: 220px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>검사 결과 및 Clean Up</div><img src='./images/3d_print_toolbox_result.png' alt='3D Print 검사 결과' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div></div>"
                ]
              },
              {
                subTitle: "② Check All 및 치명적 에러 자동 감지",
                subDesc: "오브젝트 선택 후 <b>Check All</b> 버튼을 클릭하여 슬라이싱 불량 원인을 진단합니다.",
                details: [
                  "<b>Non-Manifold Edge</b>: 메쉬가 닫혀있지 않아 내부가 빈 구멍",
                  "<b>Bad Contiguous Edges</b>: 인접한 면들의 앞뒤 법선(Normal) 방향이 꼬여있는 상태",
                  "<b>Intersect Face</b>: 내부에서 면끼리 간섭되어 겹쳐진 불필요한 면"
                ]
              },
              {
                subTitle: "③ 원클릭 자동 수리 & 수동 메시 복구",
                subDesc: "Clean Up의 <b>Make Manifold</b>를 실행하고, Edit Mode에서 중복 점 합치기(M > By Distance) 및 전체 법선 외부 정렬(Shift + N)을 실행합니다."
              }
            ]
          },
          {
            step: 3,
            title: "3. Bool Tool 애드온 설치 및 활용",
            desc: "블렌더 기본 내장 애드온인 Bool Tool을 활성화하여 복잡한 불리언(Boolean) 연산을 단축키와 전용 메뉴로 손쉽게 수행할 수 있도록 설정합니다.",
            subItems: [
              {
                subTitle: "① Bool Tool 애드온 활성화",
                subDesc: "Edit(편집) ➔ Preferences(환경 설정) ➔ Add-ons(애드온)에서 'Bool Tool'을 검색하고 체크박스를 활성화합니다.",
                img: "./images/bool_tool_setting.png",
                imgWidth: "75%",
                details: [
                  "상단 메뉴 <b>Edit ➔ Preferences</b>를 실행합니다.",
                  "좌측 목록에서 <b>애드온(Add-ons)</b> 탭을 클릭한 뒤 검색창에 <b>Bool</b>을 입력합니다.",
                  "검색 결과로 나타나는 <b>Bool Tool</b> 체크박스를 활성화(체크)합니다."
                ]
              },
              {
                subTitle: "② Bool Tool 패널 메뉴 확인 (N 사이드바)",
                subDesc: "3D 뷰포트에서 단축키 N을 눌러 우측 사이드바의 Edit(편집) 탭을 열면 나타나는 Bool Tool(불리언) 메뉴를 확인합니다.",
                img: "./images/bool_tool_menu.png",
                imgWidth: "75%",
                details: [
                  "<b>Auto Boolean</b>: 모디파이어를 거치지 않고 즉시 메쉬를 병합/차집합하여 단일 메쉬로 만듭니다.",
                  "<b>Brush Boolean</b>: 비파괴 방식으로 모디파이어를 생성하여 이후에도 형태나 위치를 수정할 수 있습니다.",
                  "<b>주요 연산 기능</b>: Union(합집합 - 여러 파츠를 단일 덩어리로 결합), Difference(차집합 - 타공 및 구멍 뚫기), Intersect(교집합), Slice(분할)"
                ]
              },
              {
                subTitle: "③ 불리언 핵심 단축키 및 3D 출력 최적화 팁",
                subDesc: "오브젝트들을 선택한 후 단축키를 이용해 빠르고 정확하게 메쉬 결합 및 타공 작업을 진행합니다.",
                details: [
                  "<b>Auto Boolean 핵심 단축키</b> (Numpad 키패드 사용):",
                  "• <b>Union (합집합)</b>: 메쉬 다중 선택 ➔ <b>Ctrl + Shift + Numpad +</b> (내부 간섭면 없이 단일 메쉬로 완벽 병합)",
                  "• <b>Difference (차집합)</b>: 타공 도구 선택 ➔ 대상 오브젝트 Shift 선택 ➔ <b>Ctrl + Shift + Numpad -</b> (깔끔한 구멍 가공)",
                  "<b>3D 프린팅 최적화 팁</b>: 여러 파츠(머리, 몸통, 악세서리 등)가 겹쳐진 모델은 슬라이서에서 내부 결함이 발생할 수 있으므로, Auto Boolean Union으로 병합하면 겹치는 내부 면(Intersect Face)이 완벽하게 정리되어 에러 없는 매니폴드 모델이 완성됩니다."
                ]
              }
            ]
          },
          {
            step: 4,
            title: "4. 스컬프트 모드(Sculpt Mode) 브러시 활용 및 디테일 보정",
            desc: "점토를 빚듯 자유롭게 변형하는 스컬프트 모드로 전환하여 캐릭터의 이목구비, 귀, 볼륨감을 다듬고 리메시로 표면을 정돈합니다.",
            subItems: [
              {
                subTitle: "① 스컬프트 모드 7대 핵심 브러시 마스터",
                subDesc: "Draw(볼륨 추가/Ctrl 시 깎기), Clay Strips(면 구조 빌드업), Grab(전체 윤곽 당기기), Snake Hook(귀/팔 길게 뽑아내기), Smooth(Shift 누른 채 표면 정돈), Crease(선명한 주름/눈매), Mask(M키 칠하기, Ctrl+I 반전, Alt+M 해제)",
                img: "./images/sculpt_brush_intro.png",
                imgWidth: "100%"
              },
              {
                subTitle: "② 리메시",
                subDesc: "면이 늘어나 깨지거나 왜곡된 메쉬를 균일한 사각형 격자로 재정렬합니다. 모디파이어를 이용하는 비파괴 방식과 스컬프트 모드 우측 상단에서 복셀 크기를 조절하여 리메시하는 방법을 다룹니다.",
                details: [
                  "<b>1) 모디파이어를 이용한 리메시 (Remesh Modifier)</b>",
                  "• <b>경로</b>: 오브젝트 선택 ➔ 우측 <b>Modifier Properties(렌치 아이콘)</b> ➔ <b>모디파이어 추가 ➔ Remesh(리메시)</b>",
                  "• <b>모드 선택</b>: 블록(Blocks), 스무스(Smooth), 샤프(Sharp), 복셀(Voxel) 등 원하는 조형 스타일에 맞게 선택합니다.",
                  "• <b>비파괴 방식</b>: 원본 메쉬를 손상시키지 않고 실시간으로 수치를 조절하며 미리볼 수 있으며, 마음에 들면 <b>Apply(적용)</b>하여 메쉬를 확정합니다.",
                  "<div style='margin-top: 10px; margin-bottom: 12px; display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;'><div style='flex: 1; min-width: 170px; max-width: 250px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>모디파이어 추가 ➔ 생성 ➔ 리메시</div><img src='./images/remesh_modifier_menu.png' alt='리메시 모디파이어 선택' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div><div style='flex: 1; min-width: 170px; max-width: 250px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>리메시 모디파이어 설정 패널</div><img src='./images/voxel_remesh_3.png' alt='리메시 모디파이어 설정' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div></div>",
                  "<b>2) 스컬프트 모드 우측 상단 복셀 크기 조절 및 리메시</b>",
                  "• <b>경로</b>: 스컬프트 모드 상단 헤더 우측의 <b>Remesh(리메시)</b> 드롭다운 메뉴를 엽니다.",
                  "• <b>복셀 크기(Voxel Size) 조절</b>: 수치를 낮출수록 더욱 촘촘하고 정밀한 고해상도 메쉬 격자가 생성됩니다. (권장: 0.015 ~ 0.02)",
                  "• <b>단축키 R</b>: 뷰포트에 십자 격자 가이드가 표시되어 마우스 드래그로 복셀 크기를 직관적으로 조절할 수 있습니다.",
                  "• <b>단축키 Ctrl + R</b>: 설정한 복셀 크기로 표면 메쉬 전체를 즉시 균일하게 재정렬(Remesh 실행)합니다.",
                  "<br><b>3D 프린팅 팁</b>: 브러시 작업으로 늘어난 면이나 미세한 구멍이 리메시를 통해 완벽한 닫힌 매니폴드(Watertight) 메쉬로 자동 수리되어 슬라이싱 에러를 방지합니다."
                ]
              }
            ]
          },
          {
            step: 5,
            title: "5. 실습예제 : 3D 캐릭터 조명(무드등) 특화 구조 가공",
            desc: "완성된 캐릭터 메쉬를 실제 빛이 투과하는 무드등으로 제작하기 위해 내부를 비우고(Hollow), 바닥에 LED 모듈 결합 홀을 뚫어줍니다.",
            subItems: [
              {
                subTitle: "① 내부 비우기 (2가지 방식)",
                subDesc: "조명 불빛이 은은하게 투과되도록 캐릭터 외벽 두께를 일정하게 유지하면서 속을 비워냅니다. 모디파이어를 이용하는 방법과 3D Print 애드온의 Hollow 기능을 이용하는 방법이 있습니다.",
                details: [
                  "<b>방법 1. Solidify 모디파이어 활용</b>: 캐릭터 선택 ➔ Modifier Properties ➔ Solidify 추가 ➔ Thickness를 1.6mm ~ 2.0mm로 지정합니다. (빛 투과와 조형 강도의 최적 밸런스)",
                  "<b>방법 2. 3D Print 애드온 Hollow 기능 활용</b>: N 사이드바 ➔ 3D Print ➔ 편집 ➔ 모델 선택 후 <b>Hollow</b> 클릭 ➔ 오프셋(Offset)을 1.0 ~ 1.5로 지정하면 내부가 정밀하게 비워집니다.",
                  "<div style='margin-top: 10px; margin-bottom: 8px; display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;'><div style='flex: 1; min-width: 160px; max-width: 230px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>3D Print ➔ 편집 ➔ Hollow 설정</div><img src='./images/hollow_setting.png' alt='Hollow 설정 창' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div><div style='flex: 1; min-width: 160px; max-width: 230px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>Hollow 적용 후 내부 비움 결과</div><img src='./images/hollow_result.png' alt='Hollow 결과 화면' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div><div style='flex: 1; min-width: 160px; max-width: 230px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>X-Ray 토글 (Alt + Z: 내부 투시)</div><img src='./images/xray_toggle.png' alt='X-Ray 토글' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div></div>"
                ]
              },
              {
                subTitle: "② 바닥면 LED 티라이트/조명 모듈 결합 홈 타공",
                subDesc: "원형 미니 LED 모듈(지름 30mm)이 들어가도록 바닥면에 실린더를 배치하고 Boolean Difference로 결합 구멍을 가공합니다.",
                details: [
                  "<div style='margin-top: 10px; margin-bottom: 8px; display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;'><div style='flex: 1; min-width: 200px; max-width: 320px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>바닥면에 실린더 배치 (결합 홈 위치 잡기)</div><img src='./images/led_cylinder_placement.png' alt='바닥면 실린더 배치' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div><div style='flex: 1; min-width: 200px; max-width: 320px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px; text-align: center;'><div style='font-size: 0.76rem; font-weight: 600; color: #334155; margin-bottom: 5px;'>Boolean Difference 적용 후 홈 타공 완료</div><img src='./images/led_boolean_difference.png' alt='Boolean Difference 결과' style='width: 100%; height: auto; border-radius: 4px; display: block;' /></div></div>"
                ]
              }
            ]
          }
        ],
        hotkeys: [
          { key: "R / Ctrl + R", desc: "복셀 크기 가이드 조절(R) / 리메시 실행(Ctrl + R)" },
          { key: "Alt + Z", desc: "X-Ray 모드 토글 (오브젝트 내부 투시 표시)" },
          { key: "G (Sculpt)", desc: "Grab 브러시 (전체 윤곽 및 형태 당기기)" },
          { key: "Shift (Hold)", desc: "작업 중 즉시 부드럽게 정돈 (Smooth)" },
          { key: "Ctrl (Hold)", desc: "브러시 볼륨 반대로 깎아내기 (Invert)" },
          { key: "F / Shift + F", desc: "브러시 반경(Radius) / 세기(Strength) 조절" },
          { key: "M", desc: "마스크(Mask) 브러시 칠하기" },
          { key: "Ctrl + I", desc: "마스크 영역 반전 (Invert Mask)" },
          { key: "Alt + M", desc: "마스크 전체 해제 (Clear Mask)" }
        ],
        printTips: []
      },
      {
        id: 3,
        title: "3회차: 3D프린터 출력 및 멀티컬러 설정",
        subtitle: "스탠딩 피규어 제작 (재질 텍스처 & AMS 멀티컬러 슬라이싱)",
        badge: "3회차 / 멀티컬러 & 피규어",
        objectType: "phone_stand",
        outcomes: [
          "블렌더 셰이딩 및 재질(Material Properties) 색상, 반사율, 이미지 텍스처 매핑 실습",
          "Texture Paint 워크스페이스에서 캐릭터 눈, 눈썹, 볼터치, 의상 디테일 페인팅",
          "스탠딩 피규어 자립을 위한 베이스 스탠드 결합 핀/홈(Pin & Hole) 공차 설계",
          "Bambu AMS(멀티컬러) 4색 필라멘트 슬롯 매핑 및 슬라이서 색칠 도구(Color Painting) 마스터",
          "실습예제 : 완성도 높은 멀티컬러 스탠딩 피규어 슬라이싱 및 출력 파일(.3mf/.gcode) 생성"
        ],
        steps: [
          {
            step: 1,
            title: "1. 3D 모델의 재질(Material) 색상 설정 및 텍스처 적용",
            desc: "블렌더의 Material 속성을 활용하여 캐릭터 부위별 고유 색상을 입히고, 이미지 텍스처를 래핑하여 질감을 표현합니다.",
            subItems: [
              {
                subTitle: "① 재질 기본 색상 및 셰이더 속성 변경",
                subDesc: "우측 Material Properties에서 New를 클릭하고 Base Color를 지정한 뒤, 뷰포트 셰이딩을 Material Preview로 전환합니다.",
                img: "./images/texture_step1.png",
                imgWidth: "60%",
                details: [
                  "<b>Roughness(거칠기)</b>: 0.4~0.6 정도로 설정하여 캐릭터 완구 특유의 매끄럽고 은은한 플라스틱 질감 연출",
                  "<b>Metallic(금속성)</b>: 캐릭터 소품(버클, 안경테 등)에 0.8~1.0을 부여하여 금속 질감 표현"
                ]
              },
              {
                subTitle: "② 외부 이미지 텍스처(Texture) 매핑",
                subDesc: "Base Color 옆의 노란색 점을 클릭 ➔ Image Texture 선택 후 준비한 캐릭터 패턴이나 그래픽 이미지를 연결합니다.",
                img: "./images/texture_result1.png",
                imgWidth: "70%"
              }
            ]
          },
          {
            step: 2,
            title: "2. 텍스처 페인팅 (Texture Paint) 세부 채색",
            desc: "상단 워크스페이스를 Texture Paint로 전환하여 3D 모델 표면에 직접 브러시로 눈, 입, 볼터치, 의상 라인을 핸드페인팅합니다.",
            subItems: [
              {
                subTitle: "① 텍스처 슬롯(Texture Slots) 2048x2048 추가",
                subDesc: "Texture Slots에서 Base Color 텍스처를 고해상도로 생성하여 선명한 드로잉 캔버스를 준비합니다.",
                img: "./images/texture_painting_guide.png",
                imgWidth: "75%"
              }
            ]
          },
          {
            step: 3,
            title: "3. 스탠딩 피규어 베이스 스탠드 & 결합 핀(Pin & Hole) 설계",
            desc: "캐릭터 피규어가 넘어지지 않고 당당하게 자립할 수 있도록 전용 받침대와 발바닥 결합 핀을 정밀 설계합니다.",
            subItems: [
              {
                subTitle: "① 원형/다각형 베이스 스탠드 모델링",
                subDesc: "Shift + A ➔ Cylinder를 추가하여 [지름: 60mm, 높이: 4mm]의 깔끔한 베이스를 제작하고 상단 모서리에 Bevel(Ctrl+B)을 적용합니다.",
                details: [
                  "스마트폰 거치대나 소품 스탠드로도 겸용할 수 있도록 앞쪽에 거치 홈을 파거나 캐릭터 로고를 양각할 수 있습니다."
                ]
              },
              {
                subTitle: "② 발바닥 결합 핀(Pin)과 받침대 홈(Hole) 공차 설계",
                subDesc: "FDM 3D 프린터의 수지 팽창 오차를 고려하여 핀 지름 4.0mm 기준 받침대 구멍 지름을 4.3mm(편측 0.15mm / 양측 0.3mm 공차)로 설계하여 접착제 없이도 안정적인 스냅 결합을 완성합니다."
              }
            ]
          },
          {
            step: 4,
            title: "4. 실습예제 : Bambu AMS 멀티컬러 색상 매핑 & 3D 슬라이싱",
            desc: "뱀부랩(Bambu Lab) AMS 멀티컬러 시스템과 연동하여 별도 도색 없이 출력만으로 여러 색상이 한 번에 나오는 멀티컬러 슬라이싱을 마스터합니다.",
            subItems: [
              {
                subTitle: "① 슬라이서(Bambu Studio / OrcaSlicer) 필라멘트 슬롯 지정",
                subDesc: "1번 슬롯(살구색 피부), 2번 슬롯(검정 눈/머리), 3번 슬롯(의상 메인 컬러), 4번 슬롯(포인트 컬러)으로 4색 필라멘트를 등록합니다."
              },
              {
                subTitle: "② 멀티컬러 페인팅 툴 (Color Painting)",
                subDesc: "슬라이서 상단 도구 팔레트의 '색칠(Paint)' 도구를 클릭하고 부위별로 색상을 지정합니다.",
                details: [
                  "<b>Fill (채우기)</b>: 닫힌 면 경계를 감지하여 한 번의 클릭으로 옷, 신발, 머리카락 영역 전체 컬러링",
                  "<b>Sphere / Circle (원형 브러시)</b>: 눈동자, 볼터치 등 미세한 디테일 영역 수동 컬러링",
                  "<b>Smart Fill (각도 감지 채우기)</b>: 30도 이상 꺾이는 모서리 경계를 알아서 인식하여 깔끔한 색 분할"
                ]
              }
            ]
          }
        ],
        hotkeys: [
          { key: "Z", desc: "뷰포트 셰이딩 파이 메뉴 (Material Preview / Solid)" },
          { key: "Shift + Spacebar", desc: "텍스처 페인트 브러시 도구함 호출" },
          { key: "X", desc: "페인팅 전경색/배경색 스왑 (Color Swap)" },
          { key: "Ctrl + B", desc: "모서리 베벨 (Bevel) 적용" }
        ],
        printTips: [
          "멀티컬러 출력 시 색 번짐(Bleeding)을 방지하려면 연한 색상(화이트/피부색)에서 어두운 색상(블랙/레드)으로 전이될 때의 플러시 볼륨을 1.2배 이상 높여주세요.",
          "스탠딩 피규어의 지지력을 높이려면 베이스 스탠드 인필을 25% 이상 설정하여 하단 무게중심을 잡아주는 것이 좋습니다.",
          "트리 서포터는 접촉면(Top Z distance)을 0.2mm로 설정하면 출력 후 손으로 가볍게 떼어낼 수 있습니다."
        ]
      },
      {
        id: 4,
        title: "4회차: 시제품 제작 및 후가공",
        subtitle: "캐릭터 굿즈 완성 & 점검",
        badge: "4회차 / 시제품 제작 & 후가공",
        objectType: "ai_ornament",
        outcomes: [
          "STL, 3MF, OBJ, STEP 등 주요 3D 파일 포맷의 구조적 차이와 멀티컬러 3MF 활용법 체득",
          "3D 프린팅 출력 품질 진단 및 대표적 실패 결함(거미줄, 수축, 결) 트러블슈팅 해결 능력 배양",
          "출력물 서포터 안전 탈거, 단계별 샌딩(사포질) 및 표면 프라이머·도색 후가공 기법 실습",
          "분할 출력물 정밀 조립 및 캐릭터 굿즈 시제품 최종 완성",
          "결과물 쇼케이스 촬영 및 포트폴리오 정리·결과물 상호 공유 및 피드백 발표"
        ],
        steps: [
          {
            step: 1,
            title: "1. STL, 3MF 등 3D 파일 포맷 이해 및 제작 활용",
            desc: "3D 프린팅 산업 표준 파일 형식들의 특징을 비교 분석하고, 최신 3D 프린터 및 멀티컬러 워크플로우에 최적화된 3MF 포맷을 활용합니다.",
            subItems: [
              {
                subTitle: "① 3D 파일 포맷 핵심 비교 분석",
                subDesc: "단순 삼각망 메쉬부터 색상 및 어셈블리 데이터를 보존하는 차세대 포맷까지의 차이점을 파악합니다.",
                table: {
                  headers: ["파일 포맷", "주요 특징", "장점", "단점 및 권장 용도"],
                  rows: [
                    ["STL (.stl)", "단순 3차원 삼각 폴리곤 표면 데이터만 저장", "모든 슬라이서 및 3D 프린터와 100% 호환", "색상, 치수 단위, 멀티바디 정보 없음 (단색 기본 출력용)"],
                    ["3MF (.3mf)", "XML 기반 최신 규격 (색상, 재질, 슬라이스 설정, 분할 메쉬 일체형 저장)", "압축률 우수, 멀티컬러/AMS 완벽 지원, 부품별 정렬 보존", "차세대 표준 규격으로 강력 권장"],
                    ["OBJ (.obj)", "형상 데이터와 함께 .mtl 재질 및 UV 텍스처 좌표 분리 저장", "3D 그래픽스 및 풀컬러 렌더링 호환성 우수", "파일이 여러 개로 분리되어 관리 번거로움"],
                    ["STEP (.stp)", "폴리곤이 아닌 수학적 곡면(NURBS) CAD 데이터 저장", "치수 정밀도 최고, 기구 설계 완벽 연동", "스컬프팅 메쉬 변환 시 파일 용량이 커질 수 있음"]
                  ]
                }
              },
              {
                subTitle: "② 블렌더 3MF & STL 내보내기 (Export Settings)",
                subDesc: "File > Export 메뉴에서 3D 프린팅에 실패하지 않는 최적 내보내기 옵션을 설정합니다.",
                details: [
                  "<b>Selection Only (선택된 오브젝트만)</b>: 씬 안의 조명, 카메라, 참조 이미지를 제외하고 출력할 오브젝트만 내보냅니다.",
                  "<b>Apply Modifiers (모디파이어 적용)</b>: Mirror, Subdivision, Solidify 등 작업 중인 모디파이어를 최종 메쉬 형태로 병합 적용하여 내보냅니다.",
                  "<b>Scale (크기 배율)</b>: 1.0 (블렌더의 1m 단위가 슬라이서의 1mm로 정확히 매핑되도록 단위 검수)"
                ]
              }
            ]
          },
          {
            step: 2,
            title: "2. 3D 출력 품질 점검 및 트러블슈팅 (오류 해결 방법)",
            desc: "실제 출력물에서 자주 발생하는 불량 증상의 원인을 진단하고, 슬라이서 파라미터 튜닝을 통해 완벽한 출력 품질을 달성합니다.",
            subItems: [
              {
                subTitle: "① 4대 출력 실패 증상 및 즉시 해결법",
                subDesc: "현장에서 발생하는 대표적인 출력 오류를 해결합니다.",
                table: {
                  headers: ["불량 증상", "주요 원인", "현장 해결 조치 (Solution)"],
                  rows: [
                    ["거미줄 현상 (Stringing)", "이동 중 노즐 잔열로 인한 필라멘트 흘러내림", "슬라이서 리트랙션 거리(0.8~2.0mm) 증가, 노즐 온도 5℃ 낮춤"],
                    ["바닥 뒤틀림 (Warping)", "급격한 온도 냉각으로 인한 PLA/ABS 수축 응력", "히팅베드 온도 60℃ 유지, 챔버 도어 닫기, 테두리 브림(Brim 5mm) 추가"],
                    ["적층 결 두드러짐 (Layer Lines)", "과도한 레이어 높이 또는 Z축 진동", "레이어 높이를 0.12mm(적응형 레이어)로 미세화, 외벽 속도 감속"],
                    ["돌출부 처짐 (Drooping)", "오버행 경사각 45도 초과 및 냉각 팬 부족", "파트 쿨링 팬 속도 100% 가동, 슬림 트리 서포터 밀착 배치"]
                  ]
                }
              },
              {
                subTitle: "② 치수 수축 오차 보정",
                subDesc: "출력 후 조립 핀이 홀에 들어가지 않을 때, 슬라이서의 <b>X-Y Hole Compensation (홀 보정: +0.15mm)</b> 또는 <b>X-Y Contour Compensation (외곽 보정: -0.1mm)</b>을 적용하여 재출력 없이 오차를 0.05mm 이내로 잡습니다."
              }
            ]
          },
          {
            step: 3,
            title: "3. 3D프린터 출력물 후가공 및 서포터 탈거·조립 실습",
            desc: "출력된 피규어 파츠의 서포터를 안전하게 떼어내고, 단계별 샌딩과 표면 정돈을 거쳐 오차 없이 단단하게 결합 조립합니다.",
            subItems: [
              {
                subTitle: "① 서포터 안전 탈거 노하우",
                subDesc: "출력물 본체의 얇은 부위(손가락, 귀, 더듬이)가 파손되지 않도록 플러시 커터(정밀 니퍼)로 서포터 가지 끝단부터 단계적으로 잘라내며 분리합니다."
              },
              {
                subTitle: "② 단계별 샌딩(사포질) 및 물사포질",
                subDesc: "적층 줄무늬와 서포터 떼어낸 자국을 지우기 위해 거친 사포에서 고운 사포 순으로 진행합니다.",
                details: [
                  "<b>1단계 (#400방 거친 사포)</b>: 서포터 떼어낸 돌기 및 큰 단차 평탄화",
                  "<b>2단계 (#800방 중간 사포)</b>: 거친 스크래치 정돈 및 전반적인 적층 결 완화",
                  "<b>3단계 (#1200~1500방 고운 물사포질)</b>: 사포에 물을 묻혀 마찰열로 인한 플라스틱 백화 현상을 방지하면서 아기 피부처럼 매끄러운 표면 완성"
                ]
              },
              {
                subTitle: "③ 분할 부품 조립 및 고정",
                subDesc: "베이스 스탠드와 캐릭터 본체, 소품 파츠를 조립합니다. 영구 고정이 필요한 부위는 젤 타입 순간접착제를 이쑤시개 끝에 소량 묻혀 도포하고 결합합니다."
              }
            ]
          },
          {
            step: 4,
            title: "4. 표면 프라이머 도색 & 탑코트 마감 (선택 심화 실습)",
            desc: "피규어의 디테일을 한층 더 끌어올리기 위해 서페이서로 미세 틈새를 메우고, 아크릴 채색 및 보호 코팅을 진행합니다.",
            subItems: [
              {
                subTitle: "① 서페이서(Primer) 스프레이 도포",
                subDesc: "그레이 서페이서 1000~1200번을 20cm 거리에서 얇게 2~3회 분사하여 미세 적층 결을 완벽히 차폐하고 도료의 흡착력을 극대화합니다."
              },
              {
                subTitle: "② 아크릴 물감 포인트 채색 & 탑코트 마감",
                subDesc: "세필 붓으로 이목구비와 장식 라인을 덧칠하고, 변색과 스크래치를 막기 위해 무광(Matte) 또는 반광(Satin) 마감재 스프레이를 분사하여 고급스러운 질감으로 완성합니다."
              }
            ]
          },
          {
            step: 5,
            title: "5. 캐릭터 굿즈 시제품 완성 및 결과물 발표·공유",
            desc: "완성된 3D 캐릭터 굿즈(열쇠고리, 캐릭터 조명, 스탠딩 피규어)를 포토존에서 촬영하고 학습 성과를 공유합니다.",
            subItems: [
              {
                subTitle: "① 시제품 완성도 최종 검수",
                subDesc: "LED 조명 점등 테스트, 스탠드 자립 안정성, 부품 결합 강도 및 표면 마감 상태를 체크리스트와 비교 점검합니다."
              },
              {
                subTitle: "② 포토존 촬영 및 라이팅 연출",
                subDesc: "3점 조명(Key, Fill, Rim Light)을 활용하여 캐릭터 굿즈의 매력을 극대화하는 쇼케이스 사진을 촬영합니다."
              },
              {
                subTitle: "③ 창작 결과물 발표 및 포트폴리오 아카이빙",
                subDesc: "AI 프롬프트 구상부터 블렌더 모델링, 3D 프린팅 출력 및 후가공까지 전 과정을 겪으며 얻은 노하우와 개선점을 함께 공유하고 상호 피드백을 나눕니다."
              }
            ]
          }
        ],
        hotkeys: [
          { key: "Shift + Ctrl + Alt + M", desc: "Non-Manifold(구멍 난 메쉬) 전체 선택" },
          { key: "Alt + F", desc: "뚫린 구멍 메우기 (Fill Hole)" },
          { key: "M", desc: "중복된 점 합치기 (Merge by Distance)" },
          { key: "Shift + N", desc: "모든 면 법선 바깥쪽 재정렬 (Recalculate Normals)" },
          { key: "Ctrl + E > Mark Seam", desc: "UV 언랩을 위한 경계선(Seam) 지정" },
          { key: "U", desc: "UV 매핑 언랩 메뉴" }
        ],
        printTips: [
          "사포질 시에는 마스크와 보안경을 착용하고, 가급적 물을 묻히는 수(水)사포질을 진행하면 분진이 날리지 않고 표면이 곱게 갈립니다.",
          "서페이서 및 마감 스프레이는 환기가 잘 되는 야외나 스프레이 부스에서 얇게 여러 번 레이어링하여 도포하세요.",
          "완성된 시제품은 직사광선(자외선)에 장시간 노출 시 PLA 소재가 변형될 수 있으므로 실내 상온에 보관하는 것이 좋습니다."
        ]
      }
    ]
  }
];

export const printingChecklistData = [
  {
    title: "1. Watertight (비매니폴드 에러 없음)",
    desc: "메쉬 내부가 완전히 닫혀 물이 새지 않는 3D 다중체 구조여야 합니다.",
    status: "pass"
  },
  {
    title: "2. Minimum Wall Thickness (최소 벽 두께)",
    desc: "FDM 프린터 기준 최소 1.2mm, SLA 기준 0.8mm 이상의 두께를 보장해야 파손되지 않습니다.",
    status: "pass"
  },
  {
    title: "3. Overhang Angle (서포터 경사각)",
    desc: "45도 이상의 급격한 돌출 부위는 Support 구조물을 추가해야 흘러내리지 않습니다.",
    status: "warning"
  },
  {
    title: "4. Face Normals Direction (법선 방향 정렬)",
    desc: "모든 면의 노멀 방향이 외부(Outside)를 향하도록 recalculate(Shift+N) 되어야 합니다.",
    status: "pass"
  }
];

export const slicerGuidesData = {
  intro: {
    title: "3D 슬라이서(Slicer)란 무엇인가요?",
    desc: "3D 슬라이서는 블렌더(Blender)에서 제작한 3D 캐릭터 모델링 파일(.STL, .OBJ, .3MF)을 3D 프린터의 노즐이 한 층(Layer)씩 쌓아 올릴 수 있도록 수백~수천 개의 2D 레이어로 얇게 자르고(Slice), 노즐 이동 경로, 압출량, 속도, 가열 온도 등을 담은 <b>G-Code(적층 제어 코드)</b>로 변환하는 핵심 프로그램입니다.",
    coreRole: [
      {
        icon: "layers",
        title: "레이어 분할 (Slicing)",
        desc: "0.08mm ~ 0.28mm 단위로 3D 모델을 수평 단면으로 슬라이스하여 정밀 적층 경로를 계산합니다."
      },
      {
        icon: "shield-alert",
        title: "서포터 자동 생성 (Support)",
        desc: "공중에 뜬 오버행(귀, 팔, 턱 등) 부위가 바닥으로 흘러내리지 않도록 지지대 구조물을 형성합니다."
      },
      {
        icon: "cpu",
        title: "프린팅 파라미터 제어",
        desc: "노즐 온도(200~230℃), 베드 온도(50~65℃), 내부 채움(Infill), 출력 속도 등을 장비에 맞게 최적화합니다."
      },
      {
        icon: "palette",
        title: "멀티컬러 & 다중 소재 매핑",
        desc: "Bambu AMS 등 멀티 피더 시스템과 연동하여 캐릭터 파츠별 색상 배분 및 전환 타워를 제어합니다."
      },
      {
        icon: "scissors",
        title: "모델 분할 및 조립 커넥터 생성 (Cut Tool)",
        desc: "출력 크기 제한이나 방향 최적화를 위해 모델을 자르고, 정확한 조립을 위한 핀(Dowel) 결합 구조를 자동 생성합니다."
      },
      {
        icon: "video",
        title: "원격 모니터링 및 AI 불량 감지 (Device Control)",
        desc: "내장 카메라로 출력 과정을 실시간 제어하며, 스파게티 현상이나 안착 불량 발생 시 출력을 자동 일시 정지합니다."
      }
    ]
  },
  slicers: {
    bambu: {
      id: "bambu",
      name: "Bambu Studio (뱀부 스튜디오)",
      shortName: "뱀부 스튜디오",
      vendor: "Bambu Lab (뱀부랩)",
      badge: "초고속 & AMS 멀티컬러 특화",
      badgeColor: "#00ae42",
      icon: "zap",
      downloadUrl: "https://bambulab.com/ko/download/studio",
      officialDocs: "https://wiki.bambulab.com/ko/software/bambu-studio",
      desc: "Bambu Lab 3D 프린터(P2S, P1S, A1, X1C 등)의 성능을 극대화하는 올인원 차세대 슬라이서입니다. 직관적인 UI, 원클릭 AMS 멀티컬러 페인팅, 초고속 진동 보정 프로파일 및 클라우드/LAN 모바일 원격 제어를 지원합니다.",
      printers: ["Bambu Lab P2S (교육장 2대 보유)", "Bambu Lab P1S / P1P", "Bambu Lab A1 / A1 mini", "Bambu Lab X1-Carbon"],
      osSupport: "Windows 10/11 (64-bit), macOS 10.15+",
      highlights: [
        "AMS(Automatic Material System) 기반 4색~16색 멀티컬러 브러시 페인팅 & 지능형 퍼지 제어",
        "최대 500mm/s 초고속 가속도 및 공진 주파수 입력 성형(Input Shaping) 프리셋 기본 내장",
        "유기적인 캐릭터 조형에 최적화된 트리 서포트(Tree Support / Slim Tree) 지원으로 쉬운 분리",
        "Wi-Fi LAN 및 Bambu Handy 스마트폰 앱 연동으로 원격 슬라이싱, 출력 시작, 실시간 카메라 모니터링",
        "조립식 굿즈 제작을 위한 메쉬 자동 컷팅(Cut Tool) 및 핀/커넥터 생성 도구 제공"
      ],
      steps: [
        {
          step: 1,
          title: "Bambu Studio 공식 인스톨러 다운로드",
          desc: "Bambu Lab 공식 홈페이지의 다운로드 센터에 접속하여 운영체제(Windows 64비트 또는 macOS)에 맞는 최신 안정화 버전을 다운로드합니다.",
          link: "https://bambulab.com/ko/download/studio",
          linkText: "Bambu Studio 공식 다운로드 바로가기 ↗",
          tip: "Windows 환경에서는 설치 시 '관리자 권한으로 실행'을 권장하며, 최신 그래픽 드라이버 상태를 유지하세요."
        },
        {
          step: 2,
          title: "소프트웨어 설치 및 환영 마법사(Setup Wizard) 실행",
          desc: "인스톨러의 안내에 따라 설치를 완료하고 프로그램을 실행하면 초기 설정 마법사가 시작됩니다. 네트워크 방화벽 경고 창이 뜨면 <b>'개인 및 공용 네트워크 액세스 허용'</b>을 체크합니다.",
          tip: "네트워크 통신을 허용해야 같은 와이파이 망에 연결된 프린터를 자동으로 탐색하고 무선 전송할 수 있습니다."
        },
        {
          step: 3,
          title: "지역 및 기본 언어(한국어) 설정",
          desc: "초기 환영 화면에서 지역(Region)을 <b>'Asia-Pacific (또는 Korea)'</b>으로 선택하고 언어를 <b>'한국어 (Korean)'</b>로 설정합니다. 필요 시 Bambu Lab 계정으로 로그인합니다.",
          tip: "클라우드 원격 제어가 필요 없는 교육장이나 오프라인 환경의 경우 'Live-View LAN Only 모드'로도 자유롭게 사용 가능합니다."
        },
        {
          step: 4,
          title: "보유 프린터 기종 & 노즐 직경 선택",
          desc: "실습실 비치 기종인 <b>Bambu Lab P2S</b>(또는 P1S/A1)를 선택하고, 기본 장착된 노즐 규격으로 가장 널리 쓰이는 <b>0.4mm Nozzle</b>을 선택합니다.",
          tip: "굿즈 피규어의 초고밀도 디테일 출력을 원할 경우 나중에 장비 관리에서 0.2mm 노즐 프로파일을 추가할 수 있습니다."
        },
        {
          step: 5,
          title: "필라멘트 프리셋 활성화 및 AMS 슬롯 구성",
          desc: "출력에 사용할 기본 소재로 <b>Bambu PLA Basic, PLA Matte, Generic PLA</b> 등을 활성화합니다. AMS 사용 시 1~4번 슬롯에 장착된 필라멘트 색상을 슬라이서 화면에 동일하게 매핑합니다.",
          tip: "타사 일반 PLA를 사용할 때도 'Generic PLA' 또는 'Bambu PLA Basic' 프로파일을 선택하면 온도(노즐 210~220℃, 베드 55~65℃)가 알맞게 적용됩니다."
        },
        {
          step: 6,
          title: "블렌더 모델링(STL/3MF) 임포트 및 슬라이스(Slice Plate)",
          desc: "블렌더에서 익스포트한 캐릭터 파일(.stl/.3mf)을 뷰포트로 드래그하여 불러온 후, 바닥면 밀착(Auto Orient), 트리 서포트(Tree Auto), 인필 15%를 지정하고 우측 상단 <b>[플레이트 슬라이스]</b>를 클릭합니다.",
          tip: "슬라이스 완료 후 [미리보기] 탭에서 우측 레이어 바를 아래위로 드래그하며 첫 레이어 안착 및 오버행 서포트 형성을 반드시 육안 검사하세요."
        }
      ]
    },
    cubicon: {
      id: "cubicon",
      name: "Cubicreator (큐비크리에이터)",
      shortName: "Cubicreator",
      badgeColor: "#0284c7",
      icon: "box",
      downloadUrl: "https://www.3dcubicon.com/bbs/board.php?bo_table=datalist&wr_id=159",
      officialDocs: "https://www.3dcubicon.com/",
      desc: "국내 초·중·고등학교, 대학교 메이커스페이스 및 공공 시제품 제작소에 가장 많이 보급된 큐비콘 3D 프린터 전용 슬라이서 소프트웨어입니다. Style NEO-A22C 등 완전 밀폐형 장비에 특화된 정밀 온도 제어와 쉬운 한글 UI를 지원합니다.",
      printers: ["Cubicon Style NEO-A22C (교육장 3대 보유)", "Cubicon Style Plus (3DP-210F)", "Cubicon Prime (3DP-310F)", "Cubicon Single Plus"],
      osSupport: "Windows 10/11 (64-bit)",
      highlights: [
        "국내 교육기관 및 메이커스페이스 점유율 1위 큐비콘 전용 최적화 프로파일 기본 탑재",
        "특수 코팅 가열 베드(Special Coated Bed)에 최적화된 하단 레이어 압출 알고리즘",
        "직관적인 100% 한글 인터페이스로 3D 모델링 입문자도 손쉽게 파라미터 제어 가능",
        "3D 프린터 본체 내장 청정 필터링(HEPA + 탈취 카본 필터) 환기 제어 연동",
        "큐비콘 전용 암호화 압축 포맷(.HVS) 및 범용 .Gcode 파일 완벽 생성 지원"
      ],
      steps: [
        {
          step: 1,
          title: "Cubicreator 다운로드 센터 (큐비콘 공식 웹사이트) 접속",
          desc: "큐비콘 공식 사이트 자료실의 Cubicreator 다운로드 페이지로 직접 이동하여 최신 소프트웨어 설치 파일을 확인합니다.",
          link: "https://www.3dcubicon.com/bbs/board.php?bo_table=datalist&wr_id=159",
          linkText: "Cubicreator 다운로드 바로가기 ↗",
          tip: "자료실 검색창에 'Cubicreator' 또는 '큐비크리에이터'를 검색하면 운영체제별 최신 릴리즈 버전을 쉽게 확인할 수 있습니다."
        },
        {
          step: 2,
          title: "Cubicreator 설치 파일 실행 및 통합 드라이버 설치",
          desc: "다운로드한 설치 파일을 실행하고 설치 마법사에 따라 프로그램을 설치합니다. 설치 과정 중 <b>'FTDI USB VCP 드라이버 설치'</b> 팝업이 나타나면 반드시 승인합니다.",
          tip: "USB 드라이버가 정상 설치되어야 PC와 큐비콘 프린터를 케이블로 연결하여 실시간 상태 확인 및 펌웨어 업데이트가 가능합니다."
        },
        {
          step: 3,
          title: "장비 기종(Device Type) 선택 및 베드 규격 설정",
          desc: "소프트웨어 최초 실행 시 나타나는 장비 설정 창에서 실습실 비치 모델인 <b>Style NEO-A22C</b>(또는 Style Plus)를 지정합니다.",
          tip: "기종 선택 시 각 모델 고유의 빌드 볼륨(X, Y, Z 최대 가동 높이)과 헤드 홈 포지션이 자동으로 캘리브레이션됩니다."
        },
        {
          step: 4,
          title: "소재(필라멘트) 및 인쇄 품질 프로파일 지정",
          desc: "출력 소재를 <b>'PLA'</b>로 선택하고 인쇄 품질을 <b>'표준 (0.2mm 레이어)'</b> 또는 정밀 피규어용 <b>'고품질 (0.15mm 레이어)'</b>로 지정합니다."
        },
        {
          step: 5,
          title: "블렌더 모델(STL) 로드, 바닥 안착 및 서포트 설정",
          desc: "블렌더에서 익스포트한 STL 파일을 불러옵니다. [모델 배치] 도구로 가장 평평한 면이 바닥을 향하도록 회전시키고, 오버행 각도(45~50도)에 맞춰 서포터를 자동 생성합니다.",
          tip: "큐비콘 특수 코팅 베드는 점착력이 우수하므로 접촉면이 넓은 캐릭터의 경우 브림(Brim) 없이도 안정적인 출력이 가능합니다. 출력물이 잘 떨어지지 않을 때는 베드가 완전히 식은 후, 헤라 같은 도구를 사용하여 분리해 주세요."
        },
        {
          step: 6,
          title: "슬라이스 연산 및 HVS / G-Code 파일 SD카드/USB 저장",
          desc: "하단 [슬라이스(Slice)] 버튼을 눌러 연산을 수행한 후, 예상 출력 시간 및 소모 필라멘트 양(g)을 확인합니다. [파일 저장]을 눌러 전용 확장자(.HVS 또는 .Gcode)로 SD카드나 USB 메모리에 저장합니다.",
          tip: "저장된 USB나 SD카드를 큐비콘 전면 단자에 꽂고 터치스크린에서 파일을 선택하면 즉시 출력이 시작됩니다."
        }
      ]
    }
  },
  commonSettings: [
    {
      param: "적층 높이 (Layer Height)",
      desc: "노즐이 한 층(Layer)씩 쌓아 올릴 때 수직으로 형성되는 단면의 두께(높이)입니다. 등고선처럼 쌓이는 출력물의 수직 표면 해상도를 결정합니다.",
      recommended: "0.20mm (표준) / 0.12~0.16mm (피규어 고품질)",
      importance: "수치가 낮을수록 층간 결(계단 현상)이 사라져 표면이 매끄러워지지만, 전체 적층 레이어 수가 늘어나 출력 시간이 1.5~2배 증가합니다."
    },
    {
      param: "외벽 두께 (Wall Loops / Perimeters)",
      desc: "출력물의 가장 바깥쪽 둘레(표면 껍질)를 노즐로 몇 바퀴 회전하여 둘러칠 것인지 결정하는 벽체 루프(선 수)입니다.",
      recommended: "2 ~ 3 루프 (최소 외벽 두께 0.8mm ~ 1.2mm)",
      importance: "외벽이 1겹으로 너무 얇으면 사포질·채색 후가공 시 메쉬에 구멍이 뚫리거나 내부 격자가 겉으로 비칠 수 있으므로 3루프 이상을 추천합니다."
    },
    {
      param: "내부 채움 밀도 & 패턴 (Infill)",
      desc: "출력물 내부를 100% 꽉 채우지 않고 비워두는 비율(%)과 그 속을 지탱하는 지지 뼈대 형태(패턴)입니다.",
      recommended: "대부분의 일반 출력에는 15~20%",
      importance: "100% 꽉 채우면 재료와 시간이 과도하게 소모됩니다. 15~20%의 밀도만 채워도 캐릭터 피규어의 충분한 강도와 내구성을 확보할 수 있습니다."
    },
    {
      param: "서포터 구조 (Support Structure)",
      desc: "공중에 떠 있는 오버행(돌출된 턱, 귀, 팔 등)이 중력에 의해 바닥으로 흘러내리지 않도록 밑에서 받쳐주는 임시 지지대입니다.",
      recommended: "오버행 45° 이상 트리(Tree) 서포트 활성화",
      importance: "45도 이상의 가파른 처짐 구간에 필수입니다. 나뭇가지 모양의 트리 서포트를 사용하면 필라멘트 낭비를 줄이고 본체 상처 없이 쉽게 떼어낼 수 있습니다."
    },
    {
      param: "베드 안착 보조 (Bed Adhesion - Brim)",
      desc: "첫 번째 레이어가 가열 베드에 강력하게 밀착되도록 모델 바닥 둘레에 모자 챙(Brim)처럼 넓게 한 겹 둘러쳐 주는 보조 테두리입니다.",
      recommended: "바닥 면적이 좁거나 키가 큰 모델: 바깥쪽 브림(Outer Brim) 5mm",
      importance: "플라스틱이 식으면서 수축하여 바닥 모서리가 위로 들뜨는 와핑(Warping) 현상이나 출력 도중 모델이 굴러 넘어지는 실패를 방지합니다."
    },
    {
      param: "노즐 & 베드 온도 (Printing Temperature)",
      desc: "필라멘트를 부드럽게 녹여 밀어내는 압출 노즐의 가열 온도와, 출력물이 식지 않고 바닥에 붙어있게 유지하는 빌드 플레이트(베드)의 표면 온도입니다.",
      recommended: "PLA 기준 - 노즐: 210℃ ~ 220℃ / 베드: 55℃ ~ 65℃",
      importance: "온도가 너무 낮으면 노즐 막힘이나 층간 결합 불량이 생기고, 너무 높으면 필라멘트가 줄줄 흘러내려 거미줄(Stringing) 현상이 발생합니다."
    }
  ],
  troubleshootingTips: [
    {
      issue: "첫 번째 레이어 베드 안착 실패 (들뜸 / 벗겨짐)",
      cause: "베드 표면의 유분(지문), 베드 레벨링 불량 또는 첫 레이어 속도가 너무 빠름",
      solution: "베드 플레이트를 주방세제와 미온수로 깨끗이 세척하고, 슬라이서에서 첫 레이어 인쇄 속도를 30~50mm/s로 낮추고 첫 레이어 베드 온도를 60~65℃로 올립니다."
    },
    {
      issue: "적층 표면에 얇은 거미줄(Stringing) 실타래 발생",
      cause: "필라멘트가 공기 중 수분을 흡수했거나 리트랙션(Retraction) 거리/속도 부족, 노즐 과열",
      solution: "노즐 출력 온도를 5℃ 낮추고, 필라멘트를 건조기에 50℃로 4~6시간 건조합니다. 슬라이서의 리트랙션 길이를 확인하세요. 필라멘트 교체가 필요할 수도 있습니다."
    },
    {
      issue: "경사면 및 턱 밑 오버행 처짐 / 표면 울퉁불퉁",
      cause: "급격한 오버행(45도 이상) 구간에 서포터 미설치 또는 파트 냉각 팬(Part Cooling Fan) 풍량 부족",
      solution: "슬라이서에서 서포트 임계각을 45도로 설정하고 트리 서포트를 적용하며, 레이어 냉각 팬 속도를 100%로 설정합니다."
    },
    {
      issue: "서포터를 떼어낸 자리에 거친 흉터(Scarring) 발생",
      cause: "출력물 본체와 서포터 인터페이스 사이의 Z 탑 거리(Top Z Distance)가 너무 좁음",
      solution: "서포터 설정의 '탑 Z 거리(Top Z Distance)'를 0.16mm ~ 0.20mm(1~1.5개 레이어 높이)로 설정하면 서포터가 깔끔하게 똑 떨어집니다."
    }
  ]
};

export const practicePrintersData = [
  {
    id: "bambu-p2s",
    brand: "뱀부랩 (Bambu Lab)",
    model: "Bambu Lab P2S",
    image: "./images/bambu_lab_p2s.png",
    badgeColor: "#00ae42",
    icon: "zap",
    type: "초고속 밀폐형 CoreXY FDM",
    slicer: "Bambu Studio (뱀부 스튜디오)",
    slicerTab: "bambu",
    features: [
      "초고속(최대 500mm/s) 가속 출력 및 능동적 진동 보정 프로파일 탑재",
      "AMS(Automatic Material System) 4색 멀티컬러 원클릭 자동 색칠",
      "Wi-Fi LAN 무선 전송 및 실시간 모니터링 카메라 내장",
      "0.4mm 경화강 노즐 기본 장착 (PLA / PETG / ABS 지원)"
    ],
    role: "정밀 캐릭터 피규어 및 멀티컬러 굿즈 실전 출력"
  },
  {
    id: "cubicon-style-neo",
    brand: "큐비콘 (CUBICON)",
    model: "Cubicon Style NEO-A22C",
    image: "./images/cubicon_style_neo.png",
    badgeColor: "#0284c7",
    icon: "box",
    type: "교육용 고정밀 밀폐형 FDM",
    slicer: "Cubicreator (큐비크리에이터)",
    slicerTab: "cubicon",
    features: [
      "특허 오토레벨링 플러스 베드 (출력 전 자동 수평 보정)",
      "특수 기능성 코팅 가열 베드로 안착 실패 및 들뜸(Warping) 방지",
      "완전 밀폐형 챔버 & 3중 클린 필터(HEPA + 탈취 카본) 탑재",
      "직관적인 100% 한글 UI 및 국내 교육장 표준 안정성"
    ],
    role: "기초 조형물, 3D 열쇠고리, 캐릭터 무드등 및 단색 시제품 출력"
  }
];

