import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => {
  if ( text === 'positive' ) {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all, avg, pos }) => {
  if ( all === 0 ) {
    return (
      <div>
        <h2>statistics</h2> 
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2> 
      <table>
        <tbody>
          <StatisticsLine text='good' value={good}/>
          <StatisticsLine text='neutral' value={neutral}/>
          <StatisticsLine text='bad' value={bad}/>
          <StatisticsLine text='all' value={all}/>
          <StatisticsLine text='average' value={avg}/>
          <StatisticsLine text='positive' value={pos}/>
        </tbody>
      </table>
    </div>
)
}

const App = () => {
  // feedback options
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // more statistics
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1

    setGood(updatedGood)
    setAll(updatedAll)
    setAvg((updatedGood-bad)/updatedAll)
    setPos(updatedGood/updatedAll*100)

    console.log('good', updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1

    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAvg((good-bad)/updatedAll)
    setPos(good/updatedAll*100)

    console.log('neutral', updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1

    setBad(updatedBad)
    setAll(updatedAll)
    setAvg((good-updatedBad)/updatedAll)
    setPos(good/updatedAll*100)

    console.log('bad', updatedBad)
  }

  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>

      <Statistics all={all} good={good} neutral={neutral} bad={bad} avg={avg} pos={pos}/>
    </div>
  )
}

export default App