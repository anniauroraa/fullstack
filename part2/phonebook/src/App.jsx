import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '010 7562389'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber,
      exists: persons.some(person => person.name === newName)
    }
    console.log(nameObject.exists)
    console.log(nameObject.content)
    if (!nameObject.exists) {
      setPersons([...persons, { id: persons.length +1, name: newName , number: newNumber}])
      console.log('not exists')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // const personsToShow = showAll

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameAdd}
                />
        </div>
        <div>
          number: <input 
                  value={newNumber}
                  onChange={handleNumberAdd}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        const key = person.id;
        return <p key={key}> {person.name} {person.number}</p>
        })}
    </div>
  )
}

export default App