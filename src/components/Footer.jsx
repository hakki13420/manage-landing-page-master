import Button from './Button'
import Title from './Title'
import ObjectBack from './ObjectBack'
import Logo from './Logo'
import Social from './Social'
import Links from './Links'
import NewsLetter from './NewsLetter'
import logoWhite from '../assets/images/logo-white.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <Title>Simplify how you team works today.</Title>
        <Button>Get Started</Button>
        <ObjectBack/>
        <ObjectBack/>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <Logo image={logoWhite} />
          <Social />
        </div>
        <div className="footer-bottom-item">
          <Links/>
        </div>
        <div className="footer-bottom-item">
          <NewsLetter/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
