# Bootstrap

이미 만들어진 스타일을 쉽게 사용할 수 있는 프레임워크입니다.

## 사용 방법

### 설정

1. 아래 명령어를 사용해 설치합니다.

   ```shell
   npm install bootstrap react-bootstrap
   ```

2. 리액트 진입 파일(main.jsx, index.jsx)에 bootstrap css를 import 해줍니다.

   ```jsx
   import "bootstrap/dist/css/bootstrap.min.css";
   ```

### 사용

1. Component 형태로 사용합니다.

   ```jsx
   <Button variant="primary">버튼입니다</Button>
   ```

2. className 형태로 사용합니다.

   ```jsx
   <button className="text-white bg-primary border-0">버튼입니다</button>
   ```

## 장단점

### 장점

- CSS 문법을 몰라도 사용 가능합니다.
- 컴포넌트 형태로 이미 만들어져있어 빠르게 UI를 만들 수 있습니다.

### 단점

- 커스터마이징이 불편합니다.
  - reset.css(reboot.css)를 없애기 위해 scss를 사용해야합니다.
  - 테마 색상 변경을 위해 scss를 사용해야합니다.
