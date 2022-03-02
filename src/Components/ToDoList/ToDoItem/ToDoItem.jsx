import React from 'react';
import classes from './ToDoItem.module.css'
const ToDoItem = (props) => {

    return (
        <div>
            <div className={classes.container}>
                <h1>{props.number}. {props.task.title} </h1>
                <p>{props.task.description}</p>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

export default ToDoItem;