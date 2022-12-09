import { useState } from "react";
import "./App.css";
import { Mentions } from "./mentions/Mentions";

function App() {
  const [people, setPeople] = useState([
    {
      _id: "p1",
      name: "Artur",
      hobbies: [" Coding ", " Gaming "],
      image: "https://source.unsplash.com/100x100/?person,pilot",
    },
    {
      _id: "p2",
      name: "Tiana",
      hobbies: [" Coding", " Running", " Reading"],
      image: "https://source.unsplash.com/100x100/?person,teacher",
    },
    {
      _id: "p3",
      name: "Rita",
      hobbies: [],
      image: "https://source.unsplash.com/100x100/?person,stewardess",
    },
    {
      _id: "p4",
      name: "Ricci",
      hobbies: [" Traveling", " Coding", " Reading", " Writin"],
      image: "https://source.unsplash.com/100x100/?person,officer",
    },
  ]);
  const users = [
    {
      id: "jack",
      display: "Jack",
    },
    {
      id: "john",
      display: "john",
    },
  ];


  const [person, setPerson] = useState();
  const [message, setMessage] = useState("");

  const showHobbies = () => {
    person.hobbies.length > 0
      ? setMessage(
          person.name + "s " + "hobbies are: " + person.hobbies
        )
      : setMessage(
          "Unfortunately, " +
            person.name +
            " " +
            "don't have any hobbies."
        );
  };

  const countHobbies = (person) => {
    setPerson(person);
    setMessage(person.name + " has " + person.hobbies.length + " hobbies");
  };

  // const mailformat = /^[a-z0-9_.-]{2,}@[a-z.]{2,}\.[a-z]{2,}$/gi;

  return (
    <div className="App">
      <h1>Hobbies Challenges</h1>
      <div className="people">
        {people.map((person) => (
          <div
            key={person._id}
            onClick={() => countHobbies(person)}
            className="person"
          >
            <img src={person.image} alt={person.name} />
            <div className="name">{person.name}</div>
            <div className="hobbies">hobbies:</div>
            <div className="hobby">{person.hobbies}</div>
          </div>
        ))}
      </div>
      <button 
      onClick={() => showHobbies()}
      >show hobbies!</button>
      <div className="hobbies_message">{message}</div>
      <form className="feedback">
        <h2>Your feedback is important to us!</h2>
        <input type="text" className="email" placeholder="your email..." />

        <textarea
          id="w3review"
          name="w3review"
          rows="2"
          cols="50"
          className="message"
          placeholder="write a message..."
        />
        <button className="button">send</button>
      </form>
      <Mentions users={users}/>
    </div>
  );
}

export default App;
