import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExpense } from "./Redux/Actions/ExpenseAction";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExpense());
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
