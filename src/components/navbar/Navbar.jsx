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
                            <Link to='/' className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/business' className="nav-link">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/entertainment' className="nav-link">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/health' className="nav-link">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/science' className="nav-link">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/sports' className="nav-link">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/technology' className="nav-link">Technology</Link>
                        </li>
                    </div>
                </div>
            </div>

            <Link to='/auth/login' className="btn btn-primary mx-1">Login</Link>
            <Link to='/auth/register' className="btn btn-primary mx-1">Register</Link>
        </nav>
    </>
    )
}

export default Navbar