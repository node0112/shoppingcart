import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart(objects){
    let products=objects.cartItems
    let name,price,img1
    console.log(objects.cartItems)
    const navigate = useNavigate()
    useEffect(()=>{
        removeItems()
        for(let i=0;i<products.length;i++){
            name=products[i].name
            price=products[i].price
            img1=products[i].image1
            createCartElement(price,name,10,img1)
        }
        function createCartElement(price,title,delivery,image){
            let cartCardContainer=document.querySelector('.cart-container')
            let card=document.createElement('div')
            card.classList.add('cart-card')
    
            let cartItemImage=document.createElement('img')
            cartItemImage.classList.add('cart-item-img')
    
            let rightContainer=document.createElement('div')
            rightContainer.classList.add('right-container')
            let cartPrice=document.createElement('div')
            cartPrice.classList.add('cart-price')
            let cartTitle=document.createElement('div')
            cartTitle.classList.add('cart-title')
            let cartDelivery=document.createElement('div')
            cartDelivery.classList.add('cart-delivery')
            let removeButton=document.createElement('button')
            removeButton.classList.add('remove-item')
            removeButton.classList.add('transition')
            
            cartPrice.textContent='$'+price
            cartTitle.textContent=title
            cartDelivery.textContent='delivered in '+delivery+' days'
            cartItemImage.src=image
            removeButton.textContent='Remove X'

            removeButton.addEventListener('click',()=>{
                objects.removeProduct(title)
                objects.decreaseTotal(price)
            })
    
            rightContainer.appendChild(cartPrice)
            rightContainer.appendChild(cartTitle)
            rightContainer.appendChild(cartDelivery)
            rightContainer.appendChild(removeButton)
            card.appendChild(cartItemImage)
            card.appendChild(rightContainer)
            cartCardContainer.appendChild(card)
        }
        function removeItems(){
            let grids=document.querySelector('.cart-container')
            while(grids.firstChild) {
            grids.removeChild(grids.lastChild)
          }}
        console.log('count')
    },[products])

    function mockOrderSuccess(){
        objects.showSpinner()
        setTimeout(() => {
            navigate('/order-success')
            objects.updateTotal(0)
            objects.setCart([])
        }, 1000);
    }
    return(
        <div className="main-container">
            <div className="cart-container">
            </div>
            <div className="total-cart-main">
                <div>Total: ${objects.totalPrice}</div>
                <button className="submit-order transition" onClick={()=>{mockOrderSuccess()}}>Checkout</button>
            </div>
        </div>
    )
}