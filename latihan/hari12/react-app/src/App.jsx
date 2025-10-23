import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import ToDo from './components/thingstodo'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  let people = [
    {name: "John", Job:"Programmer", color: "green"},
    {name: "Doe", Job:"Desainer", color: "blue"}
    // {name: "Sarah", Job:"Artist"},
    // {name: "Rizal", Job:"Gammer"}
    
  ]

    //   <div className='container'>
    // {people.map((item, index) => (
      
    //   <Welcome key={index} name={item.name} color={item.color} />
      
    //   ))}
    //   </div>
  

  return (
    <>
      <div className='counter'>
        <Counter />
      </div>
      
      <div className='container'>
        <img src="./src/assets/logo.png" alt="testing" />

        <div className='title'>
          <p className='heading'>THINGS TO DO</p>
          <p>During bootcamp in sanbercode</p>
        </div>
        <form>
        { thingsToDo.map((item, index)=>{
          return(
            
              <ToDo name={item}/>
          )
        })}
          <input className="send" type="button" value="SEND" />
        </form>
      </div>
    </>
  )

   
}

export default App
