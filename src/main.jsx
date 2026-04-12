import './core/styles/index.css'
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, useLocation} from "react-router-dom";
import Home from "./features/portfolio/presentation/PortfolioPage.jsx";
import ReactGA from "react-ga4";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const initialPayPalOptions = {
    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "test", // Replace with your actual PayPal Client ID
    currency: "USD",
    intent: "capture",
};


const TRACKING_ID = "G-D2VK1VY7JK"; // Replace with your real ID
if (typeof window !== 'undefined') {
    ReactGA.initialize(TRACKING_ID);
}

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


export function App() {
    return (
        <React.StrictMode>
            <PayPalScriptProvider options={initialPayPalOptions}>
                <Elements stripe={stripePromise}>
                    <BrowserRouter basename={import.meta.env.BASE_URL}>
                        <AnalyticsTracker />
                        <Toaster position="bottom-right" />
                        <Home />
                    </BrowserRouter>
                </Elements>
            </PayPalScriptProvider>
        </React.StrictMode>
    );
}


// Only mount in the browser (prerender runs in a Node context).
if (typeof document !== 'undefined') {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
