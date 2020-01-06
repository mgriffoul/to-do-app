import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: true,
        };
    }

    handleClick = () => {
        this.setState({todo: false})
    };

    reset = () => {
        this.setState({todo: true})
    };

    render() {

        let {todo} = this.state;
        let todoClassName = todo ? '' : 'done';

        return (
            <div className={'todo'}>
                <span className={todoClassName}> Ma première Todo </span>
                <button onClick={this.handleClick}> done</button>
                <button onClick={this.reset}> reset</button>
            </div>
        )
    }
}
