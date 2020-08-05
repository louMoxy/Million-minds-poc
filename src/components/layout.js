/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import { createGlobalStyle } from 'styled-components';

import { GlobalStyles } from './GlobalStyles'
const GlobalStyle = createGlobalStyle`${GlobalStyles}`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <>
        <Header />
        <main>{children}</main>
        <footer style={{ paddingTop: 10 }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
