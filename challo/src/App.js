import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Login from './components/Login';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/add" element={<Add></Add>} />
    <Route path="/login" element={<Login></Login>} />
    <Route path="/view" element={<View></View>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
