# pre-onboarding-12th-1-11
## 프로젝트에 대한 정보
## 시작 가이드
* 필요사항
  ```
  Node.js
  Npm
  ```
* 프로젝트 실행 방법
  ```
  $ npm install
  $ npm start
  ```

## 화면 구성
## Best Parctice라고 생각한 이유 기술
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

#### `코드 컨벤션`
  #### 함수 관련 규칙 
  
  - Arrow function을 사용합니다.
  - 매개변수가 두개 이상일때 소괄호를 사용합니다.
  
  #### API 규칙
  
  - API 통신 핸들러 이름은 [제공되는  스펙](https://github.com/walking-sunset/selection-task#1-auth)을 따릅니다.
  - 핸들러 함수 이름 지정은 `handle+함수명` 으로 통일합니다.
      - 예시: handleModify
  
  #### 디렉토리 및 파일 규칙
  
  - 컴포넌트 관련 폴더는 메인 컴포넌트명으로 pascal case를 적용합니다. 이외에는 모두 소문자에 복수형을 적용합니다.
  - 컴포넌트 파일은 pascal case를 적용합니다. 이외는 모두 camel case로 통일합니다.
  - 스타일 컴포넌트 파일은 파일명 뒤에 .styled를 명시합니다.
      - 예시: Auth.styled.ts
  
  #### 함수명, 변수명 규칙
  
  - 컴포넌트는 Todo, 함수는 todo로 통일합니다. ToDo, TODO 등은 사용하지 않습니다.
  - 컴포넌트가 아닌 일반 함수 및 변수명은 camel case를 적용합니다.
  
  #### import 규칙
  
  - 아래의 예시와 같이 와일드카드로 불러온 모듈은 별칭을 지정합니다.
      
      import * as S from "../styles/Todo.styled";
      
      import * as TodoType from “../types/Todo”; → TodoType.Item[]
      
  
  #### 스타일링 규칙
  
  - styled-components 라이브러리를 이용합니다.
  - 스타일 폴더에서 모든 스타일링 코드를 관리합니다.
  - 컬러는 global.css에서 변수 설정 후 사용합니다.

#### `브랜치 컨벤션`
  - master 브랜치를 직접 작업하지 않습니다.
  - 브랜치는 feature/이름약자-[작업내용] 형태로 생성합니다.

    `feature/TJ-ProfilePage`

#### `formatting, lint 컨벤션`
  - 팀원간의 코드 스타일과 문법 컨벤션을 맞추기 위해 Prettier, ESLint를 사용했습니다.
- 휴먼 오류로 인한 컨벤션 불일치 가능성을 줄이기 위해 Prettier, ESLint 실행 코드는 스크립트화하여 husky에서 트리거에 따라 자동실행되도록 하였습니다.
    
    ```
    // .prettierrc.json
    
    module.exports = {
        singleQuote: true,
        endOfLine: 'lf',
        trailingComma: 'es5',
        bracketSpacing: false,
        jsxSingleQuote: true,
        tabWidth: 4,
        printWidth: 100,
        proseWrap: 'always',
        arrowParens: 'avoid',
    };
    ```
    
    ```
    // .eslintrc
    
    {
        "env": {
            "browser": true,
            "node": true
        },
        "extends": [
            "react-app",
            "prettier",
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended"
        ],
        "rules": {
            "no-var": "error", 
            "no-multiple-empty-lines": "error", 
            "no-console": ["error", {"allow": ["warn", "error", "info"]}], 
            "eqeqeq": "error", 
            "dot-notation": "error", 
            "no-unused-vars": "error" 
        }
    }
    ```
    
    ```
    // package.json
    { 
    	"scripts": {
            ...,
            "postinstall": "husky install",
            "format": "prettier --cache --write .",
            "lint": "eslint --cache ."
        },
    	...이외 생략
    }
    ```
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
  
