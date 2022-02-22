import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import News from './Components/News';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <App /> } />
        <Route exact path='/Login' element={ <Login /> } />
        <Route exact path='/Signin' element={ <Signin /> } />
        <Route exact path='/News24' element={ <News /> } />
        <Route exact path='/business' element={ <business /> } />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
