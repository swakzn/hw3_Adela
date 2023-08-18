import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasksList: [],
        };
    }

    addTask = () => {
        const { task, tasksList } = this.state;
        if (task.trim() !== '') {
            this.setState({
                tasksList: [...tasksList, task],
                task: '',
            });
        }
    };

    render() {
        const { task, tasksList } = this.state;

        return (
            <div className="Todo-list">
                <div className="input">
                    <h1>HW 3</h1>
                    <input
                        type="text"
                        placeholder="New to do"
                        value={task}
                        onChange={(e) => this.setState({ task: e.target.value })}
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <div className="list">
                    {tasksList.map((task, index) => (
                        <div key={index}>{task}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Todo;