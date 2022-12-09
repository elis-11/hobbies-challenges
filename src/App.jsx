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
      hobbies: ["Coding ", "Running ", "Reading "],
      image: "https://source.unsplash.com/100x100/?person,edward",
    },
    {
      _id: "p3",
      name: "Niko",
      hobbies: ["Doging ", "Cating ", "Coding "],
      image: "https://source.unsplash.com/100x100/?person,niko",
    },
  ]);

  const [amount, setAmount] = useState(0);
  const [savedHobbies, setSavedHobbies] = useState();
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <div className="people">
        {people.map((person) => (
          <div className="person" key={person._id}>
            <img src={person.image} alt={person.name} />
            <div className="name">{person.name}</div>
            <div className="hobbies">hobbies: 
             </div>
            <div className="hobby">{person.hobbies}</div>
          </div>
        ))}
      </div>
      <button>show hobbies!</button>
      <div className="hobbies">
        hobbies
      </div>
      <form className="feedback">
        <h2>Your feedback is important to us!</h2>
        <input type="text" className="email" placeholder="your email..." />

        <textarea  
        id="w3review" name="w3review" rows="2" cols="50" className="message" placeholder="write a message..." />
        <button className="button">send</button>
      </form>
    </div>
  );
}

export default App;
