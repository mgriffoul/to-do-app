import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {done, title, checkTodo, reset} = this.props;
        let todoClassName = done ? 'done' : '';

        return (
            <div className={'todo'}>
                <span className={todoClassName}> {title} </span>
                <button onClick={checkTodo}> done</button>
                <button onClick={reset}> reset</button>
            </div>
        )
    }
}
