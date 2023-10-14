import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { MenuItem } from "@mui/material";
import { addIncome } from "../Redux/Actions/IncomeActions";
import { addExpense } from "../Redux/Actions/ExpenseAction";
import { addSavings } from "../Redux/Actions/SavingsAction";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
    "@media (max-width: 768px)": {
        width: 300,
    },
};

const IncomeExpenseForm = () => {
    const dispatch = useDispatch();

    const transactionTypeValue = useSelector(
        (state) => state.income.transactionType
    );

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newTransaction, setNewTransaction] = useState({
        name: "",
        description: "",
        amount: "",
        category: "",
        date: "",
    });

    const condition =
        newTransaction.name === "" ||
        newTransaction.description === "" ||
        newTransaction.amount === "" ||
        newTransaction.category === "" ||
        newTransaction.date === "";

    const handleSubmit = () => {
        if (condition) {
            alert("Kindly please fill in all the details");
        } else {
            if (transactionTypeValue === "income") {
                dispatch(addIncome(newTransaction));
            } else if (transactionTypeValue === "expense") {
                dispatch(addExpense(newTransaction));
            } else {
                dispatch(addSavings(newTransaction));
            }
            handleClose();
        }
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpen}
                color="info"
                disabled={!Boolean(transactionTypeValue)}
            >
                <AddCircleRoundedIcon sx={{ marginRight: "4px" }} />
                Add
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add new {transactionTypeValue} transaction
                    </Typography>

                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                        component="div"
                    >
                        <div className="modal_input">
                            <label htmlFor="address1">Name:</label>
                            <TextField
                                id="outlined-required"
                                label="Name"
                                variant="outlined"
                                required
                                size="small"
                                value={newTransaction.name}
                                onChange={(e) =>
                                    setNewTransaction((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="modal_input">
                            <label htmlFor="address1">Description:</label>
                            <TextField
                                id="outlined-required"
                                label="Description"
                                variant="outlined"
                                required
                                size="small"
                                value={newTransaction.description}
                                onChange={(e) =>
                                    setNewTransaction((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="modal_input">
                            <label htmlFor="address1">Amount:</label>
                            <TextField
                                id="outlined-required"
                                label="Amount"
                                variant="outlined"
                                required
                                type="number"
                                size="small"
                                value={newTransaction.amount}
                                onChange={(e) =>
                                    setNewTransaction((prev) => ({
                                        ...prev,
                                        amount: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                        <div className="modal_input">
                            <label htmlFor="address1">Category:</label>
                            {transactionTypeValue === "income" ? (
                                <TextField
                                    id="outlined-required"
                                    select
                                    label="Category"
                                    variant="outlined"
                                    required
                                    size="small"
                                    value={newTransaction.category}
                                    onChange={(e) =>
                                        setNewTransaction((prev) => ({
                                            ...prev,
                                            category: e.target.value,
                                        }))
                                    }
                                    sx={{ width: "50%" }}
                                >
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
                                    <MenuItem value="Rental Income">
                                        Rental Income
                                    </MenuItem>
                                    <MenuItem value="Consulting Fees">
                                        Consulting Fees
                                    </MenuItem>
                                    <MenuItem value="Royalties">
                                        Royalties
                                    </MenuItem>
                                    <MenuItem value="Savings Interest">
                                        Savings Interest
                                    </MenuItem>
                                    <MenuItem value="Gifts and Inheritance">
                                        Gifts and Inheritance
                                    </MenuItem>
                                    <MenuItem value="Online Sales">
                                        Online Sales
                                    </MenuItem>
                                    <MenuItem value="Miscellaneous">
                                        Miscellaneous
                                    </MenuItem>
                                </TextField>
                            ) : transactionTypeValue === "expense" ? (
                                <TextField
                                    id="outlined-required"
                                    select
                                    label="Category"
                                    variant="outlined"
                                    required
                                    size="small"
                                    value={newTransaction.category}
                                    onChange={(e) =>
                                        setNewTransaction((prev) => ({
                                            ...prev,
                                            category: e.target.value,
                                        }))
                                    }
                                    sx={{ width: "50%" }}
                                >
                                    <MenuItem value="Food and Dining">
                                        Food and Dining
                                    </MenuItem>
                                    <MenuItem value="Entertainment">
                                        Entertainment
                                    </MenuItem>
                                    <MenuItem value="Transportation">
                                        Transportation
                                    </MenuItem>
                                    <MenuItem value="Housing">Housing</MenuItem>
                                    <MenuItem value="Health and Fitness">
                                        Health and Fitness
                                    </MenuItem>
                                    <MenuItem value="Shopping">
                                        Shopping
                                    </MenuItem>
                                    <MenuItem value="Travel">Travel</MenuItem>
                                    <MenuItem value="Education">
                                        Education
                                    </MenuItem>
                                    <MenuItem value="Utilities">
                                        Utilities
                                    </MenuItem>
                                    <MenuItem value="Miscellaneous">
                                        Miscellaneous
                                    </MenuItem>
                                </TextField>
                            ) : (
                                <TextField
                                    id="outlined-required"
                                    select
                                    label="Category"
                                    variant="outlined"
                                    required
                                    size="small"
                                    value={newTransaction.category}
                                    onChange={(e) =>
                                        setNewTransaction((prev) => ({
                                            ...prev,
                                            category: e.target.value,
                                        }))
                                    }
                                    sx={{ width: "50%" }}
                                >
                                    <MenuItem value="Investment Portfolio">
                                        Investment Portfolio
                                    </MenuItem>
                                    <MenuItem value="Emergency Fund">
                                        Emergency Fund
                                    </MenuItem>
                                    <MenuItem value="Retirement Fund">
                                        Retirement Fund
                                    </MenuItem>
                                    <MenuItem value="Travel Fund">
                                        Travel Fund
                                    </MenuItem>
                                    <MenuItem value="Education Fund">
                                        Education Fund
                                    </MenuItem>
                                    <MenuItem value="Home Down Payment">
                                        Home Down Payment
                                    </MenuItem>
                                    <MenuItem value="Healthcare Fund">
                                        Healthcare Fund
                                    </MenuItem>
                                </TextField>
                            )}
                        </div>
                        <div className="modal_input">
                            <label htmlFor="address1">Date:</label>
                            <TextField
                                id="outlined-required"
                                variant="outlined"
                                required
                                type="date"
                                size="small"
                                value={newTransaction.date}
                                onChange={(e) =>
                                    setNewTransaction((prev) => ({
                                        ...prev,
                                        date: e.target.value,
                                    }))
                                }
                                sx={{ width: "50%" }}
                            />
                        </div>
                    </Typography>

                    <Typography
                        id="modal-modal-footer"
                        sx={{ mt: 2, display: "flex", gap: "1rem" }}
                        component="div"
                    >
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="small"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Add
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default IncomeExpenseForm;
