import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";

export default function Header(total){
    const navigate = useNavigate()
    
    return ( //link logo homepage
        <div className="header">
            <Link to={'/'} onClick={total.removeSelected()}><div className="logo-container"><img className="header-logo transition" src={logo}></img></div></Link>
            <ul className="header-list links">
                <li className="transition" onClick={()=>{navigate('/shop')}}><a className="header-link transition" >All</a></li>{/* links to shop page with only specific rendered cards; just a mock */}
                <li className="transition"><a className="header-link transition">Airpods</a></li>
                <li className="transition"><a className="header-link transition">Iphones</a></li>
                <li className="transition"><a className="header-link transition">Macs</a></li>
            </ul>
            <ul className="header-list user-menu">
                <li><span className="material-icons transition ">account_circle</span></li> {/* links to no page; just a mock */}
                <li onClick={()=>{navigate('/bag')}}><span className="material-icons transition bag">shopping_bag</span><div className="total-cart">${total.total}</div></li> {/* links to cart page */}
            </ul>
        </div>
    )
}