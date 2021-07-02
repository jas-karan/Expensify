import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./Welcome.css";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ExpenseTrackerContext } from "../Context/context";
import { AuthContext } from "../Context/AuthContext";


function Welcome({ where }) {
    const { user } = useContext(AuthContext);

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
                <Avatar className="welcome__avatar" src={user.photoURL}>{user.displayName[0]}</Avatar>
                <div className="welcome__message">
                    <h1 style={{ fontWeight: '500', marginBottom: '10px' }}>Welcome, {user.displayName}</h1>
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
