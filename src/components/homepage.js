import { Link } from "react-router-dom";


export default function HomePage(){
    return(
        <div className="main-container">
            <div className="home-container">
                <div className="main-text">All New Airpods Pro Back In Stock</div>
                <Link to={'/shop'}><button className="shop-button transition">Shop Now</button></Link>
            </div>
        </div>
    )
}