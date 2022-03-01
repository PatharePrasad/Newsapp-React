import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, News, Register } from './pages'
import { Navbar } from './components';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'

const Index=()=>{
const pageSize = 5;
const apiKey="e66561575ae040dabc724cecb21ac13b"
const [progress, setProgress] = useState(0)

return (
    <div>
    <Navbar/> 
    <LoadingBar
    height={3}
    color='#f11946' 
    progress={progress}
    />
      

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" element={ <Home/> } />

            <Route path='/category'>
                <Route exact path='business' News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" element= { <News category='business'/> } />
                <Route exact path='entertainment' News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" element= { <News category='entertainment'/> } />
                <Route exact path='health' News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" element= { <News category='health'/> } />
                <Route exact path='science' News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" element= { <News category='science'/> } />
                <Route exact path='sports' News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" element= { <News category='sports'/> } />
                <Route exact path='technology' News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" element= { <News category='technology'/> } />
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
    </div>

)
}



export default Index

