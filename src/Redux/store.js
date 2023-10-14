import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IncomeReducer from "./Reducers/IncomeReducer";
import ExpenseReducer from "./Reducers/ExpenseReducer";

const store = createStore(
    combineReducers({
        income: IncomeReducer,
        expense: ExpenseReducer,
    }),
    applyMiddleware(thunk)
);

export default store;
