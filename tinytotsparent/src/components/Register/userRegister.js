import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './userRegister.css';

const Register = ({user}) => {
    const [users, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("")

    const createUser = user => {
        console.log(user)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        createUser(user)
    };

    const registerUser = async () => {
        await axios.post('http://localhost:5500/api/users', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
        })
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data)
            setUser(res);
            window.location = '/login';
        })
        .catch(error => console.log(error));
    }
    return(
        <div className="boxes">
            <div className="*">Register</div>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type="email" name="Email" placeholder="Email.." onChange ={e=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input type="firstName" name="First Name" placeholder="First Name" onChange ={e=> setFirstName(e.target.value)}/>
                    </div>
                    <div>
                        <input type="lastName" name="Last Name" placeholder="Last Name" onChange ={e=> setLastName(e.target.value)}/>
                    </div>
                    <div>
                        <input type="password" name="Password" placeholder="Password.." onChange ={e=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={()=>{registerUser()}}>Create Account</button>
                    </div>
                    <div>
                    <Link to='/login'>Already a member? Click here!</Link>
                </div>
                </form>
        </div>
    );
};

export default Register;