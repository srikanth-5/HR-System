import React from "react";
import { useState } from "react";
import "./loginpage.css"
import { useNavigate } from "react-router-dom";


export default function Loginpage(){
    const[username, setUsername] =useState("");
    const[password, setPassword] =useState("");

    const navigate = useNavigate();

    let role = "";
    function handleclick(e){
        e.preventDefault();
        if(!username || !password){
            window.alert("please enter all the fields");
            return;
        }
        else if (username == "emp" && password == "emp.123")
        {
            navigate("/detailsscreen");
        }
        else if (username == "manage" && password == "manage.123")
        {
                role = "admin";
                navigate("/detailsscreen", { state: { role } });
        }
        else{
            window.alert("Incorrect username or password");
        }
        console.log("Given Username is "+username +" given password is " + password);

    }

    return (
    <div>
        <h1>HR Login System</h1>
    <form onSubmit={handleclick}>
        <div className="loginpage">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="enter your username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="enter your password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
        <button type="submit" >submit</button>
        </div>
    </form>
    </div>
    );
}