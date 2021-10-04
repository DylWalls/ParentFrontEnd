import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import '../Children/children.css'

const Children = () =>{
    const [child, setChild] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [allergies, setAllergies] = useState("");
    const [glasses, setGlasses] = useState(false);
    const [stock, setStock] = useState(""); 
    
    const submitHandler = (e) =>{
        e.preventDefault();
    };

    
    const deleteChild = async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        await axios.delete(`http://localhost:5500/api/users/${userId._id}/children/${userId.children.id}`)
        window.location = "/home"
    }

    const addChild = async () => {
        const jwt = localStorage.getItem('token');
        const userId = jwtDecode(jwt);
        console.log(child);
        let endpoint = `http://localhost:5500/api/users/${userId._id}/children`
        console.log(endpoint);
        await axios.post(endpoint,{
            firstName: firstName,
            lastName: lastName,
            allergies: allergies,
            glasses: glasses,
            stock: stock
        })
        .then((res)=> {
            console.log(res.data)
            setChild(res);
        })
        .catch(error => console.log(error))
        window.location = '/home'
    }


    return(
        <div className= "newStudent">
            <div>
                <Link to="/classroom">Home Page</Link>
            </div>
        <div className="add">
            <div>
                <p>
                    Add a child
                </p>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="firstName" name="First Name" placeholder="First Name.." onChange={e=> setFirstName(e.target.value)}/>
                </div>
                <div>
                    <input type="lastName" name="Last Name" placeholder="Last Name.." onChange={e=> setLastName(e.target.value)}/>
                </div>
                <div>
                    <input type="allergies" name="Allergies" placeholder="Allergies??" onChange={e=> setAllergies(e.target.value)}/>
                </div>
                <div>
                    <input type="glasses" name="Glasses" placeholder="Glasses: True or False" onChange={e=> setGlasses(e.target.value)}/>
                </div>
                <div>
                    <input type="Stock" name="Stock" placeholder="Stock.." onChange={e=> setStock(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>{addChild()}}>Add New Child</button>
                </div>
            </form>
        </div>
            <div className="delete">
                <div>Delete Child</div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type="eventID" name="EventID" placeholder="Child Id" onChange ={e=> setChild(e.target.value)}/>
                        </div>                 
                        <div>
                            <button onClick={()=>{deleteChild()}}>Delete</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Children;