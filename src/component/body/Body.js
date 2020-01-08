import React from 'react';
import Todo from "../todo/Todo";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


            done: false,
            title: 'Ma première todo'
        };
    };

    checkTodo = () => {
        this.setState({done: true})
    };

    reset = () => {
        this.setState({done: false})
    };

    render() {

        return (
            <div>
                <Todo done={this.state.done} title={this.state.title} checkTodo={this.checkTodo} reset={this.reset}/>
            </div>
        )
    }

}

export default Body;
