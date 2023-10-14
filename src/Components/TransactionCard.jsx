import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const TransactionCard = ({ transaction }) => {
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
                <RestaurantIcon fontSize="large" sx={{ marginRight: "8px" }} />
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
