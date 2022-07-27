import logo from './logo.svg';
import './App.css';
import './components/site.css'
import './reset.css'
import Header from './components/header';
import HomePage from './components/homepage';
import { useEffect, useState } from 'react';
import ShopPage from './components/shoppage';

function App() {
  useEffect(()=>{
    setTimeout(() => {
      let links=document.querySelectorAll('.header-link') //currently giving null
      links.forEach(link => {
        link.addEventListener('click',()=>{console.log('sjdnujdn')})
      });
    }, 100)
  },[Header])

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
