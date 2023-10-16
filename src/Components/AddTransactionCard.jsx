import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import IncomeExpenseForm from "./IncomeExpenseForm";
import { useDispatch, useSelector } from "react-redux";

const AddTransactionCard = () => {
    const dispatch = useDispatch();

    const { transactionType } = useSelector((state) => state.income);

    const handleTransactionType = (e) => {
        dispatch({ type: "SET_TRANSACTION_TYPE", payload: e.target.value });
    };

    return (
        <div className="form_input">
            <TextField
                id="outlined-required"
                select
                label="Select Transaction Type"
                variant="outlined"
                required
                size="small"
                value={transactionType}
                onChange={(e) => handleTransactionType(e)}
                sx={{ width: "40%" }}
            >
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="savings">Savings</MenuItem>
            </TextField>

            <IncomeExpenseForm />
        </div>
    );
};

export default AddTransactionCard;
