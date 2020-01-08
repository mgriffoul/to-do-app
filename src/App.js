import React from 'react';
import './App.scss';
import {Header} from './component/header/Header';
import Todo from './component/todo/Todo';
import Body from './component/body/Body';

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
