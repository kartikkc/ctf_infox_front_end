import React from 'react'
import "./Assets/nav.scss"
import { Link } from "react-router-dom";

const expand = () => {
  var element = document.getElementById("sidenav");
  element.classList.remove("is-collapsed");
}

const collapse = () => {
  var element = document.getElementById("sidenav");
  element.classList.add("is-collapsed");
}

const toggle = () => {
  var element = document.getElementById("sidenav");
  element.classList.toggle("is-collapsed");
}

const Navbar = () => {

  return (
    <div id="sidenav" class="sidenav sticky">
      <header class="sidenav__header header">
          <span class="header__icon">
            <img className='logo'
              src={require("./Assets/images/aswd.png")}
            />
          </span>
        <a class="top-head" href="https:infoxpression.tech" target={"_blank"}>
          <span class="header__text Challenges">InfoXpression</span>
        </a>
        <button class="sidenav__button" aria-label="Expand" onClick={toggle}>
          <span class="sidenav__button-icon">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </span>
        </button>
      </header>

      <nav class="sidenav__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <button class="nav__button">
              <span class="nav__icon Challenges">
                <i class="fa fa-home" aria-hidden="true"></i>
              </span>
              <span class="nav__label Challenges">Home</span>
            </button>
          </li>
          <li class="nav__item">
            <button class="nav__button">
              <span class="nav__icon Challenges">
                <i class="fa fa-home" aria-hidden="true"></i>
              </span>
              <span class="nav__label Challenges">Challenges</span>
            </button>
            <span class="nav__badge">9</span>
          </li>
          <li class="nav__item">
            <button class="nav__button">
              <span class="nav__icon Challenges">
                <i class="fa fa-comments" aria-hidden="true"></i>
              </span>
              <span class="nav__label Challenges">Login</span>
            </button>
            <span class="nav__badge warn">99+</span>
          </li>
        </ul>
      </nav>

      <div class="sidenav__footer user">
        <button class="user__button">
          <div class="user__badge">
            <div class="user__image">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
          <div class="user__text">
            <span class="user__name Challenges">John Smith</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar