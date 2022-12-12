import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import { AuthContextProvider} from './components/AuthContext';
import Grid from './components/Grid';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/ProtectedRoutes';
import Signup from './components/pages/Signup';
import Contact from './components/pages/Contact';
import MarketPlace from './components/pages/MarketPlace';
import Home from './components/pages/Home';
import Creater from './components/pages/Creater';

function App() {
  return (
    <div className='bg-gray-300 py-7 w-full h-full px-7 flex justify-center items-center'>
      <div className='relative rounded-3xl shadow-white shadow bg-black w-full h-full px-2 py-3'>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/grid' element={<ProtectedRoutes><Grid /></ProtectedRoutes>} />
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<ProtectedRoutes><Account /></ProtectedRoutes>} />
            <Route path='/contact' element={<ProtectedRoutes><Contact /></ProtectedRoutes>} />
            <Route path='/creater' element={<ProtectedRoutes><Creater /></ProtectedRoutes>} />
            <Route path='/Marketplace' element={<ProtectedRoutes><MarketPlace /></ProtectedRoutes>} />
            <Route path='/Home' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          </Routes>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
