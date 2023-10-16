import React, { useEffect, useState } from "react";
import "../components.css";
import AddTransactionCard from "../AddTransactionCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../Redux/Actions/IncomeActions";
import TransactionCard from "../TransactionCard";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    MenuItem,
    TextField,
} from "@mui/material";
import CategoryFilter from "../Filters/CategoryFilter";

const Income = () => {
    const dispatch = useDispatch();
    const { income, incomeCategory } = useSelector((state) => state.income);

    const [sort, setSort] = useState({ increasing: false, decreasing: false });

    const sortedIncome = income.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const categoryFilteredIncome =
        incomeCategory === "All"
            ? sortedIncome
            : sortedIncome.filter(
                  (transaction) => transaction.category === incomeCategory
              );

    const sortedIncomeByPrice = sort.increasing
        ? categoryFilteredIncome.sort((a, b) => a.amount - b.amount)
        : sort.decreasing
        ? categoryFilteredIncome.sort((a, b) => b.amount - a.amount)
        : categoryFilteredIncome;

    useEffect(() => {
        dispatch(fetchIncome());
    }, [dispatch]);

    return (
        <div className="main-rightside">
            <AddTransactionCard />
            <div className="sort-data-container form_input">
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={sort.increasing} />}
                        label="Increasing Price"
                        onChange={() =>
                            setSort({
                                increasing: !sort.increasing,
                                decreasing: false,
                            })
                        }
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={sort.decreasing} />}
                        label="Decreasing Price"
                        onChange={() =>
                            setSort({
                                increasing: false,
                                decreasing: !sort.decreasing,
                            })
                        }
                    />
                </FormGroup>
                <CategoryFilter />
            </div>

            {sortedIncomeByPrice.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Income;
