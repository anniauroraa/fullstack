const Course = ({ course }) => {
  console.log("course..");
  const total =
    course.parts.map(ex => ex.exercises ).reduce((s,p) => {
      console.log('what is happening', s, p)
      return s + p
    })

  return (
    <div>
      <h1>{course.name}</h1>
        {course.parts.map(course => 
          <p>{course.name} {course.exercises}</p>
        )}
        <b> total of {total} exercises </b>      
    </div>
  )

}

export default Course