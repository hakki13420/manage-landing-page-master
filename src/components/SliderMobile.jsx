import { useEffect, useRef, useState } from 'react'
import i1 from '../assets/images/avatar-ali.png'
import i2 from '../assets/images/avatar-anisha.png'
import i3 from '../assets/images/avatar-richard.png'
import i4 from '../assets/images/avatar-shanai.png'

import Slide from './Slide'

const SliderMobile = () => {
  const [slide, setSlide] = useState(0)
  const timer = useRef(null)

  const changeSlide = (i) => {
    setSlide(i)
  }

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      if (slide === 3) setSlide(0)
      else setSlide(slide => slide + 1)
    }, 5000)
  }, [slide])

  return (

    <div className="slider-container-mobile" >
      <div className='slider' >
        {slide === 0 && <Slide image={i2}
          title='Anisha Li'
          description={`“Manage has supercharged our team’s workflow. The ability to maintain 
          visibility on larger milestones at all times keeps everyone motivated.”`}
        />}
        {slide === 1 && <Slide image={i1}
          title='Ali Bravo'
          description={`“We have been able to cancel so many other subscriptions since using 
          Manage. There is no more cross-channel confusion and everyone is much 
          more focused.”`}
          style={{ zIndex: slide === 1 ? '10' : '0' }}
        />}
        {slide === 2 && <Slide image={i3}
          title='Richard Watts'
          description={`“Manage allows us to provide structure and process. It keeps us organized 
          and focused. I can’t stop recommending them to everyone I talk to!”`}
          style={{ zIndex: slide === 2 ? '10' : '0' }}
        />}
        {slide === 3 && <Slide image={i4}
          title='Shanai Gough'
          description={`“Their software allows us to track, manage and collaborate on our projects 
          from anywhere. It keeps the whole team in-sync without being intrusive.”`}
          style={{ zIndex: slide === 3 ? '10' : '0' }}
        />}
      </div>

      <div className="options">
        <span onClick={() => changeSlide(0)} style={{ backgroundColor: slide === 0 ? 'red' : 'inherit' }}></span>
        <span onClick={() => changeSlide(1)} style={{ backgroundColor: slide === 1 ? 'red' : 'inherit' }}></span>
        <span onClick={() => changeSlide(2)} style={{ backgroundColor: slide === 2 ? 'red' : 'inherit' }}></span>
        <span onClick={() => changeSlide(3)} style={{ backgroundColor: slide === 3 ? 'red' : 'inherit' }}></span>
      </div>
    </div>

  )
}

export default SliderMobile
