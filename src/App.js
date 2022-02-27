import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firbase";
import { collection, query, onSnapshot, addDoc} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {

    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})));
    });
    // db.collection('todos').onSnapshot(snapshot => {
    //   console.log(snapshot.docs.map(doc => doc.data().todo))
    //   setTodos(snapshot.docs.map(doc => doc.data().todo));
    // })
  },[])

  const addTodo = (event) => {
    // console.log(input)
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
    const q = query(collection(db, "todos"))
    addDoc(q, { 
      todo: input
    })
  };

  return (
    <div className="App">
      <h1>Hello </h1>
      <form>
        <FormControl>
          <InputLabel> Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
