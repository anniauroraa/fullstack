const Filter = (props) => {
    const newFilter = props.newFilter
    const handleFilter = props.handleFilter 
    
    const addFilter = (event) => {
        event.preventDefault()
        console.log('filter button clicked', event.target)
    }

    return (
        <>
        <form onSubmit={addFilter}>
            <div>
            filter shown with <input 
                value={newFilter}
                onChange={handleFilter}
                />
            </div>
        </form>
        </>
    )
}

export default Filter