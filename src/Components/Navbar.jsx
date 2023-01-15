import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/navbar.module.css"

const Navbar = () => {
  return (
    <div id={styles.nav}>
        <Link to="/">TeeRex Store</Link>
        <Link to ="/cart" >Cart</Link>
    </div>
  )
}

export default Navbar