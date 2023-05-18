import React, { useState } from "react";

export default function Timer({ timeRemaining }) {
    return (
        <div className="timeRemaining">
            <p>TIME REMAINING: <br /><span id="timeRemaining">{timeRemaining}</span>
            </p>
        </div>
    )
}