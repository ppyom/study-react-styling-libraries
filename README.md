# Study React Styling Libraries

> **프로그래머스 데브코스(클라우드 기반 프론트엔드 엔지니어링 1기)** 학습에서 2차 프로젝트 2팀의 2차 RBF 진행을 위한 저장소입니다.

- React에서 사용할 수 있는 스타일링 라이브러리/프레임워크를 사용하는 방법과 제가 실제로 사용했을 때 느낀 장단점을 정리하기 위해 작성합니다.

## NativeCSS

라이브러리나 프레임워크를 사용하지 않는 기본 CSS 입니다.

### 사용 방법

```css
selector {
  /* 스타일 작성 */
}
```

1. CSS 파일에서 스타일을 적용할 요소를 선택자(id, class, tag name 등등)를 사용해 선택합니다.
2. 선택된 요소의 스타일을 작성합니다.

### 장단점

#### 장점

- 기본 CSS 문법을 안다면 쉽게 사용할 수 있습니다.

#### 단점

- 같은 이름으로 클래스를 만들경우 무조건 상위 셀렉터가 필요합니다.

  같은 이름으로 만드는 경우(ex. on, active 등등)에 해당 요소가 어떤 요소인지 정확하게 알 수 있어야 합니다.

## ModuleCSS

CSS를 모듈단위로 사용하는 "방식"입니다.

<details>

<summary>GPT님의 답변</summary>

CSS Module은 **CSS를 모듈화하여 사용하는 방식** 또는 **기능적 개념**에 가깝습니다. 이를 통해 CSS의 전역 범위 문제를 해결하고, 컴포넌트 단위로 스타일을 안전하게 관리할 수 있도록 해줍니다.

정확히 말하면, CSS Module은 **기능적인 사양**(specification)에 가까운 용어입니다. JavaScript 모듈 시스템처럼, CSS를 로컬 범위로 한정해서 사용하고, 모듈처럼 파일 단위로 CSS를 관리하는 방식입니다.

정리하자면, CSS Module은 다음과 같이 설명할 수 있습니다:

**모듈화된 CSS 사양**: CSS를 각 컴포넌트에 로컬로 한정하여 관리하는 방식.

**기능적 개념**: 프레임워크나 라이브러리가 아닌, 스타일 충돌을 방지하기 위한 기술적 사양이자 개념.

**빌드 도구 통합 기능**: Vite, Webpack 등의 빌드 도구가 CSS Module의 개념을 적용해 CSS 파일을 처리하도록 지원.

따라서 CSS Module은 기술적으로 **기능적 개념** 또는 **사양**으로 정의하는 것이 가장 적절합니다.

</details>

### 사용 방법

```css
selector {
  /* 스타일 작성 */
}
```

1. [컴포넌트명].module.css 파일을 생성합니다.
2. 사용할 클래스를 입력 후 스타일을 적용할 요소에 지정합니다.
3. 스타일을 작성합니다.

### 장단점

#### 장점

- 기본 CSS 문법을 안다면 쉽게 사용할 수 있습니다.
- 같은 이름의 클래스를 만들어도 그냥 사용 가능합니다.

#### 단점

- 다른 CSS 파일에서 선택할 수 없습니다.

## TailwindCSS

스타일 작성을 쉽게 할 수 있도록 도와주는 유틸리티 기반 CSS 프레임워크입니다.

### 사용 방법

#### 설정

1. 아래 명령어를 사용해 설치하고 설정파일을 생성합니다.

   ```shell
   npm install -D postcss autoprefixer tailwindcss
   npx tailwindcss init
   ```

2. 설정파일을 작성합니다.

   - postcss.config.js

     ```js
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     };
     ```

   - tailwind.config.js

     ```js
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: ["./src/**/*.{html,js}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

3. 최상위 CSS에 아래 코드를 추가합니다.

   ```css
   @tailwind base; /* Reset CSS + 기본 변수 */
   @tailwind components;
   @tailwind utilities; /* Inline Style(class로 사용) */
   ```

- `@tailwind components`의 경우는 검색해도 찾지 못했습니다. 공식 문서 Docs를 읽어보니 컴포넌트와 관련된 스타일을 미리 지정해둔 것 같습니다.

#### 사용

1. 요소에 직접 지정합니다.

   ```jsx
   <button className="bg-primary hover:bg-primary/70">버튼입니다.</button>
   ```

2. 별도의 css파일을 생성하여 사용합니다.

   ```css
   .button {
     @apply bg-primary hover:bg-primary/70;
   }
   ```

### 장단점

#### 장점

- CSS 문법을 몰라도 사용 가능합니다.
- CSS 문법을 잘 알고있다면 원하는 옵션을 [공식문서](https://tailwindcss.com/)에 검색해서 쉽게 찾을 수 있습니다.

#### 단점

- 스타일을 지정하기 위한 클래스를 알고있어야합니다.
- 요소에 직접 지정하는 방법을 사용 시 코드가 매우 지저분해집니다.
- tailwind에서 정해둔 css 적용 시 동적으로 사용할 수 없습니다.

  ```jsx
  const color = "#ff0000";
  return <button className={`bg-[${color}]`}>버튼</button>; // 적용되지 않음!!
  ```

## Bootstrap

이미 만들어진 스타일을 쉽게 사용할 수 있는 프레임워크입니다.

### 사용 방법

#### 설정

1. 아래 명령어를 사용해 설치합니다.

   ```shell
   npm install bootstrap react-bootstrap
   ```

2. 리액트 진입 파일(main.jsx, index.jsx)에 bootstrap css를 import 해줍니다.

   ```jsx
   import "bootstrap/dist/css/bootstrap.min.css";
   ```

#### 사용

1. Component 형태로 사용합니다.

   ```jsx
   <Button variant="primary">버튼입니다</Button>
   ```

2. className 형태로 사용합니다.

   ```jsx
   <button className="text-white bg-primary border-0">버튼입니다</button>
   ```

### 장단점

#### 장점

- CSS 문법을 몰라도 사용 가능합니다.
- 컴포넌트 형태로 이미 만들어져있어 빠르게 UI를 만들 수 있습니다.

#### 단점

- 커스터마이징이 불편합니다.
  - reset.css(reboot.css)를 없애기 위해 scss를 사용해야합니다.
  - 테마 색상 변경을 위해 scss를 사용해야합니다.

<!--

## 내용 1

### 상세 1

### 상세 2

## 내용 정리

## 결론

1. 결론 1

   - 내용

2. 결론 2

   - 내용

-->

## 참고한 글

<!-- 링크 형식으로 작성!! [작성자, 제목, 사이트이름 - 참고한 내용](링크) -->

- [SeongKuk Han, React Monorepo Setup Tutorial with pnpm and Vite: React project + UI, Utils, DEV Community](https://dev.to/lico/react-monorepo-setup-tutorial-with-pnpm-and-vite-react-project-ui-utils-5705)
- [taker, packge.json의 workspaces, velog](https://velog.io/@kksh1205/packge.json%EC%9D%98-workspaces)
