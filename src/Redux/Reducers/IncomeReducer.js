const initialState = {
    income: [],
    incomeCategory: "All",
    seletectedItem: "income",
    transactionType: "",
    loading: false,
    error: null,
};

const IncomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_INCOME_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_INCOME_SUCCESS":
            return {
                ...state,
                income: action.payload,
                loading: false,
            };
        case "FETCH_INCOME_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the income data.",
            };
        case "ADD_INCOME_SUCCESS":
            return {
                ...state,
                income: [...state.income, action.payload],
                loading: false,
            };
        case "ADD_INCOME_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the income data.",
            };
        case "SET_TRANSACTION_TYPE":
            return {
                ...state,
                transactionType: action.payload,
            };
        case "SELECT_SELECTEDITEM":
            return {
                ...state,
                seletectedItem: action.payload,
            };
        case "SET_INCOME_CATEGORY_FILTER":
            return {
                ...state,
                incomeCategory: action.payload,
            };
        default:
            return state;
    }
};

export default IncomeReducer;
