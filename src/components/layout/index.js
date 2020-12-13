import React from "react"
import PropTypes from "prop-types"
import Logo from "../Logo"

const Layout = ({ children }) => {
  return (
    <>
      <Logo />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout