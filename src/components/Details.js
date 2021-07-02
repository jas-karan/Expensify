import React from 'react'
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2"
import "./Details.css";
import useTransactions from '../useTransactions';

function Details({ title }) {
    const { total, chartData } = useTransactions(title);

    if (chartData.datasets[0].data.length) {
        return (
            <div className={title === 'Income' ? 'details__income' : 'details__expenses'}>
                <Card className="card">
                    <CardHeader title={title} className="details__header" />
                    <CardContent>
                        <Typography variant="h5">${total}</Typography>
                        <Doughnut data={chartData} />
                    </CardContent>
                </Card>
            </div>
        )
    }
    else {
        return null
    }
}

export default Details
