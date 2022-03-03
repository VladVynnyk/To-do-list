import React from 'react';
import CompletedTasksItem from "./CompletedTasksItem/CompletedTasksItem";

const CompletedTasksList = (props) => {
    return (
        <div>
            <h1>Completed tasks</h1>
            {props.completed.map((task, index)=> <CompletedTasksItem task={task} key={task.id} number={index+1}/>)}
        </div>
    );
};

export default CompletedTasksList;