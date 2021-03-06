import React from 'react'
import "./Header.css"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { auth } from "../firebase"

function Header() {

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.icons8.com/fluent/50/000000/financial-growth-analysis.png" alt="" />
                <Link style={{ textDecoration: "none ", color: "black", marginLeft: '10px' }} to='/'><h1>Expensify</h1></Link>
                <Button variant="contained" className="header__logout__small" style={{ backgroundColor: '#12b5c4', color: 'white', marginLeft: '20px' }} onClick={() => auth.signOut()}>Logout</Button>
            </div>
            <div className="header__right">
                <Link style={{ textDecoration: "none ", color: "black" }} to="/"><h4 className="navLink">Home</h4></Link>
                <Link style={{ textDecoration: "none ", color: "black" }} to="/dashboard"><h4 className="navLink">Dashboard</h4></Link>
                <Link style={{ textDecoration: "none ", color: "black" }} to="/about"><h4 className="navLink">Author</h4></Link>
                <Button variant="contained" className="header__logout" style={{ backgroundColor: '#12b5c4', color: 'white' }} onClick={() => auth.signOut()}>Logout</Button>
            </div>
        </div>
    )
}

export default Header
