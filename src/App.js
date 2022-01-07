import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import Heading from './components/pages/Heading';

import {Routes, Route, Link ,BrowserRouter} from 'react-router-dom'
import Ahmedabad from './components/button_details/Ahmedabad';
import Usernav from './components/pages/Usernav';

function App() {
  return (
    <BrowserRouter>
    <Usernav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
