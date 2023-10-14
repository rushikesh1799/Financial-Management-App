import React from "react";
import "./components.css";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const handleSeletedItem = (e) => {
        // setSelectedItem(e.target.value);
        dispatch({
            type: "SELECT_SELECTEDITEM",
            payload: e.target.value,
        });
    };

    return (
        <div className="navbar_wrapper">
            <div className="title">
                <ReceiptLongIcon />
                <div className="title_name">
                    <span>Budget</span>
                    <span>Buddy</span>
                </div>
            </div>
            <div className="nav_options">
                <button onClick={handleSeletedItem} value="income">
                    Income
                </button>
                <button onClick={handleSeletedItem} value="expense">
                    Expense
                </button>
                <button onClick={handleSeletedItem} value="savings">
                    Savings
                </button>
                <button
                    value="reports"
                    onClick={handleSeletedItem}
                    className="reports_btn"
                >
                    Reports
                </button>
            </div>
            <div className="nav_right">
                <a
                    target="_blank"
                    href="https://github.com/rushikesh1799/Financial-Management-App"
                    className="github_btn"
                >
                    Github
                </a>
            </div>
        </div>
    );
};

export default Navbar;
