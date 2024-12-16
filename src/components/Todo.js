import React, { Component } from "react";

class Todo extends Component {
    handleAddTodo = () => {
        const name = prompt("Enter TODO name:");
        if (name) {
            this.props.addTodo(name);
        }
    };

    handleEditTodo = (id, currentName) => {
        const newName = prompt("Update Task:", currentName);
        if (newName) {
            this.props.editTodo(id, newName);
        }
    };

    render() {
        const { todoList = [] } = this.props; // Default to an empty array if todoList is undefined

        return (
            <div className="component1">
                <h1>Todo List</h1>
                <ul>
                    {todoList.map(todo => (
                        <li key={todo.id}>
                            {todo.name}
                            <button onClick={() => this.handleEditTodo(todo.id, todo.name)}>Edit</button>
                            <button onClick={() => this.props.removeTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={this.handleAddTodo}>Add Task</button>
            </div>
        );
    }
}

export default Todo;