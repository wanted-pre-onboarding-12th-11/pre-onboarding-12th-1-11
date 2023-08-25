# 원티드 프리온보딩 프론트엔드 12차 1주차 과제 - 11팀

## 과제 소개
- 동료학습을 통해서 팀에서 생각한 [원티드 프리온보딩 프론트엔드 인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 Best Practice를 만들고 제출해주세요
> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다. 
과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요.

## 팀원 소개

> 이름을 클릭하면 개인 레포지토리로 이동합니다.

|  [팀장] [장택진](https://github.com/TaekJinJang)     |  [김영채](https://github.com/0chae01)    |   [박상준](https://github.com/owen970517)            |  [오아름](https://github.com/Aroma-oh)             |[이새미](https://github.com/saemileee)| [홍혜수](https://github.com/hyesuhong)|
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/TaekJinJang" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/0chae01" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/owen970517" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/Aroma-oh" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/saemileee" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/hyesuhong" width="130" height="130"> |

## 목표 설정

#### 💡 Best Practice 도출을 위한 토론 및 소통 경험
- 프로젝트 확장성 고려
  - ContextAPI로 depth가 깊어질 경우 props drilling 방지
  - 커스텀 훅으로 재사용 가능성이 있는 함수 관리
- UX 고려
  - 인풋 focus
  - 로딩, 에러처리
- 클린코드 (유지보수성 고려)
  - 관심사 분리로 유지보수성 향상
- 성능 최적화
  - 메모이제이션 훅 사용으로 렌더링 최적화

## 개발 기간
2023.08.23-2023.08.24

## 시작 가이드
* 배포 주소
🔗 https://pre-onboarding-12th-1-11.vercel.app/

* 프로젝트 실행 방법
  ```
  $ npm install
  $ npm start
  ```

## 화면 구성



## ✨ Best Practice 도출

### 1. Best Practice를 위해 고민한 내용들 (토론한 내용 결과, 근거)
- 노션의 내용을 간략하게 정리해서 리드미에 올리기
- 노션 링크 첨부 (노션 정리) (혜수)

### 2. 프론트엔드 아키텍쳐

![image](https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-1-11/assets/124250465/339abd84-4b28-4588-af31-4deb7dc7b37e)

### 3. 주요 기능

  #### `Auth`
  
 > - 회원가입과 로그인 기능을 제공합니다.
 > - 이메일과 비밀번호를 입력 받으며, 입력사항은 유효성 검사를 통과해야 합니다.
 > - 회원가입에 성공하면 로그인 페이지로 이동합니다.
 > - 로그인에 성공하면 사용자는 토큰을 부여받고 Todo 페이지로 이동합니다.
  
  #### `Todo`
  
 > - Todo CRUD 기능을 제공합니다.
 > - 동시에 여러 Todo의 수정은 불가능합니다.
 > - 체크박스를 통해 Todo 완료 여부를 확인, 수정할 수 있습니다.
 > - 유효하지 않은 토큰을 가진 사용자가 접속시에는 토큰 삭제 및 로그인 페이지로 이동합니다.

### 4. 디렉토리 구조
  ```
  📦 src
  ├── 📂 apis
  ├── 📂 components
  │   ├── 📂 Auth
  │   ├── 📂 SEO
  │   ├── 📂 Todo
  │   └── 📂 common
  ├── 📂 constants
  ├── 📂 containers
  ├── 📂 contexts
  ├── 📂 hooks
  ├── 📂 pages
  ├── 📂 styles
  ├── 📂 types
  └── 📂 utils
  ```

### 5. 컨벤션

  #### `커밋 컨벤션`
  | 커밋 유형 | 의미 |
  | --- | --- |
  | init | 프로젝트 시작 |
  | feat | 기능 추가 |
  | style | 코드 포맷팅 |
  | refactor | 코드 리팩토링 |
  | chore | 패키지 매니저 및 그 외 기타 수정 ex) .gitignore |
  | rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
  | remove | 파일을 삭제하는 작업만 수행한 경우 |
  | setting | 기본 세팅 변경의 경우 |
  | docs | README.md 수정 등 |
  | design | UI 디자인 |
  | merge | 머지, 충돌해결 등  |

  #### `브랜치 컨벤션`
  - master 브랜치를 직접 작업하지 않습니다.
  - 브랜치는 feature/이름약자-[작업내용] 형태로 생성합니다.

    `feature/TJ-ProfilePage`
    
  #### `코드 컨벤션`,`formatting, lint 컨벤션`
  - Notion 링크 참고
   


## 기술스택 

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="[https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)">

### Library

<img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white(https://img.shields.io/badge/React%20Router%20Dom-3178C6?style=for-the-badge&logo=&logoColor=white)">
<img src="https://img.shields.io/badge/React Helmet Async-009943?style=for-the-badge&logo=&logoColor=white(https://img.shields.io/badge/React%20Helmet%20Async-009943?style=for-the-badge&logo=&logoColor=white)">

### Convention

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Environment

<img src="[https://img.shields.io/badge/visual Studio cord-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white](https://img.shields.io/badge/visual%20Studio%20cord-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

