/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import { createGlobalStyle } from 'styled-components';

import { GlobalStyles } from './GlobalStyles'
import Container from '@material-ui/core/Container'
const GlobalStyle = createGlobalStyle`${GlobalStyles}`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <>
        <Header />
        <main>{children}</main>
        <Container component='div'>
          <Footer>
            Copyright © {new Date().getFullYear()}, White Swan
          </Footer>
        </Container>

      </>
    </>
  )
}

const Footer = styled.footer`
  padding-top: '10px';
  text-align: center;
  border-top: 1px solid #ccc;
  font-size: 0.6em;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
