import { ReactComponent as SignUpImg } from "../../../assets/signup.svg"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <SignUpImg className="img-fluid"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <div className="d-flex">
                            <Link to='/' className='text-decoration-none text-reset mb-4 fs-2 mx-auto fw-bold'>News24</Link>
                        </div>
                        <form>
                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    name="signUpName"
                                    id="signUpName"
                                    className="form-control form-control-lg"
                                    placeholder="Name"/>
                                <label htmlFor="signUpName" className="form-label">Name</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="email"
                                    name="signUpEmail"
                                    id="signUpEmail"
                                    className="form-control form-control-lg"
                                    placeholder="Email"/>
                                <label htmlFor="signUpName" className="form-label">Email</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    name="signUpPassword"
                                    id="signUpPassword"
                                    className="form-control form-control-lg"
                                    placeholder="Password"/>
                                <label htmlFor="signUpName" className="form-label">Password</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    name="signUpConfPassword"
                                    id="signUpConfPassword"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm Password"/>
                                <label htmlFor="signUpConfPassword" className="form-label">Confirm Password</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block w-100">Sign Up</button>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <p>Already a User?
                                    <Link to="/auth/register" className="ms-2 text-decoration-none">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register