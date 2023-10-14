import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IncomeReducer from "./Reducers/IncomeReducer";
import ExpenseReducer from "./Reducers/ExpenseReducer";
import SavingsReducer from "./Reducers/SavingsReducer";

const store = createStore(
    combineReducers({
        income: IncomeReducer,
        expense: ExpenseReducer,
        savings: SavingsReducer,
    }),
    applyMiddleware(thunk)
);

export default store;
