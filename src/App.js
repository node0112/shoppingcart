import logo from './logo.svg';
import './App.css';
import './components/site.css'
import './reset.css'
import Header from './components/header';
import HomePage from './components/homepage';
import { useEffect, useState } from 'react';
import ShopPage from './components/shoppage';

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



function App() {
  useEffect(()=>{
    setTimeout(() => {
      let links=document.querySelectorAll('.header-link')
      links.forEach(link => {
        link.addEventListener('click',()=>{
          selected=link.textContent
          showSpinner()
          checkSelected()
          createProductCard()
        })
      });
    }, 100)
  },[Header])

  //define arrays here
    const products={
      "airpods" : {
        "airpodsPro" : {
          name: 'airpods pro',
          price: 249,
          image1: airpodspro_1,
          image2: airpodspro_2
        },
        "airpods2" : {
          name: 'airpods 2nd genereation',
          price: 139,
          image1: airpods2_1,
          image2: airpods2_2
        },
        "airpods3" : {
          name: 'airpods 3rd genereation',
          price: 179,
          image1: airpods3_1,
          image2: airpods3_2
        },
        "airpodsMax" : {
          name: 'airpods max',
          price: 500,
          image1: airpodsmax_1,
          image2: airpodsmax_2
        },
      },
      "iphones" : {
        "iphone12" : {
          name: 'iphone 12',
          price: 599,
          image1: iphone12_1,
          image2: iphone12_2
        },
        "iphone12Pro" : {
          name: 'iphone 12 pro',
          price: 899,
          image1: iphone12pro_1,
          image2: iphone12pro_2
        },
        "iphone13Pro" : {
          name: 'iphone 13 pro',
          price: 999,
          image1: iphone13pro_1,
          image2: iphone13pro_2
        },
        "iphoneSe" : {
          name: 'iphone SE',
          price: 429,
          image1: iphoneSe_1,
          image2: iphoneSe_2
        }
      },
      "macs" : {
        "imac" : {
          name: 'Imac 2021 8gb 1tb i5',
          price: 800,
          image1: imac_1,
          image2: imac_2
        },
        "mbp13" : {
          name: 'Macbook Pro 13 Inch M2 8gb 256gb',
          price: 1199,
          image1: mbp13_1,
          image2: mbp13_2
        },
        "mbp14" : {
          name: 'Macbook Pro 14 inch 8gb 16gb 512gb ',
          price: 1849,
          image1: mbp14_1,
          image2: mbp14_2
        },
        "mbp16" : {
          name: 'Macbook Pro 16 inch 16gb 16gb 1Tb ',
          price: 2499,
          image1: mbp16_1,
          image2: mbp16_2
        },
      },
      "accessories" : {
        "iphonemagsafe" : {
          name: 'MagSafe Clear Case for iphone',
          price: 49,
          image1: magsafeCase,
          image2: magsafeCase
        },
        "lighteningCable" : {
          name: 'lightening cable 1m',
          price: 19,
          image1: lightening_cable,
          image2: lightening_cable
        },
        "magsafeDuoCharger" : {
          name: 'magSafe duo charger',
          price: 129,
          image1: magsafe,
          image2: magsafe
        },
        "magsafeCharger" : {
          name: 'magSafe charger for iphone',
          price: 39,
          image1: iphoneMagsafe,
          image2: iphoneMagsafe
        },
        "macbookCharger" : {
          name: 'magSafe charger for Mac',
          price: 120,
          image1: macbookCharger,
          image2: macbookCharger
        },
        "airpodsCase" : {
          name: 'Prada case for airpods gen 1 & 2',
          price: 550,
          image1: pradaCase,
          image2: pradaCase
        },
      }
    }
  //------

  const deliveryDays=[3,4,5,6,7,8,9,10]
  const [pageToRender,setPageToRender]=useState('shop')
  let selected=''

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
  function createProductCard(){
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

    productImage.src=mbp13_1 //change all of these
    productTitle.textContent='Airpods 2nd Generation'
    productPrice.textContent='$129'
    text.textContent='Delivered in 10 days' //deliverytime


    card.appendChild(productImage)
    card.appendChild(productPrice)
    card.appendChild(productTitle)
    card.appendChild(deliveryTime)
    card.appendChild(addToBagButton)

    productCardContainer.appendChild(card)
  }

  return (
    <div className="App">
      <Header />
      <ShopPage />
    </div>
  );
}

export default App;
