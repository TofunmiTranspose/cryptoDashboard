import React, { useContext } from 'react'
import './Navbar.css'
import logo from './chart.svg'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)


  const currencyHandler = (e) =>{
    switch (e.target.value){
      case 'usd': {
        setCurrency({name: 'usd', symbol: '$'})
        break;
      }
      case 'eur': {
        setCurrency({name: 'eur', symbol: '€'})
        break;
      }
      case 'inr': {
        setCurrency({name: 'inr', symbol: '₹'})
        break;
      }
      default: {
        setCurrency({name: 'usd', symbol: '$'})
        break;
      }
    }
  }

  function sideToggler(){
    document.querySelector('.side-bar').classList.toggle('on');
    document.querySelector('.home').classList.toggle('blur');
  }

  return (
    <div className='navbar'>
      <div className="side-bar on">
        <div onClick={sideToggler} className="burger burger2">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <Link onClick={sideToggler} to={'/'}>
          TRANSPOSE
        </Link>
        <Link onClick={sideToggler} to={'/'}>
          Dashboard
        </Link>
        <Link onClick={sideToggler} to={`/coin/bitcoin`}>
          Watchlist (btc)
        </Link>
        <div>
          <a href="https://tofunmitranspose.github.io/brand/">Portfolio</a>  
        </div>
        <div>
          Settings
        </div>
      </div>
      <div className='logo-container'>
      <div onClick={sideToggler} className="burger burger1">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to={'/'}>
      <img className='logo' src={logo}/> TRANSPOSE
      </Link>
      </div>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={arrow_icon}/></button>
      </div>
    </div>
  )
}

export default Navbar
