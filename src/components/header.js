import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBarHeader: {
    boxShadow: 'none',
  },
  logo: {
    flexGrow: 1,
    margin: theme.spacing(1),
    maxWidth: '60px',
  },
  nav: {
    position: 'absolute',
    right: '10px',
  },
  navButton: {
    margin: theme.spacing(2),
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container component="div">
        <AppBar
          position="static"
          color="transparent"
          className={classes.appBarHeader}
        >
          <Toolbar>
            <div className={classes.logo}>
              <Image />
            </div>
            <NavWrapper>
              <Link to="/" component="button" activeClassName="active">
                <span color="inherit" className={classes.navButton}>
                  Proof of Concept
                </span>
              </Link>
              {/*<Link to="/about" component="button" activeClassName="active">*/}
              {/*  <span color="inherit" className={classes.navButton}>*/}
              {/*    About*/}
              {/*  </span>*/}
              {/*</Link>*/}
            </NavWrapper>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

const NavWrapper = styled.div`
  position: absolute;
  right: 10px;

  a {
    text-transform: uppercase;
  }

  a.active {
    color: #80b1eb;
    text-decoration: underline;
  }
`

export default Header
