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
  const [user, setUser] = useState({
    id: 1,
    email: "",
    text: "",
  });
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const fillEmail = (e) => {
    setEmail(e.target.value);
  };
  const fillText = (e) => {
    setText(e.target.value);
  };

  const fillFeedback = () => {
    setUser({
      ...user,
      id: new Date().toString(),
      email: email,
      text: text, 
    });
    setEmail("")
    setText("");
  }

  const showHobbies = () => {
    person.hobbies.length > 0
      ? setMessage(person.name + "s " + "hobbies are: " + person.hobbies)
      : setMessage("Unfortunately, " + person.name + " " + "has no hobbies.");
  };
  // const noHobbies = () => {
  //   person.hobbies.length > 0
  //     ? setMessage(person.name + " has " + person.hobbies.length + " hobbies")
  //     : setMessage(
  //         "Unfortunately, " + person.name + " " + "has no hobbies."
  //       );
  // };

  const countHobbies = (person) => {
    setPerson(person);
    setMessage(person.name + " has " + person.hobbies.length + " hobbies");
    // noHobbies(person)
  };

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
      <button onClick={() => showHobbies()}>show hobbies!</button>
      <div className="hobbies_message">{message}</div>

      <form className="user">
        <h2>Your user is important to us!</h2>
        <input
          type="text"
          onChange={fillEmail}
          value={email}
          className="email"
          placeholder="your email..."
        />
        <textarea
          rows="2"
          cols="50"
          type="text"
          name="text"
          onChange={fillText}
          value={text}
          className="message"
          placeholder="write a message..."
        />
      </form>
        <button onClick={fillFeedback} className="button">
          show user
        </button>
      <div className="user">{`${user.email}: ${user.text}`}</div>
      {/* <Mentions users={users} /> */}
    </div>
  );
}

export default App;
