import React, { Component } from 'react';

export default class AddTodos extends Component {
    state={
        'name':null
    }
    handleChange=(e)=>{
        this.setState({
            ['name']:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='item'></label>
                    <input onChange={this.handleChange} type='text' placeholder='Add a todo..' id='item'/>
                    <button className='btn btn-add'>Add</button>
                </form>
            </div>
        )
    }
}