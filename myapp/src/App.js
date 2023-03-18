import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/Start.jsx';
import Teams from './pages/Teams.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/teams' element={<Teams />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
