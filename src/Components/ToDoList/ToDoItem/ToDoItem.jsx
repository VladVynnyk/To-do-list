import React from 'react';
import classes from './ToDoItem.module.css'
const ToDoItem = (props) => {
    console.log(props.task.title)
    return (
        <div>
            <div className={classes.container}>
                <h1>{props.task.id}. {props.task.title} </h1>
                <p>{props.task.description}</p>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

export default ToDoItem;