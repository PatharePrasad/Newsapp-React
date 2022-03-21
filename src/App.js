import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login, News, Register } from './pages'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'


const App = () => {
    const pageSize = 5;
    const apiKey = "e66561575ae040dabc724cecb21ac13b"
    const [progress, setProgress] = useState(0)

    return (
        <div>
            <Router>
                <LoadingBar height={3} color='#f11946' progress={progress} />

                <Switch>
                    <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
                    <Route exact path="/home"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
                    <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
                    <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
                    <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
                    <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
                    <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
                    <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
<<<<<<< HEAD
                    <Route path="/auth">
                    <Route exact path="/ogin" render={()=><Login/>}></Route>
                {/*<Route exact path="/login"></Route>*/}
                <Route exact path="/register"></Route>
                </Route>
=======
                    {/* AUTHENTICATION ROUTES  */}
                    <Route exact path="/auth/login"><Login /></Route>
                    <Route exact path="/auth/register"><Register /></Route>
>>>>>>> 7f0ec872d76beef69e897137ca8bc8c22b8521de
                </Switch>
            </Router>
        </div>
    )
}

export default App