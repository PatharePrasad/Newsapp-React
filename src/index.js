import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, News, Register } from './pages'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'

const index=()=>{
const ApiKey="e66561575ae040dabc724cecb21ac13b"
      

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home/> } />

            <Route path='/category'>
                <Route exact path='business'ApiKey={ApiKey} element= { <News category='business'/> } />
                <Route exact path='entertainment'ApiKey={ApiKey} element= { <News category='entertainment'/> } />
                <Route exact path='health'ApiKey={ApiKey} element= { <News category='health'/> } />
                <Route exact path='science'ApiKey={ApiKey} element= { <News category='science'/> } />
                <Route exact path='sports'ApiKey={ApiKey} element= { <News category='sports'/> } />
                <Route exact path='technology'ApiKey={ApiKey} element= { <News category='technology'/> } />
            </Route>

            <Route path='/auth'>
                <Route exact path='login' element={ <Login/> } />
                <Route exact path='forgetpassword/' element='' />
                <Route exact path='resetpassword/:resetPasswordToken' element='' />

                <Route exact path='register' element={ <Register/> } />
                <Route exact path='activateUser/:userActivationToken' element='' />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
}

export default index

