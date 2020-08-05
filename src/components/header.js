import PropTypes from 'prop-types'
import React from 'react'
const Header = () => {

  return (
    <header>
    <p>header</p>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
