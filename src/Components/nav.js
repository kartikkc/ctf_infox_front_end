import React from 'react'
import "./Assets/nav.scss"
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

// eslint-disable-next-line
const expand = () => {
  var element = document.getElementById("sidenav");
  element.classList.remove("is-collapsed");
}

// eslint-disable-next-line
const collapse = () => {
  var element = document.getElementById("sidenav");
  element.classList.add("is-collapsed");
}

const toggle = () => {
  var element = document.getElementById("sidenav");
  element.classList.toggle("is-collapsed");
}

const Navbar = () => {

  const Navigate= useNavigate();

  return (
    <div id="sidenav" className="sidenav sticky">
      <header className="sidenav__header header">
          <span className="header__icon">
            <img className='logo'
              src={require("./Assets/images/aswd.png")}
              alt=""
            />
          </span>
        <a className="top-head" href="https:infoxpression.tech" target={"_blank"} rel="noreferrer">
          <span className="header__text Challenges">InfoXpression</span>
        </a>
        <button className="sidenav__button" aria-label="Expand" onClick={toggle}>
          <span className="sidenav__button-icon">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </span>
        </button>
      </header>

      <nav className="sidenav__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__button" onClick={()=>{
              Navigate('/')
            }}>
              <span className="nav__icon Challenges">
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <span className="nav__label Challenges">Home</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__button" onClick={()=>{
              Navigate('/challenges')
            }}>
              <span className="nav__icon Challenges">
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <span className="nav__label Challenges">Challenges</span>
            </button>
            <span className="nav__badge">9</span>
          </li>
          <li className="nav__item" 
            style={{display:`${localStorage.getItem("authKey")? "none": ""}`}}
            >
            <button className="nav__button"  onClick={()=>{
              Navigate('/login')
            }}
            disabled={localStorage.getItem("authKey")? true: false}
            hidden={true}
            >
              <span className="nav__icon Challenges">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </span>
              <span className="nav__label Challenges">Login</span>
            </button>
            <span className="nav__badge warn">99+</span>
          </li>
        </ul>
      </nav>

      {/* <div className="sidenav__footer user">
        <button className="user__button">
          <div className="user__badge">
            <div className="user__image">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
          <div className="user__text">
            <span className="user__name Challenges">John Smith</span>
          </div>
        </button>
      </div> */}
    </div>
  )
}

export default Navbar