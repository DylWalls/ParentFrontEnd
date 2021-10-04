import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import '../Activity/activites.css'

const Activity = () => {
    const [user, setUser] = useState();

    useEffect (()=>{
        console.log("Initial Render");
        currentActivities(true);
        console.log("Grabbed Activities")
    },[])

    const currentActivities = async ()=> {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        console.log(user);
        let endpoint = `http://localhost:5000/api/users/614dd815aa4e94911c9a7f0c/activities`;
        console.log(endpoint);
        await axios.get(endpoint, {
        })
        .then((res) => {
            console.log(res)
            setUser(res);
        })
        .catch(error => console.log(error));
    }
        return(
            <div>
                        <div>
                            <Link to='/home'>Back Home</Link>
                        </div>
                <div>
                    <div className="header">
                    <h1>Upcoming Activities</h1>
                    </div>
                    {
                        console.log("User on activity page:", user)
                    }
                    <div className="activity">
                    <ul>
                        <li>
                        <p>Event Name: Swimming with teachers!</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <p>Event date and location: 20211010 at Electric City Water Park!</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <p>Event Name: Playing at the PlayGround!</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <p>Event date and location: 20211012 at Stevens Elementary School</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <p>Event Name: River Walk</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <p>Event date and location: 20211014 at Missouri River Hatchery River Walk!</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
}

export default Activity