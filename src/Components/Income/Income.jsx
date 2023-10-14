import React, { useEffect } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "../components.css";
import Filters from "../Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../Redux/Actions/IncomeActions";
import TransactionCard from "../TransactionCard";

const Income = () => {
    const dispatch = useDispatch();
    const { income } = useSelector((state) => state.income);

    const sortedIncome = income.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    useEffect(() => {
        dispatch(fetchIncome());
    }, [dispatch]);

    return (
        <div className="main-rightside">
            <Filters />
            {sortedIncome.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Income;
