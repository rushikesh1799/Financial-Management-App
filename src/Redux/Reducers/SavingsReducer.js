const initialState = {
    savings: [],
    savingsCategory: "",
    selectFilter: "",
    loading: false,
    error: null,
};

const SavingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SAVINGS_LOADING":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_SAVINGS_SUCCESS":
            return {
                ...state,
                savings: action.payload,
                loading: false,
            };
        case "FETCH_SAVINGS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching the savings data.",
            };
        case "ADD_SAVINGS_SUCCESS":
            return {
                ...state,
                savings: [...state.savings, action.payload],
                loading: false,
            };
        case "ADD_SAVINGS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "Error fetching or adding the saving data.",
            };
        case "SET_SAVINGS_CATEGORY_FILTER":
            return {
                ...state,
                savingsCategory: action.payload,
            };
        default:
            return state;
    }
};

export default SavingsReducer;
