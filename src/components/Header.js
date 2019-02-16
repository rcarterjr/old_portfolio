import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/mugshot.jpg'
import ThemeContext from '../context/ThemeContext' // for dark mode

class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <header id="header">
            <button className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? (
                <span>Light mode ☀</span>
              ) : (
                <span>Dark mode ☾</span>
              )}
            </button>
            <div className="inner">
              <a href="#" className="image avatar">
                <img src={avatar} alt="" />
              </a>
              <h1>
                <strong>I am Russell</strong>, and this is
                <br />
                my portfolio created with
                <br />
                Gatsby and ReactJS.
              </h1>
            </div>
            <Footer />
          </header>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
