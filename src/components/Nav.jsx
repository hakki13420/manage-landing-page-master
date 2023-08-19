import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import { useState } from 'react'

const Nav = () => {
  const [display, setDisplay] = useState(false)

  const handlClick = () => {
    setDisplay(display => !display)
  }
  const closing = () => {
    setDisplay(false)
  }
  return (
    <nav className='nav'>
      {display && <div className="nav-links" >
        <img src={close} alt="close-image" onClick={closing} />
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>}
      <img src={menu} alt="hamburger-menu" onClick={handlClick} />
      <div className="nav-links-desktop" >
        <img src={close} alt="close-image" onClick={closing} />
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </nav>
  )
}

export default Nav
