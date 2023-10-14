import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useSelector } from "react-redux";

const TransactionCard = ({ transaction }) => {
    const { seletectedItem } = useSelector((state) => state.income);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);

        if (date.toDateString() === now.toDateString()) {
            return "Today";
        } else if (date.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        } else {
            const options = { year: "numeric", month: "short", day: "numeric" };
            return date.toLocaleDateString(undefined, options);
        }
    }

    return (
        <div className="transaction-card">
            <div className="transaction-card-left">
                {seletectedItem === "income" ? (
                    <AccountBalanceIcon
                        fontSize="large"
                        sx={{ marginRight: "8px" }}
                    />
                ) : seletectedItem === "expense" ? (
                    <AccountBalanceWalletIcon
                        fontSize="large"
                        sx={{ marginRight: "8px" }}
                    />
                ) : (
                    <SavingsIcon fontSize="large" sx={{ marginRight: "8px" }} />
                )}

                <span className="transaction-card-category">
                    {transaction.category}
                </span>
            </div>
            <div className="transaction-card-right">
                <span className="transaction-card-price">
                    -₹{transaction.amount}.00
                </span>
                <span className="transaction-card-date">
                    {formatDate(transaction.date)}
                </span>
            </div>
        </div>
    );
};

export default TransactionCard;
