import React, { useEffect } from "react";
import "../components.css";
import Filters from "../Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../Redux/Actions/IncomeActions";
import TransactionCard from "../TransactionCard";

const Income = () => {
    const dispatch = useDispatch();
    const { income, incomeCategory } = useSelector((state) => state.income);

    const sortedIncome = income.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const categoryFilteredIncome =
        incomeCategory === "All"
            ? sortedIncome
            : sortedIncome.filter(
                  (transaction) => transaction.category === incomeCategory
              );

    useEffect(() => {
        dispatch(fetchIncome());
    }, [dispatch]);

    return (
        <div className="main-rightside">
            <Filters />
            {categoryFilteredIncome.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Income;
