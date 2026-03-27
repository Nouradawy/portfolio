import './index.css'
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, useLocation} from "react-router-dom";
import Home from "./Home.jsx";
import ReactGA from "react-ga4";


const TRACKING_ID = "G-D2VK1VY7JK"; // Replace with your real ID
ReactGA.initialize(TRACKING_ID);

// 2. Create a small wrapper to track page views
const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search
        });
    }, [location]);

    return null; // This component doesn't render anything
};


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <AnalyticsTracker />
                <Home />

        </BrowserRouter>
    </React.StrictMode>

);
