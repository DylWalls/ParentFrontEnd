import React from 'react';
import {
    Link
}
from "react-router-dom";
import '../Contact/Contact.css';

const Contact = () => {

    return(
        <div>
            <div className="contact">
                <Link to='/home'>Home Page</Link>
            </div>
            <div className="teachers">
                <h2>Our Current Active Teachers!</h2>
                <ol>
                Melina Walls:1-3 year old
                </ol>
                <ol>
                Tiffany Stewart: 3-6 year old
                </ol>
                <ol>
                Michelle Postpone: Newborn to 1 year old
                </ol>
            </div>
            <div className="contacts">
                <h1>Contact Us</h1>
                <li>
                Email: Tinytots@gmail.com
                </li>
                <li>
                Phone: 123-456-7891
                </li>
                <li>
                Address: 123 East St, Montana
                </li>
            </div>
        </div>
    )

}

export default Contact;