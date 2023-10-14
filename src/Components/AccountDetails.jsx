import React from "react";
import "./components.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import SavingsIcon from "@mui/icons-material/Savings";
import { useSelector } from "react-redux";

const AccountDetails = () => {
    const { income } = useSelector((state) => state.income);
    const { expense } = useSelector((state) => state.expense);
    const { savings } = useSelector((state) => state.savings);

    const totalIncome = income.reduce((acc, { amount }) => amount + acc, 0);
    const totalExpense = expense.reduce((acc, { amount }) => amount + acc, 0);
    const totalSavings = savings.reduce((acc, { amount }) => amount + acc, 0);
    return (
        <div className="main-leftside">
            <div className="account-details-wrapper">
                <div>
                    <p>Total Balance</p>
                    <h2 className="total_price">
                        ₹ {totalIncome - totalExpense}.00
                    </h2>
                </div>
                <div className="total_income">
                    <ArrowCircleUpIcon
                        fontSize="large"
                        sx={{ color: "#12c5a8", marginRight: "8px" }}
                    />
                    <div>
                        <p className="totals-headers">Total Income</p>
                        <h2>₹ {totalIncome}.00</h2>
                    </div>
                </div>
                <div className="total_income">
                    <ArrowCircleDownIcon
                        fontSize="large"
                        sx={{ color: "#e53b3b", marginRight: "8px" }}
                    />
                    <div>
                        <p className="totals-headers">Total Expense</p>
                        <h2>₹ {totalExpense}.00</h2>
                    </div>
                </div>
                <div className="total_income">
                    <SavingsIcon
                        fontSize="large"
                        sx={{ color: "#000", marginRight: "8px" }}
                    />
                    <div>
                        <p className="totals-headers">Total Savings</p>
                        <h2>₹ {totalSavings}.00</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;
