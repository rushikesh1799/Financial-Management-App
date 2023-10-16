import React, { useEffect } from "react";
import { fetchExpense } from "../../Redux/Actions/ExpenseAction";
import { useDispatch, useSelector } from "react-redux";
import TransactionCard from "../TransactionCard";
import Filters from "../Filters";

const Expense = () => {
    const dispatch = useDispatch();
    const { expense, expenseCategory } = useSelector((state) => state.expense);

    const sortedExpense = expense.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const categoryFilteredExpense =
        expenseCategory === "All"
            ? sortedExpense
            : sortedExpense.filter(
                  (transaction) => transaction.category === expenseCategory
              );

    useEffect(() => {
        dispatch(fetchExpense());
    }, [dispatch]);

    return (
        <div className="main-rightside">
            <Filters />
            {categoryFilteredExpense.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Expense;
