import React, { useEffect, useState } from "react";
import { fetchExpense } from "../../Redux/Actions/ExpenseAction";
import { useDispatch, useSelector } from "react-redux";
import TransactionCard from "../TransactionCard";
import AddTransactionCard from "../AddTransactionCard";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CategoryFilter from "../Filters/CategoryFilter";

const Expense = () => {
    const dispatch = useDispatch();
    const { expense, expenseCategory } = useSelector((state) => state.expense);

    const [sort, setSort] = useState({ increasing: false, decreasing: false });

    const sortedExpense = expense.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const categoryFilteredExpense =
        expenseCategory === "All"
            ? sortedExpense
            : sortedExpense.filter(
                  (transaction) => transaction.category === expenseCategory
              );

    const sortedExpenseByPrice = sort.increasing
        ? categoryFilteredExpense.sort((a, b) => a.amount - b.amount)
        : sort.decreasing
        ? categoryFilteredExpense.sort((a, b) => b.amount - a.amount)
        : categoryFilteredExpense;

    useEffect(() => {
        dispatch(fetchExpense());
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
            {sortedExpenseByPrice.map((transaction) => (
                <TransactionCard
                    transaction={transaction}
                    key={transaction._id}
                />
            ))}
        </div>
    );
};

export default Expense;
