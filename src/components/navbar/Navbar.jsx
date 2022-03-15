import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className='navbar-brand'>News24</span>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav">
                    <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </div>
          </div>
        </div>

            <Link className="btn btn-primary mx-1" to="/auth/login">Login</Link>
            <Link to='/auth/register' className="btn btn-primary mx-1">Register</Link>
        </nav>
    </>
    )
}

export default Navbar