import logo from './logo.svg';
import './App.css';
import './components/site.css'
import './reset.css'
import Header from './components/header';
import HomePage from './components/homepage';
import { useEffect, useState } from 'react';
import ShopPage from './components/shoppage';
import { BrowserRouter, Routes, Route } from "react-router-dom";



//airpods images
import airpods2_1 from './images/airpods2_1.jpeg'
import airpods2_2 from './images/airpods2_2.jpeg'
import airpods3_1 from './images/airpods3_1.jpeg'
import airpods3_2 from './images/airpods3_2.webp'
import airpodsmax_1 from './images/airpodsmax_1.jpeg'
import airpodsmax_2 from './images/airpodsmax_2.jpeg'
import airpodspro_1 from './images/airpodspro_1.jpeg'
import airpodspro_2 from './images/airpodspro_2.jpeg'

//iphone images
import iphone12_1 from './images/iphone12_1.png'
import iphone12_2 from './images/iphone12_2.png'
import iphone12pro_1 from './images/iphone12pro_1.jpeg'
import iphone12pro_2 from './images/iphone12pro_2.jpg'
import iphone13pro_1 from './images/iphone13pro_1.jpg'
import iphone13pro_2 from './images/iphone13pro_2.jpeg'
import iphoneSe_1 from './images/iphonese_1.jpg'
import iphoneSe_2 from './images/iphonese_2.jpg'

//mac images
import imac_1 from './images/imac_1.jpeg'
import imac_2 from './images/imac_2.jpeg'
import mba_1 from './images/mba_1.jpeg'
import mba_2 from './images/mba_2.jpeg'
import mbp13_1 from './images/mbp13_1.jpeg'
import mbp13_2 from './images/mbp13_2.jpeg'
import mbp14_1 from './images/mbp14_1.jpeg'
import mbp14_2 from './images/mbp14_2.jpeg'
import mbp16_1 from './images/mbp16_1.jpeg'
import mbp16_2 from './images/mbp16_2.jpeg'

//accessories images
import iphoneMagsafe from './images/iphoneMagsafe.jpeg'
import lightening_cable from './images/lightening_cable.jpeg'
import macbookCharger from './images/macbook-charger.jpg'
import magsafeCase from './images/magsafe_case.jpeg'
import magsafe from './images/magsafe.jpeg'
import pradaCase from './images/prada_airpods_case.jpg'

//extras
import orderSuccess from './images/order_success.png'
import Cart from './components/cart';



