import './App.css';

function App() {
    return ( 
    <div className= "App">
      <User2 name="deo" age= {21} email="deokeldisilaen@gmail.com" />
      <User />
      <User />
      <User />

    // latihan    
    <Job salary={90000} position="Senior SDE" company="Amazon" />
    <Job salary={12000} position="Junior SDE" company="Google" />
    <Job salary={10000} position="Project Manager" company="Netflix" />

    </div>
  )
}

const User = () => {
  return (
    <div>
      <h1> Pedro</h1>
      <h1> 21</h1>
      <h1> pedro@pedro.com</h1>
    </div>
  )
}

const User2 = (props) => {
  return (
  <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
  </div>
  ) 
}

const Job = (props) => {
    return(
      <div>
        <h1>{props.salary}</h1>
        <h1>{props.position}</h1>
        <h1>{props.company}</h1>
      </div>  
    )
}


export default App; 
