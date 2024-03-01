import { useState } from 'react'
import Filter from './components/Filter'
import AddPeople from './components/AddPeople'
import RenderPeople from './components/RenderPeople'


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
      
      <Filter newFilter={newFilter} handleFilter={handleFilter} />

      <h2>add a new</h2>

      <AddPeople 
        newName={newName} 
        handleNameAdd={handleNameAdd} 
        newNumber={newNumber} 
        handleNumberAdd={handleNumberAdd} 
        persons={persons} 
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        />

      <h2>Numbers</h2>
      
      <RenderPeople persons={persons} newFilter={newFilter} />
      
    </div>
  )
}

export default App