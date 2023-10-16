const initialState = {
    expense: [],
    expenseCategory: "All",
    selectFilter: "",
    loading: false,
    error: null,
};

const ExpenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EXPENSE_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_EXPENSE_SUCCESS":
            return {
                ...state,
                expense: action.payload,
                loading: false,
            };
        case "FETCH_EXPENSE_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the income data.",
            };
        case "ADD_EXPENSE_SUCCESS":
            return {
                ...state,
                expense: [...state.expense, action.payload],
                loading: false,
            };
        case "ADD_EXPENSE_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the income data.",
            };
        case "SET_EXPENSE_CATEGORY_FILTER":
            return {
                ...state,
                expenseCategory: action.payload,
            };
        default:
            return state;
    }
};

export default ExpenseReducer;
