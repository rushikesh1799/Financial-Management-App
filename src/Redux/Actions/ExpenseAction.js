import axios from "axios";

export const fetchExpense = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_EXPENSE_LOADING" });
            const response = await axios.get(
                "https://financial-management-backend-api.rushikeshbunge1.repl.co/api/expenses"
            );
            const data = response.data.expenses;
            dispatch({ type: "FETCH_EXPENSE_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the expense data,", error);
            dispatch({ type: "FETCH_EXPENSE_FAILURE" });
        }
    };
};

export const addExpense = (expense) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://financial-management-backend-api.rushikeshbunge1.repl.co/api/expenses`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(expense),
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: data.expense });
            }
        } catch (error) {
            dispatch({ type: "ADD_EXPENSE_FAILURE" });
        }
    };
};
