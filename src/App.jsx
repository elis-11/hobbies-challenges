import { useEffect, useRef, useState } from "react";
import "./App.css";

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

  const [person, setPerson] = useState();
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  const [users, setUsers] = useState(() => {
    const saveUsersInLS = localStorage.getItem("users");
    if (saveUsersInLS) {
      return JSON.parse(saveUsersInLS);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const [user, setUser] = useState({ email: "", text: "" });
  // Feedback
  const addFeedback = () => {
    const addUser = {
      id: new Date().toString(),
      email: user.email,
      text: user.text,
    };
    setUsers([...users, addUser]);
    setUser({ ...user, email: "", text: "" });
  };
  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    const deleteMessage = users.filter((user) => user.id !== id);
    setUsers(deleteMessage);
  };

  // Hobbies
  const showHobbies = () => {
    person.hobbies.length > 0
      ? setMessage(person.name + "s " + "hobbies are: " + person.hobbies)
      : setMessage("Unfortunately, " + person.name + " " + "has no hobbies.");
  };
  const countHobbies = (person) => {
    setPerson(person);
    setMessage(
      (person.hobbies.length === 0 ? "Unfortunately, " : "") +
        person.name +
        " has " +
        (person.hobbies.length || "no") +
        " hobbies"
    );
  };

  return (
    <div className="App">
      <h1>Hobbies Challenges</h1>
      {/* HOBBIES */}
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

      {/* FEEDBACK */}
      <div className="feedback">
        <h2>Your feedback is important to us!</h2>
        <div className="input_feedback">
          <input
            autoFocus
            ref={inputRef}
            type="text"
            className="input_email"
            name="email"
            placeholder="your email address..."
            value={user.email}
            onChange={handleUserInput}
          />
          <input
            type="text"
            className="input_text"
            name="text"
            placeholder="your feedback..."
            value={user.text}
            onChange={handleUserInput}
          />
          <button onClick={() => addFeedback()} className="add">
            Add
          </button>
        </div>
        {users.map((user) => (
          <div key={user.id} className="user">
            <div className="email">{user.email}</div>
            <div className="text">{user.text}</div>
            <button
              onClick={() => deleteFeedback(user.id)}
              className="deleteFeedback"
              role="button"
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
