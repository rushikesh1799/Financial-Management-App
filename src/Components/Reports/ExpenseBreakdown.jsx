import React from "react";
import { useSelector } from "react-redux";

const ExpenseBreakdown = () => {
    const { expense } = useSelector((state) => state.expense);

    const uniqueExpensesByCategory = expense.reduce(
        (acc, { category, amount }) =>
            acc[category]
                ? { ...acc, [category]: acc[category] + amount }
                : { ...acc, [category]: amount },
        {}
    );

    return (
        <div className="report_wrapper">
            <h3>Expense Breakdown:</h3>
            <p>A breakdown of expenses by category.</p>
            <div className="total_expense_wrapper">
                {Object.keys(uniqueExpensesByCategory).map((key) => (
                    <div className="total_expense-item" key={key}>
                        <p className="totals-headers">{key}</p>
                        <b>₹ {uniqueExpensesByCategory[key]}.00</b>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseBreakdown;
