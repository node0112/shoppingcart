import logo from './logo.svg';
import './App.css';
import './components/site.css'
import './reset.css'
import Header from './components/header';
import HomePage from './components/homepage';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=>{
    let links=document.querySelector('header-link')
    console.log(links)
    
  },[HomePage])

  const [selected,setSelected]=useState('')
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
