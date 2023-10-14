import React, { useEffect } from "react";
import { fetchSavings } from "../../Redux/Actions/SavingsAction";
import { useDispatch, useSelector } from "react-redux";
import TransactionCard from "../TransactionCard";
import Filters from "../Filters";

const Savings = () => {
    const dispatch = useDispatch();
    const { savings } = useSelector((state) => state.savings);

    const sortedSavings = savings.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    useEffect(() => {
        dispatch(fetchSavings());
    }, [dispatch]);

    return (
        <div className="main-rightside">
            <Filters />
            {sortedSavings.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Savings;
