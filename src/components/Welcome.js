import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./Welcome.css";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ExpenseTrackerContext } from "../Context/context";

function Welcome({ where }) {
    const { balance } = useContext(ExpenseTrackerContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div className="welcome">
            <div className="welcome__left">
                <Avatar className="welcome__avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQF3b0fFtiszXQ/profile-displayphoto-shrink_200_200/0/1622710313970?e=1628121600&v=beta&t=7OZ8xmsv9yE6ZW-5XXA0JgteUAi5imGNFqlj88mnxyc" />
                <div className="welcome__message">
                    <h1 style={{ fontWeight: '500', marginBottom: '10px' }}>Welcome, Jaskaran Singh</h1>
                    <p style={{ fontWeight: '250' }}>{where === 'dashboard' ? "This is your Expensify Dashboard, Overview of everything" :
                        "Head over to Dashboard to see your transaction history"}</p>
                </div>
            </div>
            <div className="welcome__right">
                <Button style={{ marginBottom: '10px', color: 'whitesmoke', backgroundColor: '#12b5c4' }} aria-describedby={id} variant="contained" onClick={handleClick}>
                    Check Balance
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography style={{ padding: '10px' }}>Your Current balance is <span style={{ fontWeight: 'bold' }}>${balance}</span></Typography>
                </Popover>
            </div>
        </div>
    )
}

export default Welcome
