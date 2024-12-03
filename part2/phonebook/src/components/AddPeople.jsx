import service from './Services'

const AddPeople = ({newName, handleNameAdd, newNumber, handleNumberAdd, persons, setNewName, setNewNumber,setPersons,setUpdateMessage,updateMessage}) => {
    const addPerson = (event) => {
      event.preventDefault()
      console.log('add button clicked', event.target)
      const nameObject = {  
        name: newName,
        number: newNumber,
        exists: persons.some(person => person.name === newName)
      }
      console.log(nameObject.exists)
      console.log(nameObject.number)
      if (!nameObject.exists) {
          setPersons([...persons, { name: nameObject.name , number: nameObject.number, id: nameObject.id}])
          console.log('not exists')
          service
          .create(nameObject)
          .then(person => {
            setPersons(persons.concat(person))
            setNewNumber('')
            setNewName('')
            setUpdateMessage(
              `Added ${person.name}`
              )
              setTimeout(() => {
                setUpdateMessage(null)
              }, 5000)
          })
          .catch(error => {
            console.log('add failed')
          })
      } else {
        const existingPerson = persons.find(person => person.name === newName)

        if (existingPerson) {
          const updatedPerson = { ...existingPerson, number: newNumber }
          
          console.log("id:", existingPerson.id)

          // Update the person's number in the backend
          service
            .update(existingPerson.id, updatedPerson)
            .then(returnedPerson => {
              // Update the state with the updated person
              setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
              setNewNumber('')
              setNewName('')
              setUpdateMessage(
                `Updated number for ${returnedPerson.name}`
              );
              setTimeout(() => {
                setUpdateMessage(null)
              }, 5000)
            })
            .catch(error => {
              console.log('add failed')
            })
        }
    }}

    return (
      <>
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
      </>
    )
}

export default AddPeople