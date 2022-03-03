import React from 'react';
import classes from "./CompletedTasksItem.module.css";

const CompletedTasksItem = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <h1>{props.number}. {props.task.title} </h1>
                <p>{props.task.description}</p>
                {/*<input type="checkbox" onChange={()=>props.remove(props.task)}/>*/}
            </div>
        </div>
    );
};

export default CompletedTasksItem;