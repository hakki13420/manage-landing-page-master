import Logo from './Logo'
import Nav from './Nav'
import Button from './Button'
import logoBlack from '../assets/images/logo.svg'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Logo image={logoBlack}/>
      <Nav/>
      <Button>Get Started</Button>
    </div>
  )
}

export default NavBar
