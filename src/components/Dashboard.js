import React from 'react'
import "./Dashboard.css"
import List from "./List";
import Details from "./Details"
import Welcome from "./Welcome.js";

function Dashboard() {
    return (
        <div>
            <Welcome where="dashboard" />
            <div className="dashboard">
                <div className="dashboard__top">
                    <Details title="Income" />
                    <Details title="Expense" />
                </div>
                <div className="dashboard__bottom">
                    <h2>Transaction History </h2>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
