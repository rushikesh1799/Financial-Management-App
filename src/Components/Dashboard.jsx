import React, { useState } from "react";
import Navbar from "./Navbar";
import "./components.css";
import AccountDetails from "./AccountDetails";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";
import Savings from "./Savings/Savings";
import { useSelector } from "react-redux";
import Reports from "./Reports/Reports";

const Dashboard = () => {
    // const [seletectedItem, setSelectedItem] = useState("income");

    const { seletectedItem } = useSelector((state) => state.income);

    return (
        <div className="app_wrapper">
            <Navbar />
            <div className="main">
                <AccountDetails />
                {seletectedItem === "income" ? (
                    <Income />
                ) : seletectedItem === "expense" ? (
                    <Expense />
                ) : seletectedItem === "savings" ? (
                    <Savings />
                ) : (
                    <Reports />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
