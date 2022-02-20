import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from "react-router-dom";
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
          <Route path="/"><News setProgress={setProgress} apiKey={apiKey}key={<genral />} pageSize={pageSize} country="in" category="general" /></Route>
          <Route path="/business"><News setProgress={setProgress} apiKey={apiKey}key={<business />} pageSize={pageSize} country="in" category="business" /></Route>
          <Route path="/entertainment"><News setProgress={setProgress} apiKey={apiKey}key={<entertainment />} pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route path="/health"><News setProgress={setProgress} apiKey={apiKey}key={<health/>} pageSize={pageSize} country="in" category="health" /></Route>
          <Route path="/science"><News setProgress={setProgress} apiKey={apiKey}key={<science />} pageSize={pageSize} country="in" category="science" /></Route>
          <Route path="/sports"><News setProgress={setProgress} apiKey={apiKey}key={<sports />} pageSize={pageSize} country="in" category="sports" /></Route>
          <Route path="/technology"><News setProgress={setProgress} apiKey={apiKey}key={<technology />} pageSize={pageSize} country="in" category="technology" /></Route>
          <Route path="/general"><News setProgress={setProgress} apiKey={apiKey}key={<genral />} pageSize={pageSize} country="in" category="general" /></Route>
          {/*<Route path="/Home"><News setProgress={setProgress} apiKey={apiKey}key={<Home />} pageSize={pageSize} country="in" category="general" /></Route>*/}
          {/*<Route path="/News24"><News setProgress={setProgress} apiKey={apiKey}key={<News24 />} pageSize={pageSize} country="in" category="general" /></Route>*/}
          <Route path="/Signin"></Route>
      </Routes>
      </div>
    </>
  )
}
export default App;

