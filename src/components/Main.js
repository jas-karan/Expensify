import React, { useContext } from 'react'
import "./Main.css";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import Form from "./Form";
import List from "./List";
import { ExpenseTrackerContext } from "../Context/context";
import InfoCard from "./InfoCard";

function Main() {
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <div className="main">
            <Card>
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
                <CardContent>
                    <Typography variant="h5" align="center">Total Balance: ${balance}</Typography>
                    <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                        <InfoCard />
                    </Typography>
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Main
