import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./Components/Dashboard";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
            </Routes>
        </>
    );
}

export default App;
