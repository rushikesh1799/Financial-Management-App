import React, { useEffect, useState } from "react";
import { fetchSavings } from "../../Redux/Actions/SavingsAction";
import { useDispatch, useSelector } from "react-redux";
import TransactionCard from "../TransactionCard";
import AddTransactionCard from "../AddTransactionCard";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CategoryFilter from "../Filters/CategoryFilter";

const Savings = () => {
    const dispatch = useDispatch();
    const { savings, savingsCategory } = useSelector((state) => state.savings);

    const [sort, setSort] = useState({ increasing: false, decreasing: false });

    const sortedSavings = savings.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const categoryFilteredSavings =
        savingsCategory === "All"
            ? sortedSavings
            : sortedSavings.filter(
                  (transaction) => transaction.category === savingsCategory
              );

    const sortedSavingsByPrice = sort.increasing
        ? categoryFilteredSavings.sort((a, b) => a.amount - b.amount)
        : sort.decreasing
        ? categoryFilteredSavings.sort((a, b) => b.amount - a.amount)
        : categoryFilteredSavings;

    useEffect(() => {
        dispatch(fetchSavings());
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
            {sortedSavingsByPrice.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Savings;
