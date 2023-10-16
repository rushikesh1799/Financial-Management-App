import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import IncomeVsExpense from "./IncomeVsExpense";
import ExpenseBreakdown from "./ExpenseBreakdown";

const Reports = () => {
    const [reportsType, setReportsType] = useState("incomevsexpense");

    const handleReportsType = (e) => {
        setReportsType(e.target.value);
    };

    return (
        <div className="main-rightside">
            <div className="form_input">
                <TextField
                    id="outlined-required"
                    select
                    label="Select Reports Type"
                    variant="outlined"
                    required
                    size="small"
                    value={reportsType}
                    onChange={(e) => handleReportsType(e)}
                    sx={{ width: "40%" }}
                >
                    <MenuItem value="incomevsexpense">
                        Income vs Expenses
                    </MenuItem>
                    <MenuItem value="expensebreakdown">
                        Expense Breakdown
                    </MenuItem>
                </TextField>
            </div>
            {reportsType === "incomevsexpense" ? (
                <IncomeVsExpense />
            ) : (
                <ExpenseBreakdown />
            )}
        </div>
    );
};

export default Reports;
