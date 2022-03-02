import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Form = ({create}) => {
    let [task, setTask] = useState({title: '', description: ''});

    let addTask = (e) =>{
        e.preventDefault()
        const newTask={
            ...task, id: Date.now()
        }
        create(newTask);
        setTask({title: '', description: ''})
    }
    return (
        <div>
            <Input value={task.title} onChange={e=>setTask({...task, title: e.target.value})} type="text" placeholder="Title of task"/>
            <Input value={task.description} onChange={e=>setTask({...task, description: e.target.value})} type="text" placeholder="Description of task"/>
            <Button text="Add task" onClick={addTask}/>
        </div>
    );
};

export default Form;