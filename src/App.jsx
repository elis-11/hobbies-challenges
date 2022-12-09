import { useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      _id: "p1",
      name: "Artur",
      hobbies: [" Coding ", " Gaming "],
      image: "https://source.unsplash.com/100x100/?person,artur",
    },
    {
      _id: "p2",
      name: "Tiana",
      hobbies: [" Coding", " Running", " Reading"],
      image: "https://source.unsplash.com/100x100/?person,tiana",
    },
    {
      _id: "p3",
      name: "Rita",
      hobbies: [],
      image: "https://source.unsplash.com/100x100/?person,rita",
    },
    {
      _id: "p4",
      name: "Ricci",
      hobbies: [" Traveling", " Coding", " Reading"],
      image: "https://source.unsplash.com/100x100/?person,ricci",
    },
  ]);

  const [selectedPerson, setSelectedPerson] = useState();
  const [message, setMessage] = useState("");

  const showHobbies = () => {
    selectedPerson.hobbies.length > 0
      ? setMessage(
          selectedPerson.name + 's ' + "hobbies are: " + selectedPerson.hobbies
        )
      : setMessage('Unfortunately, ' + selectedPerson.name + ' ' + "don't have any hobbies.");
  };

  const displayHobbies = (person) => {
    setSelectedPerson(person);
    // setMessage(showHobbies);
    // setMessage(person.name + "s" + " hobbies are: " + person.hobbies);
    setMessage(person.name + " was selected ");
  };


  return (
    <div className="App">
      <h1>Hobbies Challenges</h1>
      <div className="people">
        {people.map((person) => (
          <div
          key={person._id}
          onClick={() => displayHobbies(person)}
          className="person"
          >
            <img src={person.image} alt={person.name} />
            <div className="name">{person.name}</div>
            <div className="hobbies">hobbies:</div>
            <div className="hobby">{person.hobbies}</div>
          </div>
        ))}
      </div>
      <button onClick={()=> showHobbies()}>show hobbies!</button>
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
    </div>
  );
}

export default App;
