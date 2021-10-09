import React from "react";
// import Button from 'react-bootstrap/Button';
// reactstrap components
import { Card, Container, Row, ListGroup } from "reactstrap";

import EmptyHeader from "components/Headers/EmptyHeader.js";
import EntryOrExit from "./EntryOrExit.js";
import './Details.css';
class Details extends React.Component {
    render() {
        return (
            <div className="Details">

                <EntryOrExit />
                <h1 className="home"> אינך רשומה במערכת,נא מלאי את הפרטים הבאים: </h1>

                <p class="rtl">

                    <label>שם פרטי:</label>
                    <input type="text" /><br></br>
                    <label>שם משפחה:</label>
                    <input type="text" /><br></br>
                    <label>מספר פלאפון:</label>
                    <input type="text" /><br></br>
                    <div class="dropdown">
                        <button class="dropbtn">מחליפה את עובדת:</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </p>
            </div>
        );
    }
}

export default Details;