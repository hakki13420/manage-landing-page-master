import Description from './Description'
import MainLeftItem from './MainLeftItem'
import MainRightItem from './MainRightItem'
import Title from './Title'

const Main = () => {
  return (
    <main className='main'>
      <div className="main-left">
        <MainLeftItem title="What's different about Manage?"
          description={`Manage provides all the functionality your team needs, without 
          the complexity. Our software is tailor-made for modern digital 
          product teams.`}
        />
      </div>
      <div className="main-right">
        <MainRightItem title="Track company-wide progress"
          description="See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again."/>
        <MainRightItem title="Advanced built-in reports"
          description="Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports
          you need to keep key stakeholders informed."/>
        <MainRightItem title="Everything you need in one place"
          description="Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution."/>
      </div>
    </main>
  )
}

export default Main
