import React, { Component } from 'react';
import Todos from './todos';
import AddTodos from './addTodos';

export default class App extends Component {
    
    state={
      'todos':[
        {'name':'Aman', 'id':1},
        {'name':'Goyal', 'id':2},
        {'name':'Nibbs', 'id':3}
      ]
    }
    
    deleteTodos=(id)=>{
      let todos=this.state.todos.filter(todo=>{
        return todo.id!==id;
      })
      this.setState({
         todos: todos
      })
    }

    render() {
      return(
        <AddTodos></AddTodos>  
        <div className="App">
          <h1>TODO LIST APP USING REACT</h1>
          <Todos deleteTodos={this.deleteTodos} todos={this.state.todos}></Todos>
        </div>
      )
    }
}
