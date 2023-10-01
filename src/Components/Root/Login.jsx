import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
    const {signIn,signInWithGoogle,signInWithGitHub} =useContext(AuthContext)
    const navigate = useNavigate()

    const handelForm = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        
        console.log(name,email,password)

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
            navigate ('/')
        })
        .error(error =>{
            console.error(error)
        })

       
    }
    const handelGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const handelGithubSignIn=() =>{
        signInWithGitHub()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handelForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New here? 
                            <Link to='/registration'>
                            
                            <button className="btn btn-active btn-link">Register Now</button>
                            </Link>
                        </p>
                        <div className="flex justify-between">
                        <p ><button onClick={handelGoogleSignIn} className="btn  btn-link">Google</button></p>
                        <p ><button onClick={handelGithubSignIn} className="btn  btn-link">GitHub</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;