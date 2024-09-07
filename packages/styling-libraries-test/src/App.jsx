import { Route, Routes } from 'react-router-dom';
import { routes } from './routes.js';
import Home from './pages/index.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <>
      <h1>리액트 스타일링 라이브러리/프레임워크 공부</h1>
      <NavBar />
      <Routes>
        <Route index={true} element={<Home />} />
        {routes.map(({ pathname, Element }) => (
          <Route
            key={`route_${pathname}`}
            path={pathname}
            element={<Element />}
          />
        ))}
        P
      </Routes>
    </>
  );
}

export default App;
