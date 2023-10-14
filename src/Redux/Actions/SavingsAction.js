import axios from "axios";

export const fetchSavings = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_SAVINGS_LOADING" });
            const response = await axios.get(
                "https://financial-management-backend-api.rushikeshbunge1.repl.co/api/savings"
            );
            const data = response.data.savings;
            dispatch({ type: "FETCH_SAVINGS_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the savings data,", error);
            dispatch({ type: "FETCH_SAVINGS_FAILURE" });
        }
    };
};

export const addSavings = (saving) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://financial-management-backend-api.rushikeshbunge1.repl.co/api/savings`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(saving),
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({
                    type: "ADD_EXPENSE_SUCCESS",
                    payload: data.saving,
                });
            }
        } catch (error) {
            dispatch({ type: "ADD_EXPENSE_FAILURE" });
        }
    };
};
