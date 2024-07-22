import { useState } from 'react';
import './App.css';
import Person from '../personcard/personcard';



const App = () => {
  const ListaPersonas = [{
    firstName: "Jane",
    lastName: "Doe,",
    age: 45,
    hairColor: "Black"
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  },
  {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
  },
  {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  }]

  const {PersonCard, setPersonCard} = useState(ListaPersonas);

  return (
    <div className="App">
      
      {
      ListaPersonas.map ((person) => {
        return (<Person firstName={person.firstName}
                        lastName={person.lastName}
                        age={person.age}
                        hairColor={person.hairColor}/>)
      })
      }
    </div>
  );
}

export default App;
