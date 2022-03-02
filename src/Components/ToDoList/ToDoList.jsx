import React from 'react';
import ToDoItem from "./ToDoItem/ToDoItem";

const ToDoList = ({tasks, remove}) => {
    return (
        <div>
            {tasks.map((task, index) => <ToDoItem task={task} key={task.id} number={index+1} remove={remove}/>)}
        </div>
    );
};

export default ToDoList;