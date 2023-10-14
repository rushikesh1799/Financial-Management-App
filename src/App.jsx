import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExpense } from "./Redux/Actions/ExpenseAction";
import { fetchSavings } from "./Redux/Actions/SavingsAction";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExpense());
        dispatch(fetchSavings());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
            </Routes>
        </>
    );
}

export default App;
