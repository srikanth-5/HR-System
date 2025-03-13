import React from "react";
import { useState, } from "react";
import { useLocation } from "react-router-dom";
import './timesheet.css'

export default function Timesheet(){
    const [empid, setEmpid] = useState("emp_01");
    const [workinghours, setWorkinghours] = useState(50);
    const [leavetime, setLeavetime] = useState(10);
    const [totaltime, setTotaltime] = useState(workinghours - leavetime);

     const location = useLocation();
    const role = location.state?.role || "employee";
    
    const handleEdit = (e, setter) => {
        setter(Number(e.target.value));
        setTotaltime(workinghours - leavetime);
    };

    return(
      
               <div className="timesheet-container">
                   <h1>Your {role} timesheet</h1>
                   <table className="timesheet-table">
                       <thead>
                           <tr>
                                <th>Employee ID</th>
                               <th>working hours</th>
                               <th>leave time</th>
                               <th>Your total time</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                           <td>
                            {role === "admin" ? (
                                <input type="text" value={empid} onChange={(e) => setEmpid(e)} />
                            ) : (
                                empid
                            )}
                            </td>
                               <td>
                                   {role === "admin" ? (
                                       <input type="number" value={workinghours} onChange={(e) => handleEdit(e, setWorkinghours)} />
                                   ) : (
                                       workinghours
                                   )}
                               </td>
                               <td>
                                   {role === "admin" ? (
                                       <input type="number" value={leavetime} onChange={(e) => handleEdit(e, setLeavetime)} />
                                   ) : (
                                       leavetime
                                   )}
                               </td>
                               <td>{totaltime}</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
    )
}