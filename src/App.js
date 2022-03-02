import './App.css';
import Header from "./Components/Header/Header";
import ToDoItem from "./Components/ToDoList/ToDoItem/ToDoItem";
import Form from "./Components/Form/Form";
import {useState} from "react";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
    let [tasks, setTask] = useState([{id: 1, title: "task1", description: "task1 Description"},
                                                {id: 2, title: "task2", description: "task2 Description"},
                                                {id: 3, title: "task3", description: "task3"},
                                                {id: 4, title: "task4", description: "task4"},
    ]);

    const createTask = (newTask) => {
        setTask([...tasks, newTask])
    }

    let removeTask = (task) =>{
        setTask(tasks.filter(t=>t.id !== task.id))
    }

  return (
    <div className="App">
        <Header/>
        <div className="container">
            <h1 style={{marginTop: 0}}>To do list</h1>
            <Form create={createTask}/>

            {tasks.length !== 0
                ?
                <ToDoList tasks={tasks} remove={removeTask}/>
                :
                <h1 style={{textAlign: 'center'}}>Tasks not added</h1>}

        </div>

    </div>
  );
}

export default App;
