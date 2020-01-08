import React from 'react';
import Todo from "../todo/Todo";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    title: 'ma 1 todo',
                    done: false
                },
                {
                    title: 'ma 2 todo',
                    done: true
                }
            ]
        };
    };


    checkTodo = (clickedIndex) => {
        const newTodos = [...this.state.todos];
        newTodos[clickedIndex].done = true;
        this.setState({todos: newTodos})
    };


    reset = () => {
        alert('reset');
    };

    render() {

        return (
            <div>
                {this.state.todos.map((todo, index) =>
                    <Todo key={index} done={todo.done} title={todo.title} index={index} checkTodo={this.checkTodo}
                          reset={this.reset}/>)}
            </div>
        )

    }

}

export default Body;
