import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SeeTeacher/seeTeacher.css';


const Teacher = () => {

    return (
        <div>
            <Link to='/home'>Home Page</Link>
            <div>
                <li>
                    Teacher Name: Melina Walls
                </li>
                <li>
                    About me:Hi! I am 24 years old and I love teaching kids along watching the kids grow!
                </li>
                <li>
                    Favorite sport: I LOVE TO PLAY TENNIS!
                </li>
            </div>
        </div>
    )


}


export default Teacher