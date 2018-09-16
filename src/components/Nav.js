import React from "react";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg ">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-brand" href="#">Simple React Example</li>
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link"  href="/public">Public</a></li>
                <li className="nav-item"><a className="nav-link"  href="/protected">Protected</a></li>
                <li className="nav-item"><a className="nav-link"  href="/login">Login</a></li>
                <li className="nav-item"><a className="nav-link"  href="/funwithstate">Fun with state</a></li>
            </ul>
        </nav>
    )
}

export default Nav;