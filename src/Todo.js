import React from "react";


const Todo = ({ name, complete,id, todoClick }) => (
  <li style={complete ? { ...styles.todo, ...styles.complete } : styles.todo} 
  onClick = {() => todoClick(id)}>
    {name}
  </li>
);

const styles = {
  todo: { cursor: "pointer" },
  complete: {
    color: "grey",
    textDecoration: "line-through",
  },
};
export default Todo;