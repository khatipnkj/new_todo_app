import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css';

function Todo({text}) {
  return (
    <List className='todo_list'>
        <ListItem>
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText primary="Todo" secondary={text}/>
        </ListItem>
    </List>
  )
}

export default Todo