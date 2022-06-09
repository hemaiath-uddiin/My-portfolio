import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
function App() {
  return (
  <div className="App">
         <Navbar></Navbar> 
        
         <Routes> 
              <Route path='/' element={<Home></Home>} >  </Route>
              <Route path='/about' element={<About></About>} > </Route>
              


         </Routes>
    </div>
  );
}

export default App;
