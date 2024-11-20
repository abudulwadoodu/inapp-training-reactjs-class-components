import { Component } from "react";

class Todo extends Component {

    constructor() {
        super();

        this.state = {title: "Todo List", todoList: []};
    }

    componentDidMount() {
        const todoList = [
            {
                "id": 1,
                "name": "Task 1"
            },
            {
                "id": 2,
                "name": "Task 2"
            },
            {
                "id": 3,
                "name": "Task 3"
            },
            {
                "id": 4,
                "name": "Task 4"
            },
            {
                "id": 5,
                "name": "Task 5"
            }
        ];

        this.setState({
            todoList
        });
    }


    getTitle() {
        return <div>{this.state.title}</div>
    }

    getData() {
        return this.state.todoList.map((data) => {
            return <div key={data.id}>
                <span>{data.id}</span>.&nbsp;
                <span>{data.name}</span>
            </div>
        });
    }

    render() {
        return(
            <div className="component1">
                <h1>{this.getTitle()}</h1>
                <div>{this.getData()}</div>
            </div>
        )
    }
}

export default Todo