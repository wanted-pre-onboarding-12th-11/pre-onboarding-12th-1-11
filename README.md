# pre-onboarding-12th-1-11

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
  
