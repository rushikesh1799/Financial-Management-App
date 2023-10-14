import { MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import IncomeExpenseForm from "./IncomeExpenseForm";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
    const dispatch = useDispatch();
    const transactionTypeValue = useSelector(
        (state) => state.income.transactionType
    );

    const handleTransactionType = (e) => {
        dispatch({ type: "SET_TRANSACTION_TYPE", payload: e.target.value });
    };

    return (
        <div className="form_input transaction-card">
            <TextField
                id="outlined-required"
                select
                label="Transaction Type"
                variant="outlined"
                required
                size="small"
                value={transactionTypeValue}
                onChange={(e) => handleTransactionType(e)}
                sx={{ width: "180px" }}
            >
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="savings">Savings</MenuItem>
            </TextField>
            <IncomeExpenseForm />
        </div>
    );
};

export default Filters;
