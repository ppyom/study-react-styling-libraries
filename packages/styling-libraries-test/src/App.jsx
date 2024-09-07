import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index={true} element={<>Home</>} />
    </Routes>
  );
}

export default App;
