import React, { useState } from "react";
import Navbar from "./Navbar";
import "./components.css";
import AccountDetails from "./AccountDetails";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";
import Savings from "./Savings/Savings";

const Dashboard = () => {
    const [seletectedItem, setSelectedItem] = useState("income");

    return (
        <div className="app_wrapper">
            <Navbar
                seletectedItem={seletectedItem}
                setSelectedItem={setSelectedItem}
            />
            <div className="main">
                <AccountDetails />
                {seletectedItem === "income" ? (
                    <Income />
                ) : seletectedItem === "expense" ? (
                    <Expense />
                ) : seletectedItem === "savings" ? (
                    <Savings />
                ) : (
                    <div className="main-rightside">
                        <h1>Reports</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
