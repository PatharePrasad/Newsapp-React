import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const handleLoginRequest = () => {
    console.log("Login Event Triggered")
//     ENTER REST OF THE FUNCTIONALITY HERE
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="News24">News24</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoginRequest}>Login</button>
        <button type="button" className="btn btn-primary mx-1">Signin</button>
      </nav>
    </div>
  )
}
  
export default Navbar
