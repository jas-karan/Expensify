import React from 'react'
import "./Header.css"
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.icons8.com/fluent/50/000000/financial-growth-analysis.png" alt="" />
                <h1>Expensify</h1>
            </div>
            <div className="header__right">
                <Link style={{ textDecoration: "none ", color: "black" }} to="/"><h4 className="navLink">Home</h4></Link>
                <Link style={{ textDecoration: "none ", color: "black" }} to="/dashboard"><h4 className="navLink">Dashboard</h4></Link>
                <Link style={{ textDecoration: "none ", color: "black" }} to="/about"><h4 className="navLink">Author</h4></Link>
                <Avatar className="header__avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQF3b0fFtiszXQ/profile-displayphoto-shrink_200_200/0/1622710313970?e=1628121600&v=beta&t=7OZ8xmsv9yE6ZW-5XXA0JgteUAi5imGNFqlj88mnxyc" />
                <h4>Jaskaran</h4>
            </div>
        </div>
    )
}

export default Header
