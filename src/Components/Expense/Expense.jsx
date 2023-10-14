import React, { useEffect } from "react";
import { fetchExpense } from "../../Redux/Actions/ExpenseAction";
import { useDispatch, useSelector } from "react-redux";
import TransactionCard from "../TransactionCard";
import Filters from "../Filters";

const Expense = () => {
    const dispatch = useDispatch();
    const { expense } = useSelector((state) => state.expense);

    const sortedExpense = expense.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    useEffect(() => {
        dispatch(fetchExpense());
    }, [dispatch]);

    return (
        <div className="main-rightside">
            <Filters />
            {sortedExpense.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Expense;
