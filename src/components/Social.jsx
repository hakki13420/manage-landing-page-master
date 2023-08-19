import { ReactComponent as Facebook } from '../assets/images/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/images/icon-twitter.svg'
import { ReactComponent as Instagram } from '../assets/images/icon-instagram.svg'

import { ReactComponent as Youtube } from '../assets/images/icon-youtube.svg'
import { ReactComponent as Pinterest } from '../assets/images/icon-pinterest.svg'

const Social = () => {
  return (
    <div className='social'>
      <div className="social-item">
        <Facebook />
      </div>
      <div className="social-item">
        <Youtube />
      </div>
      <div className="social-item">
        <Twitter />
      </div>
      <div className="social-item">
        <Pinterest />
      </div>
      <div className="social-item">
        <Instagram />
      </div>

    </div>
  )
}

export default Social
