import { Link } from "react-router-dom"
import { ReactComponent as LoginImg } from "../../../assets/draw2.svg"

const Login = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <LoginImg className="img-fluid"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <div className="d-flex">
                            <Link to='/' className='text-decoration-none text-reset mb-4 fs-2 mx-auto fw-bold'>News24</Link>
                        </div>
                        <form>
                            <div className="form-floating mb-4">
                                <input 
                                    type="email" 
                                    name="loginEmail" 
                                    id="loginEmail" 
                                    className='form-control form-control-lg'
                                    placeholder="Email Address" />
                                    <label htmlFor="loginEmail" className="form-label">Email Address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input 
                                    type="password" 
                                    name="loginPassword" 
                                    id="loginPassword" 
                                    className='form-control form-control-lg'
                                    placeholder="Password" />
                                    <label htmlFor="loginEmail" className="form-label">Password</label>
                            </div>
                            <div className="d-flex justify-content-end align-items-center mb-4">
                                <Link to="/auth/forgotPassword" className="text-decoration-none">Forgot Password?</Link>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block w-100">Sign in</button>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <p>New User?
                                    <Link to="/auth/register" className="ms-2 text-decoration-none">Create an Account</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login