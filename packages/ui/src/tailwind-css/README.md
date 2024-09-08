# TailwindCSS

스타일 작성을 쉽게 할 수 있도록 도와주는 유틸리티 기반 CSS 프레임워크입니다.

## 사용 방법

### 설정

1. 라이브러리 설치 / 설정파일 생성

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

### 사용

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

## 장단점

### 장점

- CSS 문법을 몰라도 사용 가능합니다.
- CSS 문법을 잘 알고있다면 원하는 옵션을 [공식문서](https://tailwindcss.com/)에 검색해서 쉽게 찾을 수 있습니다.

### 단점

- 스타일을 지정하기 위한 클래스를 알고있어야합니다.
- 요소에 직접 지정하는 방법을 사용 시 코드가 매우 지저분해집니다.
- tailwind에서 정해둔 css 적용 시 동적으로 사용할 수 없습니다.

  ```jsx
  const color = "#ff0000";
  return <button className={`bg-[${color}]`}>버튼</button>; // 적용되지 않음!!
  ```
