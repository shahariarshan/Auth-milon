import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthProvider"

const REgistration = () => {
    const {createUser} =useContext(AuthContext)
    // console.log(authInfo)

    const handelRegistration = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        console.log(email,password)

        // createUser
        createUser(email,password)
        .then(result =>{
            console.log( result.user)

        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register  now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-400">
                    <div className="card-body">

                        <form onSubmit={handelRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    className="input input-bordered" required />
                            </div>
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
                        <p>Already have an account? 
                            <Link to='/login'>
                            
                            <button className="btn btn-active btn-link">Log In Now</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default REgistration;