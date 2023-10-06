
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header';
import Login from './component/login';
import Register from './component/Register';
import Home from "./component/home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/" element={<Header />} />
          
          
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />} />
        
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
