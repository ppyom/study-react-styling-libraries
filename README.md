# Study React Styling Libraries

> **프로그래머스 데브코스(클라우드 기반 프론트엔드 엔지니어링 1기)** 학습에서 2차 프로젝트 2팀의 2차 RBF 진행을 위한 저장소입니다.

- React에서 사용할 수 있는 스타일링 라이브러리/프레임워크를 사용하는 방법과 제가 실제로 사용했을 때 느낀 장단점을 정리하기 위해 작성합니다.
- 스타일링 방법에 대한 내용은 주관적인 의견이 많이 들어갔습니다.

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

## Styled Components

CSS를 JS 내부에서 사용할 수 있고, 이를 모듈 형태로 만들어주는 라이브러리입니다.

### 사용 방법

1. 아래 명령어를 입력해 설치합니다.

   ```shell
    npm install styled-components
   ```

2. 스타일을 작성합니다.

   ```js
   const Button = styled.button`
     /* 스타일 작성 */
   `;
   ```

3. 스타일을 적용할 컴포넌트에 적용합니다.

   ```js
   <Button>버튼입니다</Button>
   ```

### 장단점

#### 장점

- JavaScript 코드에서 사용하기 때문에 유연한 스타일링이 가능합니다.

#### 단점

- 컴포넌트가 복잡한 구조로 만들어졌을 때 처리가 힘들어보입니다.

## Emotion

CSS를 JS 내부에서 사용할 수 있고, 이를 컴포넌트 형태로 사용할 수 있게 만들어주는 라이브러리입니다.

### 사용 방법

#### 설정

1. 아래 명령어를 입력해 설치합니다.

   ```shell
   npm install @emotion/react
   ```

2. vite.config.js 파일에 아래 내용을 추가합니다.

   ```js
   export default defineConfig({
     // ...
     plugins: [
       react({
         jsxImportSource: "@emotion/react",
       }),
     ],
     // ...
   });
   ```

#### 사용

1. css text로 지정합니다.

   ```jsx
   const style = css`
     border: 0;
     outline: 0;
     background-color: #eee;
     &:hover {
       background-color: #aaa;
     }
   `;
   // ...
   <button css={style}>버튼입니다</button>;
   ```

2. css object로 지정합니다.

   ```jsx
   const style = {
     backgroundColor: "#eee",
     "&:hover": "#aaa",
   };
   // ...
   <button css={style}>버튼입니다</button>;
   ```

### 장단점

#### 장점

- JavaScript 코드에서 사용하기 때문에 유연한 스타일링이 가능합니다.
- styled-components에 비해 가벼울 것이라 생각이 듭니다.
  - styled-components는 스타일을 컴포넌트를 만들어 해당 컴포넌트의 스타일이 className으로 변환되는 방식이었다면 emotion은 스타일로 작성한 부분이 className으로 변환되는 방식이라 조금 더 가벼워보입니다.

#### 단점

- 컴포넌트가 복잡한 구조로 만들어졌을 때 처리가 힘들어보입니다.

## 내용 정리

> 대부분의 내용은 제 주관적인 의견이 많이 반영되어있으며 성능 관련된 부분은 다른 사이트를 참고했습니다.

### Native CSS vs Module CSS

저는 React 기준에서는 **Module CSS**를 사용하는 것이 좋다고 생각합니다.

제가 생각하기에 컴포넌트를 만들 때 가장 중요한 것은 캡슐화라고 생각합니다.
다른 컴포넌트에서 해당 컴포넌트 안에 어떤 로직이 있는지, 스타일일을 어떻게 적용했는지를 몰라야한다고 생각합니다.

그래서 저는 공통적으로 많은 부분에 들어가야하는 스타일은 `index.css`에 작성하거나 별도의 컴포넌트로 분리하고, 컴포넌트 각자의 스타일은 `[컴포넌트이름].module.css`에 작성합니다.

또한 상위 컴포넌트에서 하위 컴포넌트의 스타일을 적용해야한다면 상위 컴포넌트에서 지정한 스타일을 `className` 속성으로 넘겨받아 처리가 가능하기 때문에 저는 React에서 **Native CSS**보다 **Module CSS**를 사용하는 것이 좋다고 생각합니다.

