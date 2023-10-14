import React from "react";
import "./components.css";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Navbar = ({ seletectedItem, setSelectedItem }) => {
    const handleSeletedItem = (e) => {
        setSelectedItem(e.target.value);
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
            </div>
            <div>
                <button
                    value="reports"
                    onClick={handleSeletedItem}
                    className="reports_btn"
                >
                    Reports
                </button>
            </div>
        </div>
    );
};

export default Navbar;
