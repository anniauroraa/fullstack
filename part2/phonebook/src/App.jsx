import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPeople from './components/AddPeople'
import RenderPeople from './components/RenderPeople'
import service from './components/Services'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [updateMessage, setUpdateMessage] = useState(null)

  const hook = () => {
    console.log('effect')
    service
    .getAll()
    .then(initializePersons => {
      setPersons(initializePersons)
    })
    .catch(error => {
      console.log('fail')
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
      
      <Notification message={updateMessage} />

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
        setUpdateMessage={setUpdateMessage}
        updateMessage={updateMessage}
        />

      <h2>Numbers</h2>
      
      <RenderPeople persons={persons} newFilter={newFilter} setPersons={setPersons}/>
      
    </div>
  )
}

export default App