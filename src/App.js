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
      let links=document.querySelectorAll('.header-link') //currently giving null
      links.forEach(link => {
        link.addEventListener('click',()=>{console.log('sjdnujdn')})
      });
    }, 100)
  },[Header])

  //define arrays here
    const products={

    }
  //------

  const [pageToRender,setPageToRender]=useState('shop')
  const [selected,setSelected]=useState('')
  return (
    <div className="App">
      <Header />
      <ShopPage />
    </div>
  );
}

export default App;
