import React from "react";
import {Link , useLocation} from "react-router-dom";
import "./detailsscreen.css"

export default function Detailsscreen(){
    const location = useLocation();
    const role = location.state?.role || "employee";
    return(
        <div className="detailspage">
            <h1> welcome to the HR System ! {role}</h1>
            <div className="selectbar">
            <div className="selectbar-left">
                <Link to="/">Logout</Link>
            </div>
            <div className="selectbar-right">
                <Link to="/payroll" state={{ role }}>Payroll</Link>
                <Link to="/personalprofile" state={{ role }}>personal profile</Link>
                <Link to="/timesheet" state={{ role }}>Timesheet</Link>
            </div>
            </div>
        </div>

    
        
    )
}