import React, { useState } from 'react';
import axios from 'axios';
import './home.css';
import { Link } from 'react-router-dom';

const Home = ({user}) => {
    const [parent, setParent] = useState("");


    
    const LogOut = () => {
        localStorage.removeItem("token")
        console.log(`${parent._id} has been logged out!`)
        window.location = '/login'
    }

    console.log("Parent on homepage:", parent);
    
    return(
    <div>
        <div className="schedule">
            Weekly Schedule
            <p>Monday: 6am - 5pm</p>
            <p>Tuesday:6am - 5pm</p>
            <p>Wednesday:off</p>
            <p>Thursday:6am - 5pm</p>
            <p>Friday:6am - 5pm</p>
        </div>
        <div className= "students">
        <Link to='/classroom'>Current students</Link>
        </div>
        <div className="activities">
            <Link to='/activity'><p>Activity Page!</p></Link>
        </div>
        <div className="logout">
            <button onClick={()=>{LogOut()}}>Log out</button>
        </div>

    </div>
         
    )
}

export default Home;