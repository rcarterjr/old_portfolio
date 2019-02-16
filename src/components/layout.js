import React from 'react'
import '../assets/scss/main.scss'
import ThemeContext from '../context/ThemeContext'

import Header from './Header'

import '../assets/css/layout.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? 'dark' : 'light'}>
            <Header />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {children}
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Template
