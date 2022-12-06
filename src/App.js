import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import PersonalDetails from './components/PersonalDetails';
import Profile1 from './components/Profile1';
import Profile2 from './components/Profile2';
import Register from './components/Register';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar open={open} setOpen={setOpen} />
        <Routes>
          <Route path='/' element={<Register open={open} setOpen={setOpen} />} />
          <Route path='/login' element={<LoginPage open={open} setOpen={setOpen} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile1' element={<Profile1 />} />
          <Route path='/profile2' element={<Profile2 />} />
          <Route path='/personaldetails' element={<PersonalDetails open={open} setOpen={setOpen} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
