# Emotion

CSS를 JS 내부에서 사용할 수 있고, 이를 컴포넌트 형태로 사용할 수 있게 만들어주는 라이브러리입니다.

## 사용 방법

### 설정

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

### 사용

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

## 장단점

### 장점

- JavaScript 코드에서 사용하기 때문에 유연한 스타일링이 가능합니다.
- styled-components에 비해 가벼울 것이라 생각이 듭니다.
  - styled-components는 스타일을 컴포넌트를 만들어 해당 컴포넌트의 스타일이 className으로 변환되는 방식이었다면 emotion은 스타일로 작성한 부분이 className으로 변환되는 방식이라 조금 더 가벼워보입니다.

### 단점

- 컴포넌트가 복잡한 구조로 만들어졌을 때 처리가 힘들어보입니다.
