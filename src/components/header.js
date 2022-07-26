import React from "react";
import logo from '../images/logo.png'

export default function Header(){
    return ( //link logo homepage
        <div className="header">
            <img className="header-logo transition" src={logo}></img>
            <ul className="header-list links">
                <li><a className="header-link"></a></li>{/* links to shop page with only specific rendered cards; just a mock */}
            </ul>
            <ul className="user-menu">
                <li></li> {/* links to no page; just a mock */}
                <li></li> {/* links to cart page */}
            </ul>
        </div>
    )
}