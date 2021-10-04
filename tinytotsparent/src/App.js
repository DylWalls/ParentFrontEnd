import React, { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  Link,
} from "react-router-dom";
import axios from 'axios';

//Components
import Home from './components/Home/home';
import PayPal from './components/PayPal/Paypal';
import Login from './components/Login/login';
import Activity from './components/Activity/activities';
import Teacher from './components/SeeTeacher/seeTeacher';
import Register from './components/Register/userRegister';
import Children from './components/Children/children';
import Contact from './components/Contact/Contact';
import './App.css';


const App = () => {
    const [user, setUser] =useState();

    useEffect(()=>{
        const jwt = localStorage.getItem('token')

        try { 
            const userId = jwtDecode(jwt);
            console.log(userId)
            axios.get(`http://localhost:5500/api/users/${userId._id}`)
            .then((res) =>{
                console.log(res.data);
                let user = (res.data)
                setUser(user)
            })
        } catch{}
    },[])

    if(!user){
        return(
        <React.Fragment>
            <Router>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register}/>
                    </Switch>
                </BrowserRouter>
            </Router>
        </React.Fragment>
        )
     }else{
        return(
        <div>
                {
                    console.log("User Rendering on first page:", user)
                }
            <Router>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home" render={props => <Home {...props} user={user}/>}/>
                        <Route path="/addAChild" component={Children}/>
                        <Route path="/seeteacher" component={Teacher}/>
                        <Route path="/checkout" component={PayPal}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/activity" component={Activity}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login} />
                        <Route path="/register" render={props => {
                          if(!user){
                            return <Redirect to="/login"/>
                          }else{
                            return <Redirect to="/home"/>
                          }
                        }}/>
                        <Route path="/" render={props => {
                          if(!user){
                            return <Redirect to="/login"/>
                          }else{
                            return <Redirect to="/home"/>
                          }
                        }}/>
                    </Switch>
                </BrowserRouter>
            </Router>
        </div>
          )
      }

}
export default App;