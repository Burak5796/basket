import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/Start.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
