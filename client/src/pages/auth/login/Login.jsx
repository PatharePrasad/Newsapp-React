import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import { ReactComponent as LoginImg } from "../../../assets/draw2.svg"
import { ReactComponent as HidePasswordSVG } from "../../../assets/hide_password.svg"
import { ReactComponent as ShowPasswordSVG } from "../../../assets/show_password.svg"


const Login = () => {
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handlePasswordToggle = () => setShowPassword(!showPassword)

    const loginHandler = async(e) => {
        e.preventDefault()

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        try {
            const { data } = await axios.post("/login", {email, password}, config)
            if (data.success === true) {
                alert("Login Successful!")
                localStorage.setItem("authToken", data.token)
                history.push({
                    pathname: "/"
                })
            }
            
        } catch (error) {
            setError(error.message)
            setTimeout(() => {
                setError("")
            }, 5000)
        }
    }

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
                        <div className="d-flex">
                            { error && <span className="mb-4 mx-auto fw-bold" style={{ color: "red"}}>{ error }</span>}
                        </div>
                        <form onClick={loginHandler}>
                            <div className="form-floating mb-4">
                                <input 
                                    type="email" 
                                    name="loginEmail" 
                                    id="loginEmail" 
                                    className='form-control form-control-lg'
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                    <label htmlFor="loginEmail" className="form-label">Email Address</label>
                            </div>
                            <div className="input-group flex-nowrap mb-4">
                                <div className="form-floating w-100">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="loginPassword" 
                                        id="loginPassword" 
                                        className='form-control form-control-lg'
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                    <label htmlFor="loginPassword" className="form-label">Password</label>   
                                </div>
                                <span className="input-group-text" style={{ cursor: "pointer" }} onClick={ handlePasswordToggle }>
                                    {showPassword ? <HidePasswordSVG/> : <ShowPasswordSVG/>}
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center mb-4">
                                <Link to="/auth/forgotPassword" className="text-decoration-none">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign in</button>
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