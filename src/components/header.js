import React from "react";
import logo from '../images/logo.png'

export default function Header(){
    return ( //link logo homepage
        <div className="header">
            <div className="logo-container"><img className="header-logo transition" src={logo}></img></div>
            <ul className="header-list links">
                <li className="transition"><a className="header-link transition" >All</a></li>{/* links to shop page with only specific rendered cards; just a mock */}
                <li className="transition"><a className="header-link transition">Airpods</a></li>
                <li className="transition"><a className="header-link transition">Iphones</a></li>
                <li className="transition"><a className="header-link transition">Macs</a></li>
            </ul>
            <ul className="header-list user-menu">
                <li><span className="material-icons transition ">account_circle</span></li> {/* links to no page; just a mock */}
                <li><span className="material-icons transition ">shopping_bag</span><div className="total-cart">$233</div></li> {/* links to cart page */}
            </ul>
        </div>
    )
}