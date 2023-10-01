import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";



const Home = () => {
    const authInfo =useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h2 className="text-2xl">This is home of :  {authInfo.Name}</h2>
        </div>
    );
};

export default Home;