import React, { Component } from "react";
import Todo from "./Todo";
import RandomTexts from "./RandomTexts";

class ParentComponent extends Component {
    constructor() {
        super();
        const useLocalStorage = JSON.parse(localStorage.getItem('useLocalStorage')) ?? true;
        this.state = {
            todoList: [],
            randomTexts: [],
            useLocalStorage
        };
        console.log(this.state?.useLocalStorage)
    }

    componentDidMount() {
        this.loadTodos();
        this.generateRandomTexts(); // Generate random texts on component mount
    }

    loadTodos = () => {
        const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
        let todoList = JSON.parse(storage.getItem('todoList')) || [];
        if (todoList.length === 0) {
            todoList = [
                { id: 1, name: "Task 1" },
                { id: 2, name: "Task 2" },
                { id: 3, name: "Task 3" },
                { id: 4, name: "Task 4" },
                { id: 5, name: "Task 5" }
            ];
            storage.setItem('todoList', JSON.stringify(todoList)); // Save default tasks to storage
        }
        this.setState({ todoList });
    }

    saveTodos = (todoList) => {
        const storage = this.state.useLocalStorage ? localStorage : sessionStorage;
        storage.setItem('todoList', JSON.stringify(todoList));
    }

    addTodo = (name) => {
        const newTodo = { id: Date.now(), name };
        this.setState((prevState) => {
            const updatedTodoList = [...prevState.todoList, newTodo];
            this.saveTodos(updatedTodoList);
            return { todoList: updatedTodoList };
        });
    };

    removeTodo = (id) => {
        this.setState((prevState) => {
            const updatedTodoList = prevState.todoList.filter(todo => todo.id !== id);
            this.saveTodos(updatedTodoList);
            return { todoList: updatedTodoList };
        });
    };

    editTodo = (id, newName) => {
        this.setState((prevState) => {
            const updatedTodoList = prevState.todoList.map(todo =>
                todo.id === id ? { ...todo, name: newName } : todo
            );
            this.saveTodos(updatedTodoList);
            return { todoList: updatedTodoList };
        });
    };

    generateRandomText = () => {
        const minLength = 8;
        const maxLength = 64;
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    generateRandomTexts = () => {
        const randomTexts = Array.from({ length: 5 }, () => this.generateRandomText());
        this.setState({ randomTexts });
    };

    handleStorageChange = (event) => {
        const useLocalStorage = event.target.checked;
        const newStorage = useLocalStorage ? localStorage : sessionStorage;
        const oldStorage = useLocalStorage ? sessionStorage : localStorage;

        // Save current state to the new storage
        newStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        localStorage.setItem('useLocalStorage', JSON.stringify(useLocalStorage));

        // Clear the old storage
        oldStorage.removeItem('todoList');

        this.setState({ useLocalStorage });
    }

    render() {
        console.log(this.state?.useLocalStorage)
        return (
            <div className="app-container">
                <label>
                    <input 
                        type="checkbox" 
                        checked={this.state.useLocalStorage} 
                        onChange={this.handleStorageChange} 
                    />
                    Use LocalStorage
                </label>
                <Todo 
                    todoList={this.state.todoList} 
                    addTodo={this.addTodo} 
                    removeTodo={this.removeTodo} 
                    editTodo={this.editTodo}
                />
                <RandomTexts 
                    randomTexts={this.state.randomTexts} 
                />
            </div>
        );
    }
}

export default ParentComponent;