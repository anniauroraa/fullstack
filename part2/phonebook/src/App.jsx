import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddPeople from './components/AddPeople'
import RenderPeople from './components/RenderPeople'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

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