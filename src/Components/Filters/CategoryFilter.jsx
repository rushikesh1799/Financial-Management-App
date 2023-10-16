import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const { incomeCategory, seletectedItem } = useSelector(
        (state) => state.income
    );
    const { expenseCategory } = useSelector((state) => state.expense);
    const { savingsCategory } = useSelector((state) => state.savings);

    const handleIncomeCategoryChange = (e) => {
        dispatch({
            type: "SET_INCOME_CATEGORY_FILTER",
            payload: e.target.value,
        });
    };

    const handleExpenseCategoryChange = (e) => {
        dispatch({
            type: "SET_EXPENSE_CATEGORY_FILTER",
            payload: e.target.value,
        });
    };

    const handleSavingsCategoryChange = (e) => {
        dispatch({
            type: "SET_SAVINGS_CATEGORY_FILTER",
            payload: e.target.value,
        });
    };

    return (
        <>
            {seletectedItem === "income" ? (
                <TextField
                    id="outlined-required"
                    select
                    label="Category"
                    variant="outlined"
                    required
                    size="small"
                    value={incomeCategory}
                    onChange={(e) => handleIncomeCategoryChange(e)}
                    sx={{ width: "35%" }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Salary">Salary</MenuItem>
                    <MenuItem value="Freelance Earnings">
                        Freelance Earnings
                    </MenuItem>
                    <MenuItem value="Business Revenue">
                        Business Revenue
                    </MenuItem>
                    <MenuItem value="Investment Income">
                        Investment Income
                    </MenuItem>
                    <MenuItem value="Rental Income">Rental Income</MenuItem>
                    <MenuItem value="Consulting Fees">Consulting Fees</MenuItem>
                    <MenuItem value="Royalties">Royalties</MenuItem>
                    <MenuItem value="Savings Interest">
                        Savings Interest
                    </MenuItem>
                    <MenuItem value="Gifts and Inheritance">
                        Gifts and Inheritance
                    </MenuItem>
                    <MenuItem value="Online Sales">Online Sales</MenuItem>
                    <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                </TextField>
            ) : seletectedItem === "expense" ? (
                <TextField
                    id="outlined-required"
                    select
                    label="Category"
                    variant="outlined"
                    required
                    size="small"
                    value={expenseCategory}
                    onChange={(e) => handleExpenseCategoryChange(e)}
                    sx={{ width: "35%" }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Food and Dining">Food and Dining</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Transportation">Transportation</MenuItem>
                    <MenuItem value="Housing">Housing</MenuItem>
                    <MenuItem value="Health and Fitness">
                        Health and Fitness
                    </MenuItem>
                    <MenuItem value="Shopping">Shopping</MenuItem>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Utilities">Utilities</MenuItem>
                    <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                </TextField>
            ) : (
                <TextField
                    id="outlined-required"
                    select
                    label="Category"
                    variant="outlined"
                    required
                    size="small"
                    value={savingsCategory}
                    onChange={(e) => handleSavingsCategoryChange(e)}
                    sx={{ width: "35%" }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Investment Portfolio">
                        Investment Portfolio
                    </MenuItem>
                    <MenuItem value="Emergency Fund">Emergency Fund</MenuItem>
                    <MenuItem value="Retirement Fund">Retirement Fund</MenuItem>
                    <MenuItem value="Travel Fund">Travel Fund</MenuItem>
                    <MenuItem value="Education Fund">Education Fund</MenuItem>
                    <MenuItem value="Home Down Payment">
                        Home Down Payment
                    </MenuItem>
                    <MenuItem value="Healthcare Fund">Healthcare Fund</MenuItem>
                </TextField>
            )}
        </>
    );
};

export default CategoryFilter;
