import { useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      _id: "p1",
      name: "Gael",
      hobbies: ["Coding ", "Gaming "],
      image: "https://source.unsplash.com/100x100/?person,gael",
    },
    {
      _id: "p2",
      name: "Edward",
      hobbies: ["Coding ", "Running ", "Reading ", "Too complicated teaching "],
      image: "https://source.unsplash.com/100x100/?person,edward",
    },
    {
      _id: "p3",
      name: "Niko",
      hobbies: [],
      image: "https://source.unsplash.com/100x100/?person,niko",
    },
  ]);

  return (
    <div className="App">
      <div className="people">
        {people.map((person) => (
          <div className="person" key={person._id}>
            <img src={person.image} alt={person.name} />
            <div className="name">{person.name}</div>
            <div className="hobbies">hobbies: {person.hobbies}, {' '}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
