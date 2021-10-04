import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Home = ({user}) => {
    const [parent, setParent] = useState("");

    useEffect(()=> {
        console.log("Component Initial Render");
        currentActivities(true);
        console.log("Activities Fetched!")
      },[])

    const currentActivities= async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        console.log(parent);
        let endpoint = `http://localhost:5500/api/users/${userId._id}/children`;
        console.log(endpoint);
        await axios.get(endpoint, {
        })
        .then((res) => {
            console.log(res)
            setParent(res);
        })
        .catch(error => console.log(error));
    }

    
    const LogOut = () => {
        localStorage.removeItem("token")
        console.log(`${parent._id} has been logged out!`)
        window.location = '/login'
    }

    console.log("Parent on homepage:", user);
    
    return(
    <div>
        <div className='header'>
            <h2>Welcome {user.firstName} {user.lastName} to TinyTots App!</h2>
        </div>
        <div className="schedule">
            Hours of Operation
            <p>Monday: 6am - 5pm</p>
            <p>Tuesday:6am - 5pm</p>
            <p>Wednesday:6am-5pm</p>
            <p>Thursday:6am - 5pm</p>
            <p>Friday:6am - 5pm</p>
        </div>
        <div className= "students">
        <Link to='/contact'>Meet Our teachers</Link>
        </div>
        <div className= "contact">
        <Link to='/contact'> Contact Us!</Link>
        </div>
        <div className="paypal">
        <Link to='/checkout'>Pay ChildCare Fees</Link>
        </div>
        <div className="activities">
            <Link to='/activity'><p>Activity Page!</p></Link>
            <Link to='/addAChild'><p>Add Child</p></Link>
            <Link to='/addAChild'><p>Sign out Child</p></Link>
            <Link to='/seeteacher'><p>See teacher</p></Link>
        </div>
        <div className="childname">
            <div>
               <h2>Your Children</h2>
            </div>
            <ul>
                {user.children.map((user)=>(
                    <li key={user._id}>
                        <span>
                            Unique ID: {user._id}
                            <div>
                        Child First Name: {user.firstName}
                            </div>
                        Child Last Name: {user.lastName}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="logout">
            <button onClick={()=>{LogOut()}}>Log out</button>
        </div>

    </div>
         
    )
}

export default Home;