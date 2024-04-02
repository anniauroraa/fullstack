const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="update">
        {message}
      </div>
    )
  }
  
  export default Notification