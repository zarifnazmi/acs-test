import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Challenge1 from './pages/answers/Challenge1';
import Challenge2 from './pages/answers/Challenge2';

function App(): JSX.Element {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/challenge1" element={<Challenge1 />} />
      <Route path="/challenge2" element={<Challenge2 />} />
    </Routes>
  </Router>
  );
}

export default App;