import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
        <div className='icons'>
          <img  className='icon' src='./img/icon1.png'/>
          <img className='icon' src='./img/icon2.png'/>
          <img className='icon' src='./img/icon3.png'/>
          <img className='icon' src='./img/icon4.png'/>
          <img className='icon' src='./img/icon5.png'/>
          <img className='icon' src='./img/icon6.png'/>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
