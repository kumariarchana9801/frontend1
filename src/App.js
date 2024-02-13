
import './App.css';
import Navebar from './Navebar';
import Home from './Componenet/Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Componenet/Login';
import { Route, Routes } from 'react-router-dom';
import Details from './Componenet/Pages/Details.jsx';
import Register from './Componenet/Pages/Register.jsx';
import Edit from './Componenet/Pages/Edit.js';
import REgister1 from './Componenet/REgister1.jsx';


function App() {
  return (
    <>
    <Navebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/view/:id' element={<Details/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register1' element={<REgister1/>}/>
    </Routes>
    </>
  );
}

export default App;