### TailwindCSS vs Bootstrap

저는 두 방법이 전혀 다른 방법이라고 생각합니다.

물론 **Bootstrap**도 **TailwindCSS**처럼 className으로 적용할 수도 있지만, React에서의 **Bootstrap**은 className으로 사용하기보다 이미 만들어진 Component 형태로 사용하는 것이 더 많이 보입니다.

그래서 저는 두 가지 방법은 **취향에 맞는 방법을 사용하는 것**이 좋다고 생각합니다.

### Styled Components vs Emotion ([🔗참고한 글](https://velog.io/@bepyan/styled-components-%EA%B3%BC-emotion-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AD%94%EA%B0%80))

저는 두 방법 모두 오늘 처음 약 2시간 정도 사용해봤습니다.
사용해본 시간이 짧기 때문에 어떤 것이 더 좋고 별로라는 것을 제가 정하는 것보다 다른 정리된 글의 결론을 가져왔습니다.

- 유의미한 성능차이가 있는 것이 아니다. 라이브러리 버전에 따라 달라질 수 있다.
- 개발팀에서 더 익숙한 것을 사용하면 될 것 같다.
- emotion의 css props로 css를 더 활용도 높게 조립할 수 있다. 하지만 안쓰면 그만이다.
- SSR에서는 emotion 세팅시 더 간편하다.

추가적으로 저는 문서만 봤을 때에는 **Emotion**이 조금 더 좋다고 생각했습니다.

### CSS in JS vs Module CSS ([🔗참고한 글](https://fe-developers.kakaoent.com/2022/220210-css-in-kakaowebtoon/))

두 방법 모두 스타일을 겹치지 않는 className으로 변환해준다는 공통점이 있지만 사용 방법 및 런타임 성능에 차이점이 있습니다.

**CSS in JS**는 JavaScript 코드 내에서 동적으로 스타일링을 할 수 있다는 장점이 있지만 스타일을 페이지 로딩 시 생성하여 런타임 성능이 상대적으로 떨어질 수 있다는 단점이 있습니다.

**Module CSS**는 스타일이 미리 빌드되어 정적인 CSS 파일을 사용하기 때문에 런타임 성능은 문제 없지만, 동적으로 스타일링을 처리하기 어렵다는 단점이 있습니다.

그래서 동적으로 처리하는 부분이 없다면 **Module CSS**를 사용하는 것이 더 좋고, 간단한 동적 처리 작업이 있다면 **CSS in JS**를 사용하는 것이 좋다고 생각합니다.

하지만 동적으로 스타일링이 변경되는 작업이 많이 들어갈수록 **CSS in JS**의 렌더링 속도가 떨어질 수 있어 *동적으로 스타일링이 많이 변경되는 작업을 처리하는 스타일링 방법*은 이후 내용을 더 찾아본 이후 작성하겠습니다.

## 결론

### 취향에 맞는 방법을 사용하자.

- 매우 치명적인 단점이 아니라면 결국 본인에게 편한 방법을 사용하는것이 좋은 것 같습니다.

## 참고한 글

- [SeongKuk Han, React Monorepo Setup Tutorial with pnpm and Vite: React project + UI, Utils, DEV Community](https://dev.to/lico/react-monorepo-setup-tutorial-with-pnpm-and-vite-react-project-ui-utils-5705)
- [taker, packge.json의 workspaces, velog](https://velog.io/@kksh1205/packge.json%EC%9D%98-workspaces)
- [bepyan, styled-components 과 emotion, 도대체 차이가 뭔가?, Velog](https://velog.io/@bepyan/styled-components-%EA%B3%BC-emotion-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AD%94%EA%B0%80)
- [서현우(bono), 카카오웹툰은 CSS를 어떻게 작성하고 있을까?, 카카오 FE 기술블로그 - 다시 CSS (feat. CSS Module)](https://fe-developers.kakaoent.com/2022/220210-css-in-kakaowebtoon/#%EB%8B%A4%EC%8B%9C-css-feat-css-module)
