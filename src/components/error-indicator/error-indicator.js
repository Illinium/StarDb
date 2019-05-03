import React from 'react';
import './error-indicator.css';
import img from './Death_Star-128.png';

const ErrorIndicator = () => {
    return (
        <div className="error-message">
            <img src={img} alt='lost img'></img>
            <h4>BOOM!</h4>
            <p>something has gone terribly wrong</p>
            <p>(but we already sent droids to fix it!)</p>
        </div>
    )
}

export default ErrorIndicator;