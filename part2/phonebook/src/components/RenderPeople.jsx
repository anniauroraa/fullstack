import service from './Services'

const RenderPeople = ( {persons, newFilter, setPersons} ) => {
    
    const deletePerson = (id) => {
        console.log('delete id: ' + id)
        const person = persons.find(n => n.id === id)
        const toBeDeleted = {...person}
        
        if (confirm( `Delete '${person.name}' ?` )) {
            service
            .remove(id, toBeDeleted)
            setPersons(persons.filter(person => person.id !== id))
        }
        }


    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )

    

    return (
        <>
        {filteredPersons.map(person => {
            const key = person.id;
            return <p key={key}> {person.name} {person.number} <button onClick={() => deletePerson(key)}> delete </button></p>
            })}
        </>
    )
}

export default RenderPeople