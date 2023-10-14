import axios from "axios";

export const fetchIncome = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_INCOME_LOADING" });
            const response = await axios.get(
                "https://financial-management-backend-api.rushikeshbunge1.repl.co/api/incomes"
            );
            const data = response.data.incomes;
            dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
        } catch (error) {
            console.log("Error fetching the income data,", error);
            dispatch({ type: "FETCH_INCOME_FAILURE" });
        }
    };
};

export const addIncome = (income) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://financial-management-backend-api.rushikeshbunge1.repl.co/api/incomes`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(income),
                }
            );
            const data = await response.json();
            if (data) {
                dispatch({ type: "ADD_INCOME_SUCCESS", payload: data.income });
            }
        } catch (error) {
            dispatch({ type: "ADD_INCOME_FAILURE" });
        }
    };
};
