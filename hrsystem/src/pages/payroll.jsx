import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./payroll.css";

export default function Payroll({ role }) {
    const [empid, setEmpid] = useState("emp_01");
    const [salary, setSalary] = useState(90000);
    const [tax, setTax] = useState(5000);
    const [grossSalary, setGrossSalary] = useState(salary - tax);
    
    const location = useLocation();
    const role = location.state?.role || "employee";

    const handleEdit = (e, setter) => {
        setter(Number(e.target.value));
        setGrossSalary(salary - tax);
    };

    return (
        <div className="payroll-container">
            <h1>Your Payroll</h1>
            <table className="salary-table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Your Total Salary</th>
                        <th>Tax Deductions</th>
                        <th>Your Gross Salary</th>
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
                                <input type="number" value={salary} onChange={(e) => handleEdit(e, setSalary)} />
                            ) : (
                                salary
                            )}
                        </td>
                        <td>
                            {role === "admin" ? (
                                <input type="number" value={tax} onChange={(e) => handleEdit(e, setTax)} />
                            ) : (
                                tax
                            )}
                        </td>
                        <td>{grossSalary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
