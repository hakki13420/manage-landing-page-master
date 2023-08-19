import Button from './Button'
import Description from './Description'
import Title from './Title'

const Article = () => {
  return (
    <div className='article'>
      <Title>
            Bring every one together to build better products
      </Title>
      <Description>
        Manage makes it simple for software teams to plan day-to-day
  tasks while keeping the larger team goals in view.
      </Description>
      <Button>Get Started</Button>
    </div>
  )
}

export default Article
