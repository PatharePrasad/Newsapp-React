import { Link } from "react-router-dom"
import { useState } from "react"

import { ReactComponent as SignUpImg } from "../../../assets/signup.svg"
import { ReactComponent as HidePasswordSVG } from "../../../assets/hide_password.svg"
import { ReactComponent as ShowPasswordSVG } from "../../../assets/show_password.svg"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)

    const handlePasswordToggle = () => setShowPassword(!showPassword)
    const handleConfPasswordToggle = () => setShowConfPassword(!showConfPassword)

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
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required/>
                                <label htmlFor="signUpName" className="form-label">Name</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="email"
                                    name="signUpEmail"
                                    id="signUpEmail"
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                                <label htmlFor="signUpName" className="form-label">Email</label>
                            </div>
                            <div className="input-group flex-nowrap mb-4">
                                <div className="form-floating w-100">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="signUpPassword" 
                                        id="signUpPassword" 
                                        className='form-control form-control-lg'
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required/>
                                    <label htmlFor="signUpPassword" className="form-label">Password</label>   
                                </div>
                                <span className="input-group-text" style={{ cursor: "pointer" }} onClick={ handlePasswordToggle }>
                                    {showPassword ? <HidePasswordSVG/> : <ShowPasswordSVG/>}
                                </span>
                            </div>
                            <div className="input-group flex-nowrap mb-4">
                                <div className="form-floating w-100">
                                    <input 
                                        type={showConfPassword ? "text" : "password"} 
                                        name="signUpConfPassword" 
                                        id="signUpConfPassword" 
                                        className='form-control form-control-lg'
                                        placeholder="Confirm Password"
                                        value={confPassword}
                                        onChange={(e) => setConfPassword(e.target.value)}/>
                                    <label htmlFor="signUpConfPassword" className="form-label">Confirm Password</label>   
                                </div>
                                <span className="input-group-text" style={{ cursor: "pointer" }} onClick={ handleConfPasswordToggle }>
                                    {showConfPassword ? <HidePasswordSVG/> : <ShowPasswordSVG/>}
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign Up</button>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <p>Already a User?
                                    <Link to="/auth/login" className="ms-2 text-decoration-none">Login</Link>
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