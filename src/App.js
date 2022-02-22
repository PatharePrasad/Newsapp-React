import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const pageSize = 5;
  const apiKey = 'e66561575ae040dabc724cecb21ac13b'

  const [progress, setProgress] = useState(0)



  return (
    <>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        <Routes>
          <NavLink to='/Components/News'><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></NavLink>
          <NavLink to='/Copmonents/business'><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" /></NavLink>
          <Link to='/Components/Signin'></Link>
          <Link to='/Components/Login'></Link>
        </Routes>
      </div>
    </>
  )
}
export default App;