function App() {
  useEffect(()=>{
    setTimeout(() => {
      let links=document.querySelectorAll('.header-link')
      links.forEach(link => {
        link.addEventListener('click',()=>{
          setTimeout(() => {
            renderShopItems(link)
          }, 500); 
        })
      
      });
      let bag=document.querySelector('.bag')
      bag.addEventListener('click',()=>{
        //render cart
      })
    }, 100)
  },[Header])


  
  //define arrays here
    var products=[
       [//airpods
        {
          name: 'airpods pro',
          price: 249,
          image1: airpodspro_1,
          image2: airpodspro_2
        },
        {
          name: 'airpods 2nd genereation',
          price: 139,
          image1: airpods2_1,
          image2: airpods2_2
        },
        {
          name: 'airpods 3rd genereation',
          price: 179,
          image1: airpods3_1,
          image2: airpods3_2
        },
        {
          name: 'airpods max',
          price: 500,
          image1: airpodsmax_1,
          image2: airpodsmax_2
        },
      ],
      [//iphones
        {
          name: 'iphone 12',
          price: 599,
          image1: iphone12_1,
          image2: iphone12_2
        },
        {
          name: 'iphone 12 pro',
          price: 899,
          image1: iphone12pro_1,
          image2: iphone12pro_2
        },
        {
          name: 'iphone 13 pro',
          price: 999,
          image1: iphone13pro_1,
          image2: iphone13pro_2
        },
        {
          name: 'iphone SE',
          price: 429,
          image1: iphoneSe_1,
          image2: iphoneSe_2
        }
    ],
      [//macs
        {
          name: 'Imac 2021 8gb 1tb i5',
          price: 800,
          image1: imac_1,
          image2: imac_2
        },
        {
          name: 'Macbook Pro 13 Inch M2 8gb 256gb',
          price: 1199,
          image1: mbp13_1,
          image2: mbp13_2
        },
        {
          name: 'Macbook Pro 14 inch 8gb 16gb 512gb ',
          price: 1849,
          image1: mbp14_1,
          image2: mbp14_2
        },
        {
          name: 'Macbook Pro 16 inch 16gb 16gb 1Tb ',
          price: 2499,
          image1: mbp16_1,
          image2: mbp16_2
        },
      ],
      [//accessories
        {
          name: 'MagSafe Clear Case for iphone',
          price: 49,
          image1: magsafeCase,
          image2: magsafeCase
        },
        {
          name: 'lightening cable 1m',
          price: 19,
          image1: lightening_cable,
          image2: lightening_cable
        },
        {
          name: 'magSafe duo charger',
          price: 129,
          image1: magsafe,
          image2: magsafe
        },
        {
          name: 'magSafe charger for iphone',
          price: 39,
          image1: iphoneMagsafe,
          image2: iphoneMagsafe
        },
        {
          name: 'magSafe charger for Mac',
          price: 120,
          image1: macbookCharger,
          image2: macbookCharger
        },
        {
          name: 'Prada case for airpods gen 1 & 2',
          price: 550,
          image1: pradaCase,
          image2: pradaCase
        },
      ]
    ]
  //------

  const deliveryDays=[3,4,5,6,7,8,9,10]
  const [pageToRender,setPageToRender]=useState('shop')
  const [total,setTotal]=useState(233)
  const [cart,setCart]=useState([{
    name: 'airpods pro',
    price: 249,
    image1: airpodspro_1,
    image2: airpodspro_2
  },
  {
    name: 'airpods 2nd genereation',
    price: 139,
    image1: airpods2_1,
    image2: airpods2_2
  },
  {
    name: 'airpods 3rd genereation',
    price: 179,
    image1: airpods3_1,
    image2: airpods3_2
  },])
  const updateTotal = (price)=>setTotal((currentTotal) => currentTotal+price)
  const decreaseTotal= (price)=>setTotal((currentTotal) => currentTotal-price)
  let selected=''
  let prevSelected=''
  let rendered=false
  
  var cartArrayPos=0

  function pushToArray(elements,number){
      if(rendered===false){let productsArray=products[number]
      let name,price,img1,img2
      for(let i=0;i<productsArray.length;i++){
        name=productsArray[i].name
        price=productsArray[i].price
        img1=productsArray[i].image1
        img2=productsArray[i].image2
        let deliveryTime=deliveryDays[selectRandom(deliveryDays.length)]
        createProductCard(name,price,img1,img2,deliveryTime,productsArray[i])
      }
    }
  }
  function renderShopItems(link){
    if(link.textContent!=selected){
      rendered=false
      selected=link.textContent
      //showSpinner() //disabled for development
      checkSelected()
      let currentSelection=(link.textContent).toLowerCase()
      if(currentSelection === "airpods"){
        removeItems()
        pushToArray(products[0],0)
        pushToArray(products[3],3)
        rendered=true
      }
      else if(currentSelection === 'iphones'){
        removeItems()
        pushToArray(products[1],1)
        pushToArray(products[3],3)
        rendered=true
      }
      else if(currentSelection === 'macs'){
        removeItems()
        pushToArray(products[2],2)
        pushToArray(products[3],3)
        rendered=true
      }
      else if(currentSelection === 'all'){
        removeItems()
        pushToArray(products[0],0)
        pushToArray(products[1],1)
        pushToArray(products[2],2)
        pushToArray(products[3],3)
        rendered=true
      }
    }
  }
  function removeItems(){
    let grids=document.querySelector('.products-container')
    while(grids.firstChild) {
    grids.removeChild(grids.lastChild)
  }
  }
  function checkSelected(){
    let links=document.querySelectorAll('.header-link')
      links.forEach(link => {
       if(link.textContent === selected){
        link.classList.add('selected')
       }
       else{
        link.classList.remove('selected')
       }
      });
  }
  function showSpinner(){
    let loadingScreen=document.querySelector('.loading-screen')
    loadingScreen.classList.remove('hide')
    setTimeout(() => {
      loadingScreen.classList.add('hide')
    }, 1500);
  }
  function removeSelection(){
    let links=document.querySelectorAll('.header-link')
      links.forEach(link => {link.classList.remove('selected')})
      selected=''
    }
  function createProductCard(name,price,img1,img2,delivery,productId){

    let productCardContainer=document.querySelector('.products-container')

    let card=document.createElement('div')
    card.classList.add('product-card')

    let productImage=document.createElement('img')
    productImage.classList.add('product-image')

    let productPrice=document.createElement('div')
    productPrice.classList.add('product-price')
    
    let productTitle=document.createElement('div')
    productTitle.classList.add('product-heading')

    let deliveryTime=document.createElement('div')
    deliveryTime.classList.add('delivery-time')
    let text=document.createElement('div')
    let deliveryTimeLogo=document.createElement('span')
    deliveryTimeLogo.classList.add('material-icons')
    deliveryTimeLogo.textContent='inventory_2'
    deliveryTime.appendChild(deliveryTimeLogo)
    deliveryTime.appendChild(text)

    let addToBagButton=document.createElement('button')
    addToBagButton.classList.add('add-to-button')
    addToBagButton.textContent="Add To Bag"

    productImage.src=img1 //change all of these
    productTitle.textContent=name
    productPrice.textContent='$'+price
    text.textContent='Delivered in '+delivery+' days' //deliverytime

    card.addEventListener('mouseover',()=>{productImage.src=img2}) //changes image to second image
    card.addEventListener('mouseout',()=>{productImage.src=img1}) //changes back image to original image
    addToBagButton.addEventListener('click',()=>{
     updateTotal(price)
     setCart(cart=>[...cart,productId])
     console.log(cart)
     //cart[cartArrayPos]=productId
      document.querySelector('.bag').style.color='yellowgreen'
      setTimeout(() => {
        document.querySelector('.bag').style.color=''
      }, 1000);
      cartArrayPos++
      console.log(cart)
    })

    card.appendChild(productImage)
    card.appendChild(productPrice)
    card.appendChild(productTitle)
    card.appendChild(deliveryTime)
    card.appendChild(addToBagButton)

    productCardContainer.appendChild(card)
  }
  function selectRandom(end){
    let selectedProduct=Math.floor(Math.random() * (end));
    return selectedProduct
  }
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header total={total}  removeSelected={removeSelection}/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/bag" element={<Cart cartItems={cart} totalPrice={total} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
