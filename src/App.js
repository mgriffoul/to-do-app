import React from 'react';
import './App.scss';
import {Header} from './component/header/Header';
import Todo from './component/todo/Todo';

function App() {
    return (
        <div className="App">
            <Header/>
            <Todo/>
        </div>
    );
}

export default App;
