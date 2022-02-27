import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firbase";
import { doc, deleteDoc, updateDoc} from "firebase/firestore";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/core/styles'
import { SettingsInputAntenna } from "@material-ui/icons";
import {set, ref} from 'firebase/database'

const useStyles = makeStyles((theme) => ({
    paper: {
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000'
    }
}))

function Todo({ todo }) {
  //   const q = query(collection(db, "todos").where('id', '==', todo.id));
  const classes = useStyles()
  const[open, setOpen] = useState(false)
  const[input,setInput] = useState('')

  const handleOpen = () => {
      setOpen(true);
  }

  const updateTodo = () => {
    updateDoc(doc(db,'todos', todo.id), {
        todo: input
      });
      setOpen(false)
  }

  return (
    <>
    <Modal
        open={open}
        onClose={e => setOpen(false)}
    >
        <div className={classes.paper}>
            <h1>I am a model</h1>
            <input placeholder={todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
            <Button onClick={e => updateTodo()}>Update Todo</Button>
        </div>
    </Modal>
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={todo.todo} />
      </ListItem>
      <button onClick={e => setOpen(true)}>
          Edit
      </button>
      <DeleteForeverIcon
        onClick={(event) => {
          deleteDoc(doc(db, "todos", todo.id));
        }}
      />
      
    </List>
    </>
  );
}


export default Todo;
