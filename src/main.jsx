import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>

                <Home />

        </BrowserRouter>
    </React.StrictMode>

);
