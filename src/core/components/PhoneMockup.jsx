import React from 'react';
import './PhoneMockup.css';

const PhoneMockup = ({ flutterAppUrl }) => {
    return (
        <div className="phone-container">
            <div className="phone-case">

                {/* LAYER 1: The Screen (Bottom) */}
                <div className="phone-screen">
                    <div className="iframe-wrapper">
                        <iframe
                            src={flutterAppUrl}
                            title="Flutter Payment Demo"
                            frameBorder="0"
                            allow="payment"
                        />
                    </div>
                </div>

                {/* LAYER 2: Hardware Overlays (Top) */}
                <div className="phone-dynamic-island">
                    <div className="camera-lens"></div>
                </div>
                <div className="home-indicator"></div>
                <div className="screen-glare"></div>

                {/* LAYER 3: Outer Physical Buttons */}
                <div className="volume-up"></div>
                <div className="volume-down"></div>
                <div className="power-button"></div>

            </div>
        </div>
    );
};

export default PhoneMockup;