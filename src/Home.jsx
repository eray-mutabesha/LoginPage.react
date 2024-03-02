import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (  
        <div>
            <h1>welcome you're now connected</h1>
            <Link to="/">Log out</Link>
        </div>
    );
}
 
export default Home;