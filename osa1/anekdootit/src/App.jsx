import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ( { anecdotes, votes }) => {
  if ( Math.max(...votes) === 0 ) {
    return (
      <div>
        No votes given yet
      </div>
    )
  }

  return (
    <div>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const initialVotes = Array(anecdotes.length).fill(0)
  const [votes, setVote] = useState(initialVotes)

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    console.log('random anecdote:', anecdotes[random])
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
    console.log('+1 vote:', selected, copy[selected])
    console.log('Max vote:', Math.max(...copy))

  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleAnecdoteClick} text='generate anecdote'/>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App