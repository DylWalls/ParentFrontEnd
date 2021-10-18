import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import '../Activity/activities.css'
import Maps from '../Googlemaps/maps';

const Activity = () => {
    const [user, setUser] = useState();

    useEffect (()=>{
        console.log("Initial Render");
        currentActivities(true);
        console.log("Grabbed Activities")
    })

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
                    <h7>Upcoming Activities</h7>
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
                            <p>Event location: Electric City Water Park!</p>
                            </li>
                            <li>
                            <p>Event date and location: 20211010 </p>
                            </li>
                        </ul>
                    </div>
                    <div className="activity2">
                         <ul>
                             <li>
                             <p>Event Name: Playing at the PlayGround!</p>
                             </li>
                         </ul>
                         <ul>
                             <li>
                             <p>Event location: Stevens Elementary School</p>
                             </li>
                             <li>
                             <p>Event date: 20211012 </p>
                             </li>
                         </ul>
                    </div>
                    <div className="activity3">
                        <ul>
                            <li>
                            <p>Event Name: River Walk</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <p>Event location: Missouri River Hatchery River Walk!</p>
                            </li>
                            <li>
                            <p>Event date: 20211014 </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Maps/>
            </div>
        )
}

export default Activity