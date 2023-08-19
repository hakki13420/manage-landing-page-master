import Description from './Description'
import MainRightItemTop from './MainRightItemTop'

const MainRightItem = ({ title, description }) => {
  return (

    <div className="main-right-item">
      <MainRightItemTop title={title} />
      <Description>{description}</Description>
    </div>
  )
}

export default MainRightItem
