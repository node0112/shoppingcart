import React from "react";
import Header from "./header";

export default function ShopPage(){
    return(
        <div className="main-container">
            <div className="sidebar">
                <div className="filters-container">
                    <div>
                        <div className="sidebar-heading">Filter-by:</div>
                        <ul className="sidebar-list">
                            <li><label><input type="radio" name="filter"/>Relevance</label></li>
                            <li><label><input type="radio" name="filter"/>Type</label></li>
                            <li><label><input type="radio" name="filter"/>Ratings</label></li>
                        </ul>
                    </div>
                    <div>
                        <div className="sidebar-heading">Sort-by:</div>
                        <ul className="sidebar-list">
                            <li><label><input type="radio" name="sort"/>Price High To Low</label></li>
                            <li><label><input type="radio" name="sort"/>Price Low To High</label></li>
                            <li><label><input type="radio" name="sort"/>Orders</label></li>
                            <li><label><input type="radio" name="sort"/>Delivery Time</label></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="products-container">
                
            </div>
        </div>
    )
}