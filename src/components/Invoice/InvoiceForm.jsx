import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InvoiceForm.css";

function InvoiceForm() {
    return (
        <div className="border">
            <header className="header">Shecodes Mentor Invoice</header>
            <div className="colour"> </div>

            <div className="abn">
            <label htmlFor="abn">ABN:</label>
            <input type="text" placeholder="Enter your ABN" />
            </div>
            <div className="date">
                <label htmlFor="date">Date: </label>
                <input type="date" placeholder="Enter the date" />
            </div>
            <div className="name">
            <label htmlFor="firstname">First name: </label>
            <input type="text" placeholder="Enter your first name" />
            <label htmlFor="lastname">Last name: </label>
            <input type="text" placeholder="Enter your last name" />
            </div>
            <div className="amount">
                <label htmlFor="amount">Amount payable: $</label>
                <input type="number" placeholder="0.00"/>
                <label htmlFor="gst">GST: $</label>
                <input type="number" placeholder="0.00"/>
            </div>
            <div className="bank">
                <h2>Payment details:</h2>
                <label htmlFor="Accname">Account name: </label>
                <input type="text" placeholder="Enter full name"/>
                <label htmlFor="Accnum">Account number: </label>
                <input type="number" placeholder="Enter account number"/>
                <label htmlFor="bsb">BSB: </label>
                <input type="number" placeholder="Enter BSB"/>
            </div>
            <div className="colour"> </div>
            <footer className="thankyou">Thank you!</footer>

        </div>
    );
}

export default InvoiceForm;