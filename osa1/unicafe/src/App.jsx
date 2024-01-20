import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

      <h2>statistics</h2> 
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>positive {pos} %</p>
    </div>
  )
}

export default App