# 🌿 리버힐스파웰니스센터 채용 홈페이지

리버힐스파웰니스센터의 공식 채용 홈페이지입니다. 실제 직원 인터뷰가 포함되어 있으며, 모바일 반응형 디자인으로 제작되었습니다.

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [파일 구조](#파일-구조)
- [로컬에서 실행하기](#로컬에서-실행하기)
- [GitHub Pages 배포 방법](#github-pages-배포-방법)
- [이미지 추가 방법](#이미지-추가-방법)
- [기술 스택](#기술-스택)
- [문의](#문의)

---

## 프로젝트 소개

리버힐스파웰니스센터는 서울 용산구 UN빌리지에 위치한 프리미엄 스파 웰니스 센터입니다. 이 웹사이트는 함께 성장할 테라피스트를 찾기 위한 채용 홈페이지입니다.

### 회사 정보
- **회사명**: 주식회사 알브이에이치(RVH) / 리버힐스파웰니스센터
- **위치**: 서울시 용산구 UN빌리지 3길 183
- **전화**: 02-2088-0711
- **이메일**: contact@riverhillspa.com
- **홈페이지**: [riverhillspa.com](https://riverhillspa.com)

---

## 주요 기능

### ✨ 핵심 기능

1. **실제 직원 인터뷰**
   - 로아 테라피스트 인터뷰
   - 로이 센터장 인터뷰
   - 교육 문화 소개
   - 모달 팝업으로 전체 인터뷰 보기

2. **채용 정보**
   - 현재 모집 중인 포지션
   - 상세한 직무 설명
   - 급여 및 복리후생 정보
   - 커리어 성장 경로

3. **인터랙티브 기능**
   - FAQ 아코디언
   - 부드러운 스크롤 애니메이션
   - 모바일 햄버거 메뉴
   - 모달 팝업
   - 맨 위로 가기 버튼

4. **반응형 디자인**
   - 모바일 (480px 이하)
   - 태블릿 (768px 이하)
   - 데스크톱 (768px 이상)

### 🎨 디자인

- **컬러 테마**: 세이지 그린 (#7A9A7E)
- **스타일**: 미니멀하고 깔끔한 한국적 감성
- **폰트**: Noto Sans KR

---

## 파일 구조

```
riverhillspa-careers/
├── index.html              # 메인 홈페이지
├── jobs.html               # 채용 공고 상세 페이지
├── README.md               # 프로젝트 문서
├── css/
│   └── style.css          # 전체 스타일시트
├── js/
│   └── main.js            # JavaScript 기능
└── images/                # 이미지 폴더 (추가 필요)
    ├── hero.jpg
    ├── therapist.jpg
    ├── team.jpg
    ├── training.jpg
    ├── career-path.jpg
    ├── interview1.jpg
    ├── interview2.jpg
    └── benefits.jpg
```

---

## 로컬에서 실행하기

### 방법 1: 브라우저에서 직접 열기 (가장 쉬움)

1. 다운로드한 폴더를 엽니다
2. `index.html` 파일을 더블클릭합니다
3. 웹 브라우저에서 열립니다

### 방법 2: VS Code Live Server 사용

1. VS Code를 설치합니다
2. Live Server 확장 프로그램을 설치합니다
3. `index.html`을 우클릭 → "Open with Live Server"

### 방법 3: Python 간단한 서버

```bash
# Python 3가 설치되어 있다면
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

---

## GitHub Pages 배포 방법

GitHub Pages를 사용하면 **완전 무료**로 웹사이트를 온라인에 배포할 수 있습니다!

### 1단계: GitHub 계정 만들기 (5분)

1. https://github.com 접속
2. 오른쪽 위 **"Sign up"** 클릭
3. 이메일, 비밀번호 입력하고 계정 만들기
4. 이메일 인증하기

### 2단계: 저장소(Repository) 만들기 (3분)

1. 로그인 후 오른쪽 위 **"+"** 버튼 클릭
2. **"New repository"** 클릭
3. 정보 입력:
   - **Repository name**: `riverhillspa-careers` (영어로 입력)
   - **Public** 선택 (무료 배포 가능)
   - **"Add a README file"** 체크 안 함
4. 아래 **"Create repository"** 버튼 클릭

### 3단계: 파일 업로드하기 (10분)

#### 방법 A: 웹에서 직접 (가장 쉬움) ⭐ 추천

1. 만들어진 저장소 페이지에서 **"uploading an existing file"** 클릭
2. 다운로드한 파일들을 **드래그 앤 드롭**:
   - index.html
   - jobs.html
   - README.md
   - css 폴더 (폴더 통째로)
   - js 폴더 (폴더 통째로)
3. 아래로 스크롤해서 **"Commit changes"** 버튼 클릭

#### 방법 B: GitHub Desktop 사용 (더 편함)

1. https://desktop.github.com 접속 → 다운로드 및 설치
2. GitHub 계정으로 로그인
3. **"Clone a repository"** → 방금 만든 저장소 선택
4. 컴퓨터에 저장될 위치 선택
5. 다운로드한 파일들을 해당 폴더에 복사
6. GitHub Desktop에서 **"Commit to main"** → **"Push origin"** 클릭

### 4단계: GitHub Pages 활성화 (2분)

1. GitHub 저장소 페이지에서 **"Settings"** 탭 클릭
2. 왼쪽 메뉴에서 **"Pages"** 클릭
3. **"Branch"** 아래:
   - **"None"**을 **"main"**으로 변경
   - 폴더는 **"/ (root)"** 선택
4. **"Save"** 버튼 클릭
5. 잠시 기다리면 (1-2분) 완료!

### 5단계: 웹사이트 확인 🎉

배포 완료 후 주소:
```
https://본인아이디.github.io/riverhillspa-careers/
```

예시:
- GitHub 아이디가 `soyihr`이면
- 주소: `https://soyihr.github.io/riverhillspa-careers/`

이 주소로 접속하면 채용 홈페이지가 보입니다!

### 6단계: 커스텀 도메인 연결 (선택사항)

기존 도메인(riverhillspa.com)에 연결하려면:

1. GitHub Pages 설정에서 **"Custom domain"**에 `careers.riverhillspa.com` 입력
2. 도메인 DNS 설정에서 CNAME 레코드 추가:
   ```
   Type: CNAME
   Name: careers
   Value: 본인아이디.github.io
   ```
3. DNS 변경사항 반영까지 몇 시간 소요될 수 있습니다

---

## 이미지 추가 방법

현재 이미지는 placeholder(자리 표시)로 되어 있습니다. 실제 이미지로 교체하려면:

### 필요한 이미지 목록 (8개)

| 파일명 | 설명 | 권장 크기 |
|--------|------|----------|
| `hero.jpg` | 메인 배너 - 프리미엄 스파 분위기 | 1920x1080 (16:9) |
| `therapist.jpg` | 테라피스트 시술 장면 | 1200x900 (4:3) |
| `team.jpg` | 팀 문화 - 동료들과 협력 | 1920x1080 (16:9) |
| `training.jpg` | 교육 장면 - 멘토링 | 1200x900 (4:3) |
| `career-path.jpg` | 커리어 성장 인포그래픽 | 1920x1080 (16:9) |
| `interview1.jpg` | 로아 테라피스트 포트레이트 | 900x1200 (3:4 세로) |
| `interview2.jpg` | 로이 센터장 포트레이트 | 900x1200 (3:4 세로) |
| `benefits.jpg` | 복리후생 개념 이미지 | 1920x1080 (16:9) |

### 이미지 추가 단계

#### 1. images 폴더 만들기

**GitHub 웹에서:**
1. 저장소 페이지에서 **"Add file"** → **"Create new file"** 클릭
2. 파일 이름에 `images/placeholder.txt` 입력
3. 내용에 "Images folder" 입력
4. **"Commit new file"** 클릭

#### 2. 이미지 업로드

**GitHub 웹에서:**
1. `images` 폴더로 이동
2. **"Add file"** → **"Upload files"** 클릭
3. 위 8개 이미지 파일을 드래그 앤 드롭
4. **"Commit changes"** 클릭

#### 3. HTML 코드 수정

**index.html에서:**

```html
<!-- 기존 (placeholder) -->
<div class="image-placeholder">
    <p>📍 메인 히어로 배너 이미지</p>
</div>

<!-- 변경 후 (실제 이미지) -->
<img src="images/hero.jpg" alt="리버힐스파 메인" style="width: 100%; border-radius: 12px;">
```

**interview 섹션에서:**

```html
<!-- 기존 -->
<div class="interview-image">
    <div class="image-placeholder">
        <p>👩 로아 테라피스트</p>
    </div>
</div>

<!-- 변경 후 -->
<div class="interview-image">
    <img src="images/interview1.jpg" alt="로아 테라피스트" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

#### 4. 변경사항 커밋

- GitHub Desktop 사용 시: Commit → Push
- 웹에서 수정 시: 각 파일 수정 후 Commit

#### 5. 확인

1-2분 후 `https://본인아이디.github.io/riverhillspa-careers/` 접속해서 확인

---

## 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)**: Vanilla JS (프레임워크 없음)

### 라이브러리
- **Google Fonts**: Noto Sans KR

### 호스팅
- **GitHub Pages**: 무료 정적 사이트 호스팅

---

## 페이지 구성

### index.html (메인 페이지)

1. **Hero Section** - 채용 메인 메시지
2. **회사 소개** - 리버힐스파 소개 및 핵심 가치
3. **구성원 인터뷰** - 로아, 로이, 교육 문화 (모달 포함)
4. **채용 공고** - 현재 모집 중인 포지션
5. **복리후생** - 급여, 교육, 직원 혜택
6. **FAQ** - 자주 묻는 질문 (아코디언)
7. **지원하기** - 연락처 및 CTA
8. **Footer** - 회사 정보

### jobs.html (채용 공고 상세)

1. **Job Hero** - 포지션 정보
2. **주요 업무** - 업무 내용 상세
3. **지원 자격** - 필수 요건 및 우대 사항
4. **급여 및 근무 조건** - 상세 정보
5. **복리후생** - 카테고리별 상세 정보
6. **커리어 성장 경로** - 4단계 성장 경로
7. **지원 방법** - 제출 서류 및 방법
8. **전형 절차** - 4단계 채용 프로세스
9. **FAQ** - 자주 묻는 질문
10. **CTA** - 지원하기 버튼

---

## 커스터마이징

### 색상 변경

`css/style.css` 파일의 `:root` 섹션에서 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #7A9A7E;      /* 메인 색상 */
    --primary-dark: #5D7961;       /* 어두운 색상 */
    --primary-light: #A4C3A7;      /* 밝은 색상 */
    --secondary-color: #C4A57B;    /* 보조 색상 */
    /* ... */
}
```

### 폰트 변경

`index.html`과 `jobs.html`의 `<head>` 섹션에서 Google Fonts 링크를 변경합니다:

```html
<link href="https://fonts.googleapis.com/css2?family=원하는폰트&display=swap" rel="stylesheet">
```

그리고 `css/style.css`에서:

```css
body {
    font-family: '원하는폰트', sans-serif;
}
```

---

## 브라우저 호환성

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ✅ 모바일 브라우저 (iOS Safari, Chrome Mobile)

---

## 문의

### 채용 문의
- **이메일**: contact@riverhillspa.com
- **전화**: 02-2088-0711
- **주소**: 서울시 용산구 UN빌리지 3길 183

### 기술 문의
- GitHub Issues를 통해 문의해주세요
- 또는 위 이메일로 연락주세요

---

## 라이선스

© 2025 River Hill Spa Wellness Center. All Rights Reserved.

이 프로젝트는 리버힐스파웰니스센터의 공식 채용 홈페이지입니다.

---

## 체크리스트

배포 전 확인 사항:

- [ ] 이미지를 실제 사진으로 교체했나요?
- [ ] 연락처 정보가 정확한가요? (이메일, 전화번호, 주소)
- [ ] 급여 정보가 최신인가요?
- [ ] 모든 링크가 작동하나요?
- [ ] 모바일에서 테스트했나요?
- [ ] FAQ 내용이 최신인가요?
- [ ] GitHub Pages 배포가 완료되었나요?

---

## 업데이트 히스토리

### v1.0.0 (2025-01-14)
- 초기 버전 배포
- 실제 직원 인터뷰 포함 (로아, 로이)
- 모달 팝업 기능 구현
- 반응형 디자인 적용
- FAQ 아코디언 구현
- GitHub Pages 배포 준비 완료

---

**함께 성장할 테라피스트를 찾습니다!** 🌿
