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
    id: "blender-3dprint",
    title: "3D프린팅을 위한 블렌더 3D모델링 기초 과정",
    icon: "box",
    badge: "기초 / 3D프린팅",
    lessons: [
      {
        id: 1,
        title: "1차시: 블렌더 기초 & 3D 공간 이해",
        subtitle: "3D 네임텍 모델링",
        badge: "입문 / 파운데이션",
        objectType: "nametag",
        outcomes: [
          "블렌더 3D 인터페이스(Viewport, Outliner, Properties) 구조 습득",
          "3D 뷰포트 탐색(Orbit, Pan, Zoom) 및 X, Y, Z 3축 이동 지각",
          "오브젝트 모드(Object Mode)와 편집 모드(Edit Mode)의 개념 구분",
          "3D 프린팅에 적합한 기본 플레이트 및 텍스트 엠보싱(양각/음각) 기초"
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
                    ["Modifier (모디파이어)", "수정자 세팅", "미러(대칭), 서브디비전(부드럽게) 등 비파괴적 편집 도구 추가"],
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
                  "영역 닫기 (Close Area): 필요하지 않은 창(예: 3D프린팅 중 불필요한 타임라인)을 닫아 뷰포트 공간을 확장합니다.",
                  "영역 교환 (Swap Areas): 서로 인접한 두 영역의 화면 위치를 맞바꿉니다.",
                  "💡 <b>레이아웃 초기화</b>: 화면이 꼬였을 땐 상단 탭 우측 <b>'+' (Add Workspace) ➔ General ➔ Layout</b> 추가 후, 기존 꼬인 Layout 탭을 우클릭하여 Delete로 삭제합니다."
                ],
                img: "./images/area_edge_options.png",
                imgWidth: "50%",
                img2: "./images/timeline_close.png",
                img2Width: "40%",
                img2Title: "타임라인 헤더/경계선 마우스 우클릭 > '영역 닫기' (실전 응용)"
              }
            ]
          },
          {
            step: 2,
            title: "2. 3D 공간 기본 개념 및 화면 탐색",
            desc: "3D 프로그램은 평면(2D) 모니터 안에서 가상의 3차원 공간을 다룹니다. 이 공간을 자유롭게 제어하기 위해 3가지 기본 작동 방식(시점, 변형, 좌표축)을 사용합니다.",
            subItems: [
              {
                subTitle: "① 공간을 바라보는 시점 조작 (Navigation)",
                subDesc: "3D 공간은 깊이(Z축)가 존재하므로, 관찰자의 카메라 위치를 자유롭게 움직여야 사물의 입체감을 파악할 수 있습니다.",
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
                subDesc: "3D 공간 안의 모든 물체는 위치, 방향, 크기라는 3가지 기본 요소로 존재합니다.",
                details: [
                  "이동 (Position / Move): G (Grab)",
                  "회전 (Rotation): R (Rotate)",
                  "크기 조절 (Scale): S (Scale)"
                ]
              },
              {
                subTitle: "③ 3축 공간 좌표계 고정 (Transform Axis)",
                subDesc: "3D 공간은 X(가로/빨강), Y(세로/초록), Z(높이/파랑) 3개 축으로 구성됩니다. 원하는 방향으로만 정확히 움직이려면 변형 단축키 입력 후 축 기호를 지정합니다.",
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
            desc: "3D 커서는 새로운 오브젝트(Shift + A)가 생성되는 기준점이자 회전/변형의 중심축 역할을 하는 중요한 3차원 포인터입니다.",
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
            title: "4. 네임택 베이스 플레이트 생성",
            desc: "Add > Mesh > Cube(Shift + A)를 추가하고, Transform 단축키 S (Scale)로 [X: 70mm, Y: 30mm, Z: 2mm] 크기의 플레이트 제작"
          },
          {
            step: 5,
            title: "5. 스트랩 구멍 뚫기 & 베벨(Bevel) 적용",
            desc: "Add > Mesh > Cylinder(Shift + A)를 추가하고, 모디파이어 블린 기능으로 구멍을 뚫습니다."
          },
          {
            step: 6,
            title: "6. 텍스트 추가 및 3D 솔리드화",
            desc: "Add > Text로 텍스트 오브젝트 생성 후 원하는 이름 입력, 메쉬로 변환해서 두께는 솔리드파이로 적용"
          }
        ],
        hotkeys: [
          { key: "MMB Drag", desc: "3D 화면 회전 (Orbit)" },
          { key: "Shift + MMB", desc: "3D 화면 평행 이동 (Pan)" },
          { key: "G / R / S", desc: "이동(Grab) / 회전(Rotate) / 크기(Scale)" },
          { key: "Tab", desc: "Object Mode ↔ Edit Mode 전환" },
          { key: "Shift + A", desc: "새로운 오브젝트 추가 메뉴" },
          { key: "Ctrl + B", desc: "모서리 베벨(Bevel) 깎기" },
          { key: "~ `", desc: "뷰포트 바로가기 파이 메뉴" },
          { key: "Numpad 1 / 3 / 7 / 0", desc: "정면 / 측면 / 상면 / 카메라 뷰 전환" },
          { key: "T / N", desc: "툴바(T) / 사이드바(N) 패널 켜기·끄기" },
          { key: "Z", desc: "뷰포트 쉐이딩 모드 팝업 변경" },
          { key: "Alt + G / R / S", desc: "이동 / 회전 / 축척 변형 초기화" },
          { key: "X / Y / Z", desc: "X, Y, Z 특정 축 방향 고정 변형" },
          { key: "Shift + Left Click", desc: "여러 오브젝트/요소 다중 선택" },
          { key: "Shift + Right Click", desc: "3D 커서 위치 설정" },
          { key: "Del / X", desc: "선택한 오브젝트 삭제" },
          { key: "A", desc: "전체 선택 (Select All)" },
          { key: "Ctrl + J / P", desc: "오브젝트 결합(Ctrl+J) / 에디트 분리(P)" },
          { key: "1 / 2 / 3", desc: "에디트 모드 점/선/면 선택 모드 변경" },
          { key: "E / I / L / Ctrl+R", desc: "돌출(E) / 인셋(I) / 연결선택(L) / 루프컷(Ctrl+R)" }
        ],
        printTips: [
          "텍스트 양각 높이는 1.1mm 이상 유지해야 FDM 3D프린터 출력 시 글자가 선명합니다.",
          "스트랩 구멍 직경은 연결할 끈이나 고리의 지름을 참조하여 설정하며, 노즐 출력 오차를 고려해 3mm 이상으로 여유를 두는 것이 좋습니다."
        ]
      },
      {
        id: 2,
        title: "2차시: 변형 & 모디파이어 활용",
        subtitle: "스마트폰 거치대 모델링",
        badge: "기초 실용 / 모디파이어",
        objectType: "phone_stand",
        outcomes: [
          "복제, 결합, 정렬 및 Boolean 모디파이어 활용",
          "점, 선, 면 선택 및 돌출, 삽입 등 편집 기능 실습",
          "재질 색상 변경과 간단한 이미지 텍스처 적용"
        ],
        steps: [
          {
            step: 1,
            title: "복제, 결합, 정렬 및 Boolean 모디파이어 활용",
            desc: "오브젝트를 복제하고 결합 및 정렬한 뒤 Boolean 모디파이어를 통해 원하는 형태를 결합·분리하는 방법을 배웁니다.",
            subItems: [
              {
                subTitle: "1. 오브젝트 복제하기 (Duplicate)",
                subDesc: "3D 모델링 작업 효율을 높여주는 두 가지 핵심 복제 방법을 비교하며 알아봅니다.",
                details: [
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>① 기본 복제하기: Shift + D</div>",
                  "가장 일반적으로 쓰이는 <b>완전 독립형 복제</b>입니다.",
                  "<b>방법</b>: 복제할 개체를 선택한 후 Shift + D 키를 누릅니다.",
                  "<b>이동</b>: 키를 누르자마자 마우스 움직임에 따라 복제본이 바로 따라옵니다. 원하는 위치에서 마우스 좌클릭 또는 Enter를 누르면 고정됩니다.",
                  "<b>특징</b>: 복제본과 원본이 완전히 별개의 데이터로 분리됩니다. 원본을 수정해도 복제본에는 아무런 영향이 없습니다.",
                  "<div style='background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 0.9rem; margin-top: 0.5rem; font-size: 0.82rem; color: #1e3a8a;'><p style='margin-bottom: 0.3rem;'>💡 <b>축 고정 팁</b></p><p style='margin-bottom: 0;'>Shift + D를 누른 후 바로 X, Y, Z 키 중 하나를 누르면 해당 좌표축으로만 직선 이동하여 깔끔하게 정렬할 수 있습니다.</p></div>",
                  "<div style='margin-top: 1.5rem; font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>② 링크 복제하기: Alt + D</div>",
                  "원본의 형태(Mesh Data)를 공유하는 <b>\"분신\" 복제</b>입니다.",
                  "<b>방법</b>: 복제할 개체를 선택한 후 Alt + D 키를 누릅니다.",
                  "<b>특징</b>: 원본과 복제본의 위치/회전/크기는 따로 조절할 수 있지만, 모양(편집 모드에서의 수정사항)은 서로 공유됩니다. 한쪽 개체의 편집 모드(Tab)에서 점·선·면을 수정하면 나머지 모든 링크 복제본도 동시에 똑같이 수정됩니다.",
                  "<b>활용</b>: 나무, 기둥, 나사처럼 같은 디자인이 반복해서 쓰이는 3D 씬을 만들 때 유용합니다. 메모리 사용량도 훨씬 적고 관리하기도 편리합니다."
                ],
                img: "./images/duplicate_compare.png",
                imgWidth: "70%"
              },
              {
                subTitle: "2. 오브젝트 결합 및 연산 (Join & Boolean)",
                subDesc: "독립된 오브젝트들을 하나로 합치거나 연산하는 방식의 차이를 배웁니다.",
                details: [
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>① 개체 단일화: Ctrl + J (Join)</div>",
                  "독립된 여러 오브젝트를 하나의 단일 오브젝트로 통합할 때 사용하는 가장 기본적인 방식입니다.",
                  "<b>단축키</b>: Ctrl + J",
                  "<b>방법</b>: 합치고 싶은 개체들을 Shift를 누른 채 여러 개 선택합니다. 가장 마지막에 클릭한 개체가 '활성 개체(Active Object, 노란색 테두리)'가 됩니다. Ctrl + J를 누르면 선택한 모든 개체가 마지막에 선택한 개체의 이름과 주황색 피봇(Pivot) 기준으로 통합됩니다.",
                  "<b>특징</b>: 단순히 데이터를 하나로 합치는 것이므로, 내부의 겹쳐진 면이나 점들은 뚫고 지나가는 상태 그대로 유지됩니다.",
                  "<div style='margin-top: 1.5rem; font-size: 0.9rem; font-weight: 700; color: #16a34a;'>② 형체 결합/차집합/교집합: 부울 모디파이어 (Boolean Modifier)</div>",
                  "두 개체의 겹치는 형태를 이용해 뗌빵을 내거나, 도려내거나, 겉면을 깔끔하게 하나로 녹여 합칠 때 사용합니다.",
                  "오브젝트 설정창의 Modifier Properties(스패너 아이콘) > Add Modifier > Boolean에서 적용할 수 있으며, 3가지 모드가 있습니다.",
                  "<b>Union (합집합)</b>: 두 개체가 겹친 내부의 불필요한 면을 자동으로 제거하고, 겉면만 깔끔하게 연결된 하나의 개체로 만들어 줍니다.",
                  "<b>Difference (차집합)</b>: 기준 개체에서 타겟 개체만큼 구멍을 뚫거나 잘라냅니다.",
                  "<b>Intersect (교집합)</b>: 두 개체가 서로 겹치는 부위만 남기고 나머지는 삭제합니다.",
                  "<div style='background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 0.9rem; margin-top: 0.5rem; font-size: 0.82rem; color: #1e3a8a;'><p style='margin-bottom: 0.3rem;'>💡 <b>간단 적용 팁</b></p><p style='margin-bottom: 0;'>블렌더 기본 내장 플러그인인 <b>Auto Boolean (BoolTool)</b>을 활성화하면, 두 개체를 선택하고 Ctrl + Shift + Numpad + 키를 누르는 것만으로 즉시 Union 결합을 처리할 수 있습니다.</p></div>"
                ]
              },
              {
                subTitle: "3. 오브젝트 정렬하기 (Align & Snap)",
                subDesc: "두 개체를 정확한 위치와 각도로 맞추는 필수 정렬 기능을 배웁니다.",
                details: [
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>① 두 개체의 위치/회전 한 번에 맞추기: Align Objects</div>",
                  "A 오브젝트를 B 오브젝트의 위치나 회전값에 정확히 일치시키고 싶을 때 사용합니다.",
                  "<b>방법</b>: 정렬시킬 개체를 먼저 선택하고, 기준이 될 개체를 나중에 선택합니다 (Shift + 클릭).",
                  "상단 메뉴에서 Object > Transform > Align Objects를 클릭합니다.",
                  "좌측 하단에 뜨는 Align Objects 패널에서 옵션을 설정합니다:",
                  "- <b>Align System</b>: World (전체 좌표 기준) 또는 Local (개체 자체 좌표 기준)",
                  "- <b>X / Y / Z 축</b>: 정렬하고 싶은 좌표축 체크",
                  "- <b>High / Low / Center</b>: 개체의 끝면(최대/최소)을 맞출지, 중심을 맞출지 선택",
                  "<div style='margin-top: 0.8rem; margin-bottom: 0.8rem; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; display: inline-block;'><img src='./images/align_objects_panel.png' alt='Align Objects Panel' style='height: 200px; width: auto; display: block; object-fit: contain;' /></div>",
                  "<div style='margin-top: 1.5rem; font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>② 정밀하게 들러붙게 만들기: 스냅(Snap) 기능</div>",
                  "<div style='display: flex; gap: 1rem; margin-top: 0.8rem; margin-bottom: 0.8rem; flex-wrap: wrap;'><div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/snap_menu.png' alt='Snap Menu Panel' style='height: 250px; width: auto; display: block; object-fit: contain;' /></div><div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/snap_menu_2.png' alt='Snap Menu Settings' style='height: 250px; width: auto; display: block; object-fit: contain;' /></div></div>",
                  "건축 모델링이나 딱 들어맞는 부품을 배치할 때 사용하는 강력한 정렬 방식입니다.",
                  "상단 중앙의 자석 아이콘 (Shift + Tab)을 눌러 활성화하거나, G 키로 이동 중 Ctrl 키를 누르면 스냅이 작동합니다.",
                  "<b>Snap To (정렬 대상 설정)</b>:",
                  "- <b>Increment</b>: 그리드 격자에 맞춰 이동",
                  "- <b>Vertex</b>: 다른 개체의 '점'에 착 붙여서 정렬",
                  "- <b>Edge / Face</b>: 다른 개체의 '선'이나 '면'에 맞추어 정렬",
                  "<b>Align Rotation to Target (회전 맞춤)</b>:",
                  "스냅 옵션 중 Align Rotation to Target을 체크해두면, 경사진 면에 개체를 가져다 댔을 때 면의 각도에 맞게 개체가 알아서 회전하며 정렬됩니다."
                ]
              }
            ]
          },
          {
            step: 2,
            title: "점, 선, 면 선택 및 돌출, 삽입 등 편집 기능 실습",
            desc: "에디트 모드(Edit Mode)에서 점(Vertex), 선(Edge), 면(Face)을 세밀하게 제어하고 Extrude(E), Inset(I) 등 필수 편집 도구를 익힙니다.",
            subItems: [
              {
                subTitle: "1. 모드 전환 및 선택 모드 (1, 2, 3)",
                subDesc: "오브젝트의 전체적인 형태를 다루는 오브젝트 모드에서 세부 형태를 변형할 수 있는 에디트 모드로 전환해야 합니다.",
                img: "./images/edit_mode_switch.png",
                imgPos: "top",
                details: [
                  "<b>에디트 모드 전환</b>: Tab 키",
                  "<b>선택 요소 전환 (상단 자판 숫자키)</b>:",
                  "- <b>1</b> : 점 (Vertex) 선택 모드 — 모서리나 끝점을 다룰 때",
                  "- <b>2</b> : 선 (Edge) 선택 모드 — 변이나 테두리를 다룰 때",
                  "- <b>3</b> : 면 (Face) 선택 모드 — 평면 전체를 다룰 때",
                  "<div style='background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 0.9rem; margin-top: 0.5rem; font-size: 0.82rem; color: #1e3a8a;'><p style='margin-bottom: 0.3rem;'>💡 <b>선택 팁</b></p><ul style='margin-bottom: 0; padding-left: 1rem;'><li style='margin-bottom: 0.2rem;'><b>A</b>: 전체 선택 / <b>Alt + A</b>: 전체 선택 해제</li><li style='margin-bottom: 0.2rem;'><b>Alt + 클릭</b>: 연속된 선/면 흐름 한 번에 선택 (루프 선택)</li><li style='margin-bottom: 0;'><b>Box Select(B) / Circle Select(C)</b>: 드래그해서 여러 개 한 번에 선택</li></ul></div>"
                ]
              },
              {
                subTitle: "2. 필수 단축키 4",
                subDesc: "선택한 점, 선, 면을 제어하기 위한 필수 단축키입니다.",
                table: {
                  headers: ["기능", "단축키", "설명"],
                  rows: [
                    ["이동 (Move)", "G", "선택한 점/선/면을 이동 (축 고정: G → X/Y/Z)"],
                    ["회전 (Rotate)", "R", "선택한 점/선/면을 회전"],
                    ["크기 (Scale)", "S", "선택한 점/선/면의 크기를 조절"],
                    ["엑스레이 (X-Ray)", "Alt + Z", "투시 모드 (반대편 숨겨진 점/선/면 투과 선택시 필수)<br><div style='margin-top: 0.5rem;'><img src='./images/xray_mode.png' alt='X-Ray Mode' style='width: 40%; height: auto; border-radius: 4px; border: 1px solid #cbd5e1;' /></div>"]
                  ]
                }
              },
              {
                subTitle: "3. 다양한 돌출 (Extrude) 기능 알아보기",
                subDesc: "",
                details: [
                  "<div style='display: flex; gap: 1.5rem; align-items: flex-start;'><div style='flex: 0 0 160px;'><img src='./images/extrude_menu.png' style='width: 100%; height: auto; border-radius: 6px; border: 1px solid #cbd5e1;' alt='Extrude Menu' /></div><div style='flex: 1;'><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>① 지역 돌출 (Extrude Region)</div><div style='margin-bottom: 0.3rem;'>가장 대표적인 기본 돌출 방식입니다.</div><div style='margin-bottom: 1.2rem;'>선택한 여러 개의 면을 하나의 덩어리로 묶어서 동일한 축 방향(선택면의 평균 법선 방향)으로 뽑아냅니다.</div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>② 매니폴드 돌출 (Extrude Manifold)</div><div style='margin-bottom: 0.3rem;'>3D 형태의 구조를 깨뜨리지 않고 스마트하게 밀고 넣는 기능입니다.</div><div style='margin-bottom: 1.2rem;'>일반 돌출로 면을 내부로 밀어 넣으면 불필요한 면이 겹쳐 꼬이지만, 매니폴드 돌출은 겹치는 옆면과 내부 면을 자동 삭제 및 재정리하여 구멍을 뚫어줍니다.</div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>③ 노멀을 따라 돌출 (Extrude Along Normals)</div><div style='margin-bottom: 0.3rem;'>선택한 각 면이 바라보는 수직 방향(노멀)으로 부풀리거나 줄이는 방식입니다.</div><div style='margin-bottom: 1.2rem;'>구(Sphere)나 원기둥처럼 굴곡이 있는 복합 면을 돌출할 때 왜곡 없이 팽창하듯 늘어납니다.</div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>④ 개별 돌출 (Extrude Individual)</div><div style='margin-bottom: 0.3rem;'>선택한 면들이 붙어 있어도 각각 독립된 개체로 돌출시킵니다.</div><div style='margin-bottom: 1.2rem;'>면과 면 사이가 연결되지 않고 각자의 정면으로 솟아올라 독립된 기둥 형태가 됩니다.</div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>⑤ 커서로 돌출 (Extrude to Cursor)</div><div style='margin-bottom: 0.3rem;'>3D 뷰포트에서 마우스 클릭 위치를 향해 연속해서 면을 뽑아냅니다.</div><div style='margin-bottom: 0;'>클릭할 때마다 선택 면이 해당 위치까지 늘어나 곡선이나 뼈대를 빠르게 확장합니다.</div></div></div>"
                ]
              },
              {
                subTitle: "4. 인셋 (Inset Faces) 도구 알아보기",
                subDesc: "선택한 면(Face)의 테두리를 따라 안쪽(또는 바깥쪽)에 동일한 비율의 새로운 면을 추가하는 도구입니다.",
                img: "./images/inset_faces.png",
                imgPos: "top",
                details: [
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>① 기본 정보 및 단축키</div>",
                  "- <b>단축키</b>: I (Edit Mode의 Face 선택 모드 3에서 실행)",
                  "- <b>툴바 단축키</b>: Shift + Spacebar 누른 뒤 I",
                  "<div style='margin-top: 1.5rem; font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>② 주요 동작 방식 및 특징</div>",
                  "<b>안쪽 면 생성</b>: 선택한 면 안쪽으로 일정한 간격의 모서리를 생성해 작은 면을 만들어냅니다.",
                  "<b>돌출(Extrude, E)과의 조합</b>:",
                  "- I로 안쪽 면을 만든 후 E로 밀어 넣으면 ➔ 액자, 창문, 홈, 박스 내부 공간",
                  "- I로 안쪽 면을 만든 후 E로 뽑아내면 ➔ 단추, 피스톤, 건물 베란다",
                  "<div style='margin-top: 1.5rem; font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>③ 실무 필수 옵션 및 단축키 팁</div>",
                  "I 키를 누르고 마우스를 움직일 때, 아래 단축키를 눌러 세부 모드를 전환할 수 있습니다. (좌측 하단 Inset Faces 팝업창에서도 조절 가능)"
                ],
                table: {
                  headers: ["단축키", "옵션 이름", "기능 설명"],
                  rows: [
                    ["I (한 번 더)", "Individual (개별 인셋)", "여러 면을 선택했을 때 면들을 합치지 않고 각각의 면 안쪽에 따로 인셋을 만듭니다."],
                    ["B", "Boundary (경계선)", "오브젝트 끝 단의 열린 경계면까지 인셋을 적용할지 여부를 결정합니다."],
                    ["Ctrl 누른 채 드래그", "Depth (두께/깊이)", "인셋과 동시에 안/밖으로 입체감(Depth)을 함께 주며 밀고 당깁니다."],
                    ["O", "Outset (아웃셋)", "면의 안쪽이 아니라 바깥쪽으로 면을 확장하여 생성합니다."]
                  ]
                }
              }
            ]
          },
          {
            step: 3,
            title: "재질 색상 변경과 간단한 이미지 텍스처 적용",
            desc: "모델링된 오브젝트에 Material을 추가하여 색상을 지정하고, 외부 이미지를 매핑(Texture)하여 더욱 사실적인 질감을 표현합니다.",
            subItems: [
              {
                subTitle: "1. 재질(Material) 기본 색상 변경하기",
                subDesc: "오브젝트에 기본 컬러를 지정하고 광택, 반사율 등 기초 속성을 다루는 단계입니다.",
                details: [
                  "<div style='display: flex; align-items: center; justify-content: space-between; gap: 0.8rem; margin-top: 0.5rem; margin-bottom: 1rem; background: #fafafa; padding: 1rem; border-radius: 8px; border: 1px solid #cbd5e1; flex-wrap: nowrap;'><div style='flex: 1;'><img src='./images/texture_step1.png' alt='재질 설정 1' style='width: 100%; height: auto; display: block; object-fit: contain; border-radius: 4px; border: 1px solid #e2e8f0;' /></div><div style='flex: 0 0 auto; font-size: 1.5rem; color: #94a3b8; font-weight: bold;'>➔</div><div style='flex: 1;'><img src='./images/texture_step2.png' alt='재질 설정 2' style='width: 100%; height: auto; display: block; object-fit: contain; border-radius: 4px; border: 1px solid #e2e8f0;' /></div><div style='flex: 0 0 auto; font-size: 1.5rem; color: #94a3b8; font-weight: bold;'>➔</div><div style='flex: 1;'><img src='./images/texture_step3.png' alt='재질 설정 3' style='width: 100%; height: auto; display: block; object-fit: contain; border-radius: 4px; border: 1px solid #e2e8f0;' /></div></div>",
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>🛠️ 실행 단계</div>",
                  "- <b>오브젝트 선택</b>: 색을 바꿀 개체를 클릭합니다.",
                  "- <b>재질 속성 탭 이동</b>: 우측 속성 패널에서 지구본/공 모양 아이콘 (Material Properties)을 클릭합니다.",
                  "<div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; max-width: 250px; margin: 0.5rem 0 0.5rem 1rem;'><img src='./images/material_properties_tab.png' alt='Material Properties 탭' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div>",
                  "- <b>새 재질 생성</b>: New(새로 만들기) 버튼을 누릅니다.",
                  "- <b>색상 변경 (Base Color)</b>: Base Color(기본 색상) 입력란을 클릭하고 원하는 색상을 선택합니다.",
                  "- <b>뷰포트 표시 설정</b>: 3D 화면 우측 상단에서 Viewport Shading 모드를 세 번째(Material Preview)나 네 번째(Rendered)로 변경해야 적용된 색상이 눈에 보입니다. (기본 Solid 모드에서는 보이지 않음)",
                  "<div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; max-width: 250px; margin: 0.5rem 0 0.5rem 1rem;'><img src='./images/viewport_shading.png' alt='Viewport Shading' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div>",
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 1.5rem;'>💡 주요 재질 속성 팁</div>",
                  "- <b>Roughness (거칠기)</b>: 값을 0에 가깝게 내리면 유리/금속처럼 반짝이고, 1에 가깝게 올리면 고무/천처럼 매끄럽지 않은 광택이 됩니다.",
                  "- <b>Metallic (금속성)</b>: 값을 1로 올리면 차갑고 반사율이 높은 금속 질감으로 바뀝니다."
                ]
              },
              {
                subTitle: "2. 외부 이미지 텍스처(Texture) 적용하기",
                subDesc: "나무, 벽돌, 캐릭터 피부, 사진 등 외부 이미지 파일(.png, .jpg)을 오브젝트 표면에 래핑하듯 입히는 방법입니다.",
                details: [
                  "<div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a; margin-top: 0.4rem;'>🛠️ 실행 단계</div>",
                  "- Material Properties 탭에서 생성된 재질의 <b>Base Color</b> 항목을 찾습니다.",
                  "- Base Color 옆의 <b>'노란색 동그라미 아이콘'</b>을 클릭합니다.",
                  "- 메뉴 목록 중 <b>Image Texture (이미지 텍스처)</b>를 선택합니다. (Base Color란이 노란색으로 변경됨)",
                  "- 새로 생긴 <b>Open (열기)</b> 버튼을 누르고 준비한 이미지 파일(.jpg / .png)을 불러옵니다.",
                  "- 3D 화면에서 불러온 이미지가 오브젝트 형태에 맞게 입혀진 것을 확인합니다.",
                  "<div style='display: flex; align-items: center; justify-content: space-between; gap: 0.8rem; margin-top: 1rem; margin-bottom: 0.5rem; background: #fafafa; padding: 1rem; border-radius: 8px; border: 1px solid #cbd5e1; flex-wrap: nowrap;'><div style='flex: 1;'><img src='./images/texture_result1.png' alt='텍스처 적용 결과 1' style='width: 100%; height: auto; display: block; object-fit: contain; border-radius: 4px; border: 1px solid #e2e8f0;' /></div><div style='flex: 1;'><img src='./images/texture_result2.png' alt='텍스처 적용 결과 2' style='width: 100%; height: auto; display: block; object-fit: contain; border-radius: 4px; border: 1px solid #e2e8f0;' /></div></div>"
                ]
              }
            ]
          },
          {
            step: 4,
            title: "스마트폰 거치대 모델링",
            desc: "지금까지 배운 돌출, 인셋, 베벨 등의 모델링 기법들을 종합하여 3D 프린터로 출력할 수 있는 실용적인 스마트폰 거치대를 직접 만들어 봅니다."
          }
        ],
        hotkeys: [
          { key: "E", desc: "면/선/점 돌출 (Extrude)" },
          { key: "I", desc: "면 내부 삽입 (Inset Faces)" },
          { key: "Ctrl + R", desc: "루프 컷 (Loop Cut & Slide)" },
          { key: "1 / 2 / 3", desc: "Edit mode에서 점/선/면 선택 모드 변경" },
          { key: "Shift + Z", desc: "와이어프레임(Wireframe) 뷰 모드 켜기/끄기" },
          { key: "Alt + Left Click", desc: "연속된 루프 Edge 선택" }
        ],
        printTips: [
          "스마트폰 거치대는 서포터(Support) 없이 출력할 수 있도록 경사각을 45도 이하로 설계하는 것이 유리합니다.",
          "충전 케이블 구멍 R 값은 최소 R5mm 이상을 권장합니다.",
          "내부 채우기(Infill)는 15%~20% Grid 패턴으로 출력 시 충분한 강도를 확보할 수 있습니다."
        ]
      },
      {
        id: 3,
        title: "3차시: 3D 캐릭터 & 스컬프팅 입문",
        subtitle: "미니 캐릭터 피규어 모델링",
        badge: "응용 / 미러 & 스컬프팅",
        objectType: "mini_character",
        outcomes: [
          "Mirror Modifier(미러 모디파이어)를 활용한 대칭 오브젝트 조형",
          "Sculpt Mode(스컬프트 모드) 전환 및 Clay, Grab, Smooth 브러시 작동 원리 체득"
        ],
        steps: [
          {
            step: 1,
            title: "기본 메쉬 배치 및 Bool Tool 병합 (기본 체형)",
            desc: "기본 도형(Sphere, Cylinder)을 배치하고 미러 모디파이어와 Bool Tool 애드온을 활용해 캐릭터의 기본 체형 메쉬를 만듭니다.",
            subItems: [
              {
                subTitle: "① Bool Tool 애드온 활성화하기",
                subDesc: "블렌더에서 제공하는 기본 애드온을 활성화하여 결합 작업을 손쉽게 준비합니다.",
                details: [
                  "<b>방법</b>: 상단 메뉴 Edit ➔ Preferences ➔ Add-ons 탭으로 이동합니다.",
                  "<b>설정</b>: 검색창에 Bool Tool을 입력한 뒤, Object: Bool Tool 항목의 체크박스를 활성화합니다.",
                  "<img src=\"./images/bool_tool_setting.png\" alt=\"Bool Tool 설정\" style=\"max-width: 462px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; margin: 0.4rem 0 0.8rem 0; display: block;\" />",
                  "<b>메뉴 실행</b>: 3D 뷰포트에서 단축키 <b>N</b> 키를 누른 후, 우측 사이드바의 <b>Edit</b> 탭 ➔ <b>Bool Tool</b> 항목에서 연산을 선택합니다.",
                  "<img src=\"./images/bool_tool_menu.png\" alt=\"Bool Tool 메뉴\" style=\"max-width: 462px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; margin: 0.4rem 0 0.8rem 0; display: block;\" />",
                  "<div style=\"background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 1rem; margin: 0.8rem 0; font-family: inherit;\"><h6 style=\"margin: 0 0 0.6rem 0; font-size: 0.88rem; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 0.4rem;\"><span style=\"background: #3b82f6; width: 6px; height: 14px; display: inline-block; border-radius: 2px;\"></span>Boolean(불리언) 주요 4가지 연산 기능</h6><ul style=\"list-style: none; padding: 0; margin: 0 0 1rem 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem; color: #334155;\"><li><strong style=\"color: #2563eb;\">• Union (합집합 - 결합):</strong> 선택한 오브젝트들을 하나로 합칩니다. (이번 캐릭터 체형 제작에 사용한 기능)</li><li><strong style=\"color: #2563eb;\">• Difference (차집합 - 빼기):</strong> 기준 오브젝트에서 다른 오브젝트의 모양만큼 싹 깎아냅니다. (예: 눈 구멍을 뚫거나 옷의 패인 홈을 만들 때)</li><li><strong style=\"color: #2563eb;\">• Intersect (교집합 - 겹침):</strong> 두 오브젝트가 서로 겹치는 부분만 남기고 나머지는 삭제합니다.</li><li><strong style=\"color: #2563eb;\">• Slice (조각내기):</strong> 겹치는 부분을 칼로 자르듯 분리해 내어 독립된 메쉬로 나눠줍니다.</li></ul><h6 style=\"margin: 0.8rem 0 0.6rem 0; font-size: 0.88rem; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 0.4rem;\"><span style=\"background: #10b981; width: 6px; height: 14px; display: inline-block; border-radius: 2px;\"></span>Bool Tool의 2가지 작동 방식</h6><p style=\"font-size: 0.78rem; color: #64748b; margin: 0 0 0.6rem 0; line-height: 1.4;\">Bool Tool 메뉴나 단축키를 보시면 Auto Boolean과 Brush Boolean으로 나뉘어 있습니다.</p><div style=\"overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 6px;\"><table style=\"width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: left; background: #ffffff;\"><thead><tr style=\"background: #f1f5f9; color: #1e293b; font-weight: 600; border-bottom: 1px solid #cbd5e1;\"><th style=\"padding: 6px 8px;\">방식</th><th style=\"padding: 6px 8px;\">설명</th><th style=\"padding: 6px 8px; white-space: nowrap;\">주요 단축키</th><th style=\"padding: 6px 8px;\">활용 상황</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid #f1f5f9;\"><td style=\"padding: 6px 8px; font-weight: 600; color: #2563eb; white-space: nowrap;\">Auto Boolean</td><td style=\"padding: 6px 8px; line-height: 1.3;\">즉시 면을 계산하여 하나로 합치거나 깎아내고 <strong>원본을 파괴(Apply)</strong>합니다.</td><td style=\"padding: 6px 8px; font-family: monospace; font-size: 0.72rem; color: #dc2626; white-space: nowrap;\">Ctrl + Shift + Numpad (+ / -)</td><td style=\"padding: 6px 8px; line-height: 1.3;\">완벽히 위치가 확정된 후 빠른 병합이 필요할 때</td></tr><tr><td style=\"padding: 6px 8px; font-weight: 600; color: #10b981; white-space: nowrap;\">Brush Boolean</td><td style=\"padding: 6px 8px; line-height: 1.3;\">모디파이어 형태로 적용되어, 깎아내는 위치를 나중에도 자유롭게 이동/수정할 수 있습니다.</td><td style=\"padding: 6px 8px; font-family: monospace; font-size: 0.72rem; color: #dc2626; white-space: nowrap;\">Ctrl + Numpad (+ / -)</td><td style=\"padding: 6px 8px; line-height: 1.3;\">형태 조율 중이거나 나중에 형태 수정을 고려해야 할 때</td></tr></tbody></table></div></div>"
                ]
              },
              {
                subTitle: "② 기본 메쉬 배치 및 비율잡기",
                subDesc: "3D 뷰포트에 기본 도형들을 추가하고 이동/스케일 조절을 통해 캐릭터 비율을 만듭니다.",
                details: [
                  "<b>참조 이미지 불러오기 (Reference)</b>: 모델링의 가이드라인이 될 참조 이미지를 불러옵니다. <br>방법: <b>Shift + A</b> ➔ <b>Image</b> ➔ <b>Reference</b> 메뉴로 이동하여 원하는 PNG 이미지 파일을 불러옵니다.",
                  "<img src=\"./images/reference_image_setting.png\" alt=\"참조 이미지 불러오기\" style=\"max-width: 462px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; margin: 0.4rem 0 0.8rem 0; display: block;\" />",
                  "<b>참조 이미지 불투명도(Opacity) 조절하기</b>: 이미지가 3D 오브젝트를 가리지 않도록 투명하게 설정하면 모델링 작업이 훨씬 수월해집니다. <br>방법: 불러온 참조 이미지(Empty) 선택 ➔ 우측 Object Data Properties (빨간색 빈 축 아이콘) ➔ <b>Opacity</b> 항목을 체크한 뒤 값을 0.2 ~ 0.4 정도로 낮춰줍니다.",
                  "<img src=\"./images/reference_image_opacity.png\" alt=\"불투명도 조절\" style=\"max-width: 370px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; margin: 0.4rem 0 0.8rem 0; display: block;\" />",
                  "<b>머리 (Head)</b>: Shift + A ➔ Mesh ➔ UV Sphere 생성 후 G ➔ Z 키로 위쪽 이동, 그리고 S키로 크기 조절",
                  "<b>몸통 (Torso)</b>: Shift + A ➔ Mesh ➔ UV Sphere 생성 후 머리 아래 배치, S ➔ Z 키로 형태 조절",
                  "<b>다리 (Legs)</b>: Shift + A ➔ Mesh ➔ Cylinder 생성 후 오른쪽 다리 위치로 이동 및 크기 조절",
                  "<div style=\"display: flex; gap: 0.8rem; align-items: center; margin: 0.4rem 0 0.8rem 0; flex-wrap: wrap;\"><img src=\"./images/leg_placement_1.png\" alt=\"다리 배치 1\" style=\"max-width: 226px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; display: block;\" /><img src=\"./images/leg_placement_2.png\" alt=\"다리 배치 2\" style=\"max-width: 226px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; display: block;\" /></div>"
                ]
              },
              {
                subTitle: "③ 다리 미러 모디파이어(Mirror Modifier) 적용하기",
                subDesc: "한쪽 다리만 만들어도 반대쪽 다리가 자동으로 대칭 생성되도록 설정합니다.",
                details: [
                  "<b>방법</b>: 다리(Cylinder) 선택 후 우측 Modifier Properties (렌치 아이콘) ➔ Add Modifier ➔ Mirror 클릭",
                  "<b>기준점 설정</b>: Mirror Object 스포이드 아이콘을 클릭하고 머리 또는 몸통 스피어를 선택하여 중심축(X=0)을 잡아줍니다.",
                  "<div style=\"display: flex; gap: 0.8rem; align-items: center; margin: 0.4rem 0 0.8rem 0; flex-wrap: wrap;\"><img src=\"./images/mirror_origin_1_final.png\" alt=\"기준점 설정 1\" style=\"max-width: 226px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; display: block;\" /><img src=\"./images/mirror_origin_2.png\" alt=\"기준점 설정 2\" style=\"max-width: 226px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; display: block;\" /></div>"
                ]
              },
              {
                subTitle: "④ Bool Tool로 하나로 병합하기 (Auto Boolean)",
                subDesc: "배치된 메쉬들을 매끄럽게 하나의 단일 메쉬로 자동 합성합니다.",
                details: [
                  "<b>선택 순서</b>: Shift 키를 누른 채 다리 ➔ 몸통 ➔ 머리 순으로 선택합니다. (전체 선택)",
                  "<b>실행</b>: 단축키 <b>N</b> 키를 눌러 우측 사이드바(N-Panel) ➔ <b>Edit</b> ➔ <b>Bool Tool</b> ➔ <b>Auto Boolean</b> ➔ <b>Union</b>을 실행합니다."
                ]
              }
            ]
          },
          {
            step: 2,
            title: "팔, 귀 부속품 대칭 모델링 (Symmetry)",
            desc: "스컬프트 모드의 대칭 기능과 미러 모디파이어를 활용해 팔과 귀 등 좌우 대칭 부속품을 제작합니다.",
            subItems: [
              {
                subTitle: "① 스컬프트 모드 대칭(Symmetry) 설정하기",
                subDesc: "좌우 대칭 축을 켜서 한쪽 작업 시 반대쪽도 동일하게 반영되도록 설정합니다.",
                img: "./images/sculpt_mode_enter.png",
                imgPos: "before-title",
                imgWidth: "415px",
                details: [
                  "<b>설정</b>: 3D 뷰포트 우상단 Symmetry 옵션에서 X 축 버튼이 활성화되어 있는지 확인합니다."
                ]
              },
              {
                subTitle: "② 마스크(Mask) 영역 지정 및 반전하기",
                subDesc: "팔과 귀가 뽑아져 나올 위치를 칠한 뒤 영역을 반전하여 추출 준비를 합니다.",
                details: [
                  "<b>마스크 칠하기 (단축키: M)</b>: Mask 브러시를 선택하고, 캐릭터의 어깨(팔 위치) 및 머리 측면(귀 위치) 영역을 칠합니다. (대칭 기능으로 반대쪽도 자동 지정됩니다.)",
                  "<b>마스크 반전 (단축키: Ctrl + I)</b>: Ctrl + I를 눌러 칠한 부위를 제외한 나머지 전체 영역을 마스크 처리합니다. (이제 마스크가 안 칠해진 팔/귀 영역만 자유롭게 변형할 수 있게 됩니다.)"
                ]
              },
              {
                subTitle: "③ 브러시로 부속품 돌출시키기 (Elastic Grab / Snake Hook)",
                subDesc: "선택된 영역의 메쉬를 뽑아내어 형태를 만들어 줍니다.",
                details: [
                  "<b>형태 뽑아내기</b>: Elastic Grab 브러시(또는 Snake Hook 브러시)를 선택하고 마우스 드래그로 팔과 귀의 형태를 바깥쪽으로 길게 당겨서 뽑아냅니다.",
                  "<b>마스크 해제 (단축키: Alt + M)</b>: 돌출 작업이 완료되면 Alt + M을 눌러 전체 마스크를 해제합니다.",
                  "<div style=\"background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 0.9rem; margin-top: 0.5rem; font-size: 0.82rem; color: #1e3a8a;\"><p style=\"margin-bottom: 0.3rem;\">💡 <b>꿀팁! 메쉬 깨짐 대처법</b></p><p style=\"margin-bottom: 0;\">메쉬를 많이 늘리다 보면 해당 부분의 면이 얇아지거나 깨질 수 있습니다. 팔/귀를 뽑아낸 후 <b>3단계의 Voxel Remesh (Ctrl + R)</b>를 실행하면 줄어든 면이 고르게 재정렬되므로 걱정하지 않고 자유롭게 형태를 잡아도 됩니다!</p><div style=\"display: flex; gap: 0.5rem; align-items: center; margin-top: 0.6rem; flex-wrap: nowrap;\"><img src=\"./images/voxel_remesh_1.png\" alt=\"리메쉬 1\" style=\"max-width: 100px; width: 100%; border-radius: 4px; border: 1px solid #bfdbfe; display: block;\" /><img src=\"./images/voxel_remesh_2.png\" alt=\"리메쉬 2\" style=\"max-width: 100px; width: 100%; border-radius: 4px; border: 1px solid #bfdbfe; display: block;\" /><img src=\"./images/voxel_remesh_3.png\" alt=\"리메쉬 3\" style=\"max-width: 220px; width: 100%; border-radius: 4px; border: 1px solid #bfdbfe; display: block;\" /></div></div>"
                ]
              }
            ]
          },
          {
            step: 3,
            title: "Sculpt Mode 브러시 조형 및 표면 정돈",
            desc: "기본 형상이 완성된 캐릭터를 스컬프트 모드 브러시를 사용해 유기적이고 부드러운 형태로 다듬습니다.",
            subItems: [
              {
                subTitle: "① 보셀 리메쉬(Voxel Remesh)로 면 구조 재정렬하기",
                subDesc: "Bool Tool 결합 과정에서 얽힌 면(Topology)을 균일한 격자 구조로 재구성합니다.",
                details: [
                  "<b>방법</b>: Sculpt Mode 상단 Remesh 메뉴 클릭 ➔ Voxel Size를 0.01 ~ 0.02로 설정",
                  "<b>실행</b>: 단축키 Ctrl + R을 누르면 전체 면이 고르고 균일하게 재구성됩니다."
                ]
              },
              {
                subTitle: "② Grab 브러시 (단축키: G) 활용하기",
                subDesc: "캐릭터의 전체적인 윤곽 and 곡선 표면을 당기거나 밀어서 유기적으로 변형합니다.",
                details: [
                  "<b>활용</b>: 볼의 볼륨감, 턱선, 귀의 곡선, 팔다리의 매끄러운 연결부 등을 자연스럽게 잡아줍니다."
                ]
              },
              {
                subTitle: "③ Smooth 브러시 (단축키: Shift 누른 채 드래그) 활용하기",
                subDesc: "울퉁불퉁하거나 리메쉬로 인해 거칠어진 표면을 부드럽게 매만집니다.",
                details: [
                  "<b>특징</b>: 어떤 브러시를 선택한 상태든 작업 중 Shift 키를 누르고 드래그하면 즉시 Smooth 브러시가 작동합니다."
                ]
              }
            ]
          },
          {
            step: 4,
            title: "매테리얼 설정, 텍스처 페인팅 및 기초 리깅",
            desc: "캐릭터에 색상을 입히고 직접 그려 넣은 뒤, 뼈대(Armature)를 심어 움직일 수 있게 만듭니다.",
            subItems: [
              {
                subTitle: "① 매테리얼(Material) 설정하기",
                subDesc: "캐릭터 표면의 기본적인 색상과 질감 데이터를 지정합니다.",
                details: [
                  "<b>방법</b>: 우측 Material Properties (지구본 아이콘) ➔ New 클릭",
                  "<b>속성 조절</b>: Base Color에서 피부/옷 색상 지정, Roughness를 0.4 ~ 0.6 정도로 조절하여 매끄러운 광택 연출"
                ]
              },
              {
                subTitle: "② 텍스처 페인팅 (Texture Paint)",
                subDesc: "캐릭터에 직접 붓질을 하여 볼터치, 눈썹, 의상 디자인 등의 디테일을 그립니다.",
                details: [
                  "<b>방법</b>: 상단 워크스페이스를 Texture Paint 탭으로 전환 ➔ Texture Slots에서 Base Color 텍스처(2048x2048) 추가",
                  "<b>작업</b>: 브러시 툴을 이용해 3D 모델링 표면에 직접 세부 표현을 그려 넣습니다."
                ]
              },
              {
                subTitle: "③ 기초 리깅 (Rigging) 및 뼈대 연결하기",
                subDesc: "캐릭터를 움직이기 위한 뼈대(Armature) 구조를 만들고 메쉬와 바인딩합니다.",
                details: [
                  "<b>뼈대 생성</b>: Shift + A ➔ Armature 생성 (Viewport Display ➔ In Front 체크하여 뼈가 보이게 설정)",
                  "<img src=\"./images/armature_in_front.png\" alt=\"Armature In Front 설정\" style=\"max-width: 415px; width: 100%; border-radius: 6px; border: 1px solid #e2e8f0; margin: 0.4rem 0 0.8rem 0; display: block;\" />",
                  "<b>뼈대 확장</b>: Edit Mode에서 E (Extrude) 키를 이용해 척추, 머리, 팔, 다리 위치로 뼈대 확장",
                  "<b>자동 웨이트 연결</b>: Object Mode에서 캐릭터 메쉬 ➔ Armature 순으로 선택 후 Ctrl + P ➔ With Automatic Weights 클릭",
                  "<b>포즈 테스트</b>: Pose Mode로 전환하여 뼈를 선택하고 R (회전) 키를 눌러 정상 작동을 확인합니다."
                ]
              }
            ]
          },
          {
            step: 5,
            title: "3D Print Toolbox를 활용한 모델링 검사 및 오류 수정",
            desc: "3D Print Toolbox 애드온을 활용해 모델링의 터진 부분이나 겹친 요소 등 3D 출력 시 문제가 될 수 있는 오류를 검사하고 자동으로 수정합니다.",
            subItems: [
              {
                subTitle: "① 3D Print Toolbox 애드온 활성화",
                subDesc: "3D 출력 및 데이터 정리를 위한 블렌더 내장 공식 애드온을 활성화합니다.",
                details: [
                  "<b>방법</b>: 상단 메뉴 Edit ➔ Preferences ➔ Add-ons 탭으로 이동합니다.",
                  "<b>설정</b>: 검색창에 3D Print Toolbox를 입력한 후 해당 체크박스를 활성화합니다."
                ]
              },
              {
                subTitle: "② 모델링 오류 검사 (Check All)",
                subDesc: "캐릭터 메쉬의 구멍 난 면, 뚫린 점, 비매니폴드(Non-Manifold) 등 잠재적 오류를 정밀 검사합니다.",
                details: [
                  "<b>패널 열기</b>: 3D 뷰포트 우측 단축키 N 키를 눌러 사이드바의 3D Print 탭을 클릭합니다.",
                  "<b>검사 실행</b>: Check All 버튼을 누릅니다. 구멍 난 면이나 겹친 요소(Solid, Non Manifold Edge 등)의 에러 개수가 목록에 표시됩니다."
                ]
              },
              {
                subTitle: "③ 오류 자동 수정 (Make Manifold)",
                subDesc: "클릭 한 번으로 3D 출력에 유효한 메쉬 상태(Solid 메쉬)로 일괄 복구합니다.",
                details: [
                  "<b>실행</b>: Clean Up 항목 아래 of Make Manifold 버튼을 클릭합니다.",
                  "<b>결과 확인</b>: 뒤집힌 면(Normal) 정렬, 뚫린 구멍 메우기, 겹친 면 정리 등이 자동으로 실행되어 출력이 가능한 완성형 3D 메쉬로 수정됩니다."
                ]
              }
            ]
          }
        ],
        hotkeys: [
          { key: "Ctrl + J", desc: "선택한 여러 오브젝트 하나로 결합 (Join)" },
          { key: "Ctrl + 2", desc: "Subdivision Surface Level 2 적용" },
          { key: "G (Sculpt)", desc: "Grab 브러시 - 메쉬 당기기" },
          { key: "Shift (Hold)", desc: "Sculpt 중 거친 표면 부드럽게 (Smooth)" },
          { key: "Ctrl (Hold)", desc: "브러시 기능 반대로 적용 (Invert)" },
          { key: "F / Shift + F", desc: "브러시 크기(Radius) / 강도(Strength) 조절" }
        ],
        printTips: [
          "캐릭터의 튀어나온 팔이나 귀 부분은 FDM 3D 프린팅 시 서포터(Support) 생성이 필수적입니다.",
          "스컬프팅 후 고용량 메쉬는 Decimate 모디파이어로 폴리곤 수를 줄여 STL 파일 용량을 최적화하세요."
        ]
      },
      {
        id: 4,
        title: "4차시: 생성형 AI 3D & 프린팅 최적화",
        subtitle: "3D프린팅용 장식 소품 제작",
        badge: "심화 / AI 3D & 실전 프린팅",
        objectType: "ai_ornament",
        outcomes: [
          "Text-to-3D / Image-to-3D Generative AI 도구를 이용한 3D 메쉬 생성 프로세스 이해",
          "AI가 생성한 3D 메쉬의 3D 프린팅용 수리(Mesh Repair & Topology Cleanup)",
          "Non-Manifold(비매니폴드 점/선) 자동 감지 및 3D Print Toolbox 애드온 활용",
          "G-code 변환 슬라이서(Cura, PrusaSlicer) 연동 및 실제 출력 최적화 설정 완료"
        ],
        steps: [
          {
            step: 1,
            title: "Generative AI 도구로 3D 기본 모델 프롬프트 생성",
            desc: "프롬프트 입력(예: 'Intricate Geometric Lotus Sculpture') 후 GLB/OBJ 파일 다운로드"
          },
          {
            step: 2,
            title: "블렌더 임포트 및 3D Print Toolbox 에러 검사",
            desc: "Import > GLB 후 'Check All'을 눌러 Non-manifold Edge, Bad Contig. Edges, Intersect Face 검출"
          },
          {
            step: 3,
            title: "Remesh & Solidify로 두께 및 와이어 프레임 강화",
            desc: "AI 메쉬의 벽 두께가 너무 얇은 구역에 Solidify를 주어 3D 프린터 출력 도중 파손 방지"
          },
          {
            step: 4,
            title: "STL 내보내기 & 슬라이싱 세팅 점검",
            desc: "File > Export > Stl (.stl) 선택, Selection Only 및 Apply Modifiers 체크 후 슬라이서로 전송"
          }
        ],
        hotkeys: [
          { key: "Shift + Ctrl + Alt + M", desc: "Non-Manifold(구멍 난 메쉬) 전체 선택" },
          { key: "Alt + F", desc: "뚫린 구멍 메우기 (Fill Hole)" },
          { key: "M", desc: "중복된 점 합치기 (Merge Vertices)" },
          { key: "N Key Panel", desc: "N키로 3D Print Toolbox 탭 열기" },
          { key: "F3", desc: "전체 기능 및 애드온 퀵 검색창" }
        ],
        printTips: [
          "AI 모델은 미세한 얇은 섬유 구조가 포함될 수 있습니다. 3D 프린터 노즐 두께(0.4mm) 이상의 최소 벽두께(1.0mm)를 유지하세요.",
          "출력 전 슬라이서 레이어 뷰(Layer View)에서 허공에 출력되는 공중 레이어가 없는지 층별 축소 검사를 시행합니다.",
          "라이트 레진(SLA) 프린팅 시에는 수축을 고려한 배수 구멍(Drain Hole)을 제작해 주세요."
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
