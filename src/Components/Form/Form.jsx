import React, {useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Form = () => {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('')

    return (
        <div>
            <Input value={title} onChange={event=>setTitle(event.target.value)} type="text" placeholder="Title of task"/>
            <Input value={description} onChange={event=>setDescription(event.target.value)} type="text" placeholder="Description of task"/>
            <Button text="Add task" />
        </div>
    );
};

export default Form;