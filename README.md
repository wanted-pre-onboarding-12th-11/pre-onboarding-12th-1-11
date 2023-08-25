# 원티드 프리온보딩 프론트엔드 12차 1주차 과제 - 11팀

## 과제 소개
- 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 [프론트엔드 인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 Best Pratice를 만들고 제출해주세요
> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다. 
과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요.

## 팀원 소개

> 이름을 클릭하면 개인 레포지토리로 이동합니다.

|  [팀장] [장택진](https://github.com/TaekJinJang)     |  [김영채](https://github.com/0chae01)    |   [박상준](https://github.com/owen970517)            |  [오아름](https://github.com/Aroma-oh)             |[이새미](https://github.com/saemileee)| [홍혜수](https://github.com/hyesuhong)|
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/TaekJinJang" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/0chae01" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/owen970517" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/Aroma-oh" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/saemileee" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/hyesuhong" width="150" height="150"> |



## 목표 설정
- 사전 선발 과제에 대한 Best Practice 도출
- Best Practice 도출을 위한 토론 및 소통 경험
- 확장성 고려
- UX 고려
- 클린코드 (유지보수성 고려)

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
## Best Practice라고 생각한 이유 기술
### 프론트엔드 아키텍쳐
### 주요 기능
  #### `Auth`
  
  - 회원가입과 로그인 기능을 제공합니다.
  - 이메일과 비밀번호를 입력 받으며, 입력사항은 유효성 검사를 통과해야 합니다.
  - 회원가입에 성공하면 로그인 페이###지로 이동합니다.
  - 로그인에 성공하면 사용자는 토큰을 부여받고 Todo 페이지로 이동합니다.
  
  #### `Todo`
  
  - Todo CRUD 기능을 제공합니다.
  - 동시에 여러 Todo의 수정은 불가능합니다.
  - 체크박스를 통해 Todo 완료 여부를 확인, 수정할 수 있습니다.
  - 유효하지 않은 토큰을 가진 사용자가 접속시에는 토큰 삭제 및 로그인 페이지로 이동합니다.

### 디렉토리 구조
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

### 컨벤션
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
   

### Best Practice를 위해 고민한 내용들 (토론한 내용 결과, 근거)
- 노션의 내용을 간략하게 정리해서 리드미에 올리기
- 노션 링크 첨부 (노션 정리) (혜수)

### 기술스택 


아래는 기존 리드미 내용입니다. 
-----
# 작업 규칙
- master에 직접 올리지 마세요 !
- Force-commit 이나 hard 옵션 등을 사용하지 마세요 !
- 질문 및 건의사항은 디스코드을 적극 사용해주세요 ! 👍
- 작업 branch는 feature/[이름약자]-[작업내용] 형태로 올려주세요.
  - ex) feature/[TJ]-ProfilePage
- 스타일 파일 컨벤션
    - `파스칼케이스.styled.ts`
    - import * as S from "../styles/Todo.styled";
  
- ### 커밋 메시지 컨벤션
  - 예시: `feat: 로그인 기능 구현`

|커밋 유형|의미|
|:---:|:---:|
|init| 프로젝트 시작|
|feat| 기능 추가|
|style| 코드 포맷팅|
|refactor| 코드 리팩토링|
|chore| 패키지 매니저 및 그 외 기타 수정 ex) .gitignore|
|rename| 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
|remove|파일을 삭제하는 작업만 수행한 경우|
|setting|기본 세팅 변경의 경우|
|design|UI 디자인|

- **디렉토리명**
    - 폴더명 - 소문자, 복수 , 컴포넌트 관련 폴더는 메인 컴포넌트 명
    - 일반 파일명,변수,함수 **camel case**
    - 컴포넌트 관련(스타일 포함) **pascal case**
- 비동기함수
    - async/await 사용
- constants
    - routes
    - message
    - apiKey
      
## 디렉토리 구조

- `Page` 
 - 라우팅의 단위가 될 컴포넌트이다.
 - 단순 래핑의 역할과 SEO를 위한 메타태그 설정의 역할만 한다.

- `Container`
    
  - 데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
  - UI 컴포넌트를 컨트롤하는 역할이다.
    
- `Component`
    
  - 순수하게 UI 로직만 가지고 있다.
  - UI 관련 상태, 이벤트 핸들링만을 처리한다. 이 외는 모두 컨테이너로부터 주입 받아야 한다.
  - 반드시 독립적으로 설계되어 재사용 가능해야 한다.
  
