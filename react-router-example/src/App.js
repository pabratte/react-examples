import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>React Router example</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
