import Avatar from './Avatar'
import Title from './Title'
import Description from './Description'

const Slide = ({ image, title, description }) => {
  return (
    <div className="slide">
      <Avatar>
        <img src={image} alt="" />
      </Avatar>
      <div className="slide-body">
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
      </div>
    </div>
  )
}

export default Slide
