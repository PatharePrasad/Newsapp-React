import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, Login, News, Register } from './pages'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home/> } />

            <Route path='/category'>
                <Route exact path='business' element= { <News category='business'/> } />
                <Route exact path='entertainment' element= { <News category='entertainment'/> } />
                <Route exact path='health' element= { <News category='health'/> } />
                <Route exact path='science' element= { <News category='science'/> } />
                <Route exact path='sports' element= { <News category='sports'/> } />
                <Route exact path='technology' element= { <News category='technology'/> } />
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