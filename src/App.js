import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Courses from './Courses';
import ProbSolving from './ProbSolving'
import Repo from './Repo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
const App = () => {
    return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/problem-solving' element={<ProbSolving/>}></Route>
          <Route path='/repositories' element={<Repo/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
