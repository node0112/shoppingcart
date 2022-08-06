import { Link } from 'react-router-dom'
import orderSucces from '../images/order_success.png'

export default function OrderSuccessPage(){
    return(
        <div className="main-container">
            <div className='card-container'>
                <div className="order-card">
                <img className='order-img' src={orderSucces}></img>
                    <div><div className="yay-msg"> Yay!</div>
                    <div className='order-text'> Order Placed Successfully!</div>
                    <div className='delivery order-text'>Your order will be delivered by next week. </div></div>
                    <div className='payment'>Paid Using Visa Ending With *509</div>
                    <Link to={'/'}><button className='continue-shopping'>Continue Shopping</button></Link>
                </div>
            </div>
        </div>
    )
}