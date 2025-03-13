import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./personalprofile.css";

export default function Personalprofile() {
    const [name, setName] = useState("employee");
    const [email, setEmail] = useState("employee@IT.com");
    const [phone, setPhone] = useState("123-456-7890");
    const [address, setAddress] = useState("123 box st,JD");
    const [department, setDepartment] = useState("Engineering");
    const [position, setPosition] = useState("Software Engineer");
    const [dateOfJoining, setDateOfJoining] = useState("2022-01-15");

    const location = useLocation();
    const role = location.state?.role || "employee";
    
    return (
        <div className="profile-container">
            <h1>{role}  Personal Profile</h1>
            <table className="profile-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{role === "admin" ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> : name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{role === "admin" ? <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> : email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{role === "admin" ? <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /> : phone}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{role === "admin" ? <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> : address}</td>
                    </tr>
                    <tr>
                        <th>Department</th>
                        <td>{role === "admin" ? <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} /> : department}</td>
                    </tr>
                    <tr>
                        <th>Position</th>
                        <td>{role === "admin" ? <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} /> : position}</td>
                    </tr>
                    <tr>
                        <th>Date of Joining</th>
                        <td>{role === "admin" ? <input type="date" value={dateOfJoining} onChange={(e) => setDateOfJoining(e.target.value)} /> : dateOfJoining}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}