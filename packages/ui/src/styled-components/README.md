# Styled Components

CSS를 JS 내부에서 사용할 수 있고, 이를 컴포넌트 형태로 사용할 수 있게 만들어주는 라이브러리입니다.

## 사용 방법

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

## 장단점

### 장점

- JavaScript 코드에서 사용하기 때문에 유연한 스타일링이 가능합니다.

### 단점

- (약 2시간 사용해본 매우 개인적인 의견) 컴포넌트가 복잡한 구조로 만들어졌을 때 처리가 힘들어보입니다.
