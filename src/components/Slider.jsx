import { useEffect, useRef, useState } from 'react'
import i1 from '../assets/images/avatar-ali.png'
import i2 from '../assets/images/avatar-anisha.png'
import i3 from '../assets/images/avatar-richard.png'
import i4 from '../assets/images/avatar-shanai.png'
import Slide from './Slide'
import Title from './Title'
import Button from './Button'
import ObjectBack from './ObjectBack'
import SliderMobile from './SliderMobile'

const Slider = () => {
  const [slide, setSlide] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      if (slide === 1) setSlide(0)
      else setSlide(slide => slide + 1)
    }, 5000)
  }, [slide])

  return (
    <section className='testimonials'>
      <Title>What they've said</Title>
      <SliderMobile />
      <div className="slider-container" style={{ transform: `translateX(${-slide * 34}%)` }} >
        <div className='slider' >
          <Slide image={i2}
            title='Anisha Li'
            description={`“Manage has supercharged our team’s workflow. The ability to maintain 
          visibility on larger milestones at all times keeps everyone motivated.”`}
          />
          <Slide image={i1}
            title='Ali Bravo'
            description={`“We have been able to cancel so many other subscriptions since using 
          Manage. There is no more cross-channel confusion and everyone is much 
          more focused.”`}
          />
          <Slide image={i3}
            title='Richard Watts'
            description={`“Manage allows us to provide structure and process. It keeps us organized 
          and focused. I can’t stop recommending them to everyone I talk to!”`}
          />
        </div>
        <div className='slider'>
          <Slide image={i4}
            title='Shanai Gough'
            description={`“Their software allows us to track, manage and collaborate on our projects 
          from anywhere. It keeps the whole team in-sync without being intrusive.”`}
          />
        </div>
      </div>
      <Button>Get Started</Button>
      <ObjectBack/>
    </section>
  )
}

export default Slider
