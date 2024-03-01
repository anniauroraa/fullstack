const RenderPeople = ( {persons, newFilter} ) => {
    
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )

    return (
        <>
        {filteredPersons.map(person => {
            const key = person.id;
            return <p key={key}> {person.name} {person.number}</p>
            })}
        </>
    )
}

export default RenderPeople