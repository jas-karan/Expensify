import React from 'react'
import "./Main.css";
import { Divider } from "@material-ui/core";
import Form from "./Form";
import InfoCard from "./InfoCard";

function Main() {

    return (
        <div className="main">
            <h1>Add new Transaction</h1>
            <InfoCard />
            <Divider />
            <Form />
        </div>
    )
}

export default Main
