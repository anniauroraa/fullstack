const AddPeople = ({newName, handleNameAdd, newNumber, handleNumberAdd, persons, setNewName, setNewNumber,setPersons}) => {
    console.log("halo")
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