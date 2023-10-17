import React from "react";
import { useSelector } from "react-redux";
import "../components.css";

const IncomeVsExpense = () => {
    const { income } = useSelector((state) => state.income);
    const { expense } = useSelector((state) => state.expense);
    const { savings } = useSelector((state) => state.savings);

    const totalIncome = income.reduce((acc, { amount }) => amount + acc, 0);
    const totalExpense = expense.reduce((acc, { amount }) => amount + acc, 0);
    const totalSavings = savings.reduce((acc, { amount }) => amount + acc, 0);

    return (
        <div className="report_wrapper">
            <h3>Income vs. Expenses Report:</h3>
            <p>A summary of total income, total expenses, and savings.</p>
            <div className="income-vs-expense">
                <div className="total_income-item">
                    <p className="totals-headers">Total Income</p>
                    <b className="income-value">₹ {totalIncome}.00</b>
                </div>
                <div className="total_income-item">
                    <p className="totals-headers">Total Expense</p>
                    <b className="expense-value">₹ {totalExpense}.00</b>
                </div>
                <div className="total_income-item">
                    <p className="totals-headers">Total Savings</p>
                    <b className="saving">₹ {totalSavings}.00</b>
                </div>
            </div>
        </div>
    );
};

export default IncomeVsExpense;
