import React from 'react';
import ToDoItem from "./ToDoItem/ToDoItem";

const ToDoList = ({tasks}) => {
    return (
        <div>
            {tasks.map((task) => <ToDoItem task={task} key={task.id}/>)}
        </div>
    );
};

export default ToDoList;