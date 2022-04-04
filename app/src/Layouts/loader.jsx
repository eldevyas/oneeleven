import React from 'react';
import './../Dist/Pages/Loader.css';

export default function Loader() {
    return (
        <div id="Loader">
            <div className="container">
                <div className="Logo">
                    <div className="MainPath">
                        <div id="Path-1"></div>
                        <div id="Path-2"></div>
                        <div id="Path-3"></div>
                    </div>

                </div>

                <div className="ProgressBar">
                    <div className="Progress"></div>
                </div>
            </div>
        </div>
    )
}