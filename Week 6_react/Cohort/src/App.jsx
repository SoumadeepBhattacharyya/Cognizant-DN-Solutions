import CohortDetails from './CohortDetails';

const App = () => {
  return (
    <div>
      <CohortDetails 
        name="React Bootcamp"
        duration="6 Weeks"
        mentor="Jojo jose"
        status="ongoing" // change to "completed" to see blue
      />

      <CohortDetails 
        name="Springboot Bootcamp"
        duration="6 Weeks"
        mentor="Elisma Smith"
        status="ongoing" // change to "completed" to see blue
      />

      <CohortDetails 
        name="Microservices Bootcamp"
        duration="6 Weeks"
        mentor="John Doe"
        status="completed" // change to "completed" to see blue
      />
    </div>
  )
}

export default App
