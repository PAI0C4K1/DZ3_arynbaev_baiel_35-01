import React from 'react';
import './ToDosPage.css'

const Todo = ({ todo }) => {
    return (
        <div>
            <p>{todo}</p>
        </div>
    );
};


const TodosPage = () => {
    const todosList = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className="div">
            <h1>Todos Page</h1>
            {todosList.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))} 
        </div>
    );
};

export default TodosPage;