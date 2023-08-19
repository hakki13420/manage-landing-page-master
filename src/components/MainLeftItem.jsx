import Title from './Title'
import Description from './Description'

const MainLeftItem = ({ title, description }) => {
  return (
    <div className="main-left-item">
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>
    </div>
  )
}

export default MainLeftItem
