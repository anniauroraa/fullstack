import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('add button clicked', event.target)
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

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const addFilter = (event) => {
    event.preventDefault()
    console.log('filter button clicked', event.target)
    }

  const handleNameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberAdd = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addFilter}>
        <div>
          filter shown with <input 
            value={newFilter}
            onChange={handleFilter}
            />
        </div>
      <h2>add a new</h2>
      </form>
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
      {filteredPersons.map(person => {
        const key = person.id;
        return <p key={key}> {person.name} {person.number}</p>
        })}
    </div>
  )
}

export default App