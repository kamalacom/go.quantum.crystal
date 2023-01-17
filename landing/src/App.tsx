import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './css/style.css';
import * as ReactDOM from 'react-dom/client';
import Welcome from "./pages/Welcome";
import Auth from './pages/Auth';
import Encoder from './pages/Encoder';
import CrmCallBack from "./pages/CrmCallBack";

function App() {

    return (
        <Router basename="/">
            <Routes>
                <Route path={"/auth"} element={<Auth />} />
                <Route path={"/encoder"} element={<Encoder />} />
                <Route path={"/crmCallBack"} element={<CrmCallBack />} />
                <Route path={"/*"} element={<Welcome />} />
            </Routes>
        </Router>
    )
}

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);