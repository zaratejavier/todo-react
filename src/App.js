import React, { Component } from "react";
import List from "./List";
import TodoForm from "./TodoForm";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn React", complete: false },
      { id: 2, name: "Learn JS", complete: true },
      { id: 3, name: "Learn JSX", complete: false },
    ],
    filter: 'All',
  };

  filterTodos = () => {
  const {todos, filter} = this.state
  switch(filter){
    case "Active":
      return todos.filter( t => !t.complete)
      case "Complete":
      return todos.filter(t=> t.complete)
      default:
      return todos;
   }
  }

  addItem = (todoName) => {
    console.log()
    //step 1 creaet the new object (todo)
    const newTodo = {id: `${Math.random()}`, name:todoName, complete: false}

    // step 2 create a new todo array with new object in it
    const newTodos = [newTodo, ...this.state.todos]
    
    //step 3
    this.setState({
      todos: newTodos,
    })
  }

  handleClick =(id) => {
    console.log("clicked")
    console.log(id)

    //editing my state
    const {todos} = this.state
    const newTodos = todos.map(todo =>{
      if(todo.id !== id){
        return todo
      }
      else{
        return {...todo, complete: !todo.complete}
      }
    })
    this.setState({
      todos: newTodos,
    })
  }

  render() {
    return (
      <div>
        <h1>todolist</h1>
        <TodoForm addItem={this.addItem} />
        <List todoClick={this.handleClick}
         name={"Todo List"}
        // items={this.state.todos}
        items={this.filterTodos()}

         />
      </div>
    );
  }
}
export default App;