import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    checkTodo = () => {
        this.props.checkTodo(this.props.index);
    };

    render() {

        const {done, title, checkTodo, reset, index} = this.props;
        let todoClassName = done ? 'done' : '';

        return (
            <div className={'todo'}>
                <span className={todoClassName}> {title} </span>
                <button onClick={this.checkTodo}> done</button>
                <button onClick={reset}> reset</button>
            </div>
        )
    }
}
