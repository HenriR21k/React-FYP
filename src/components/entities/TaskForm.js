import {Form, FormInput, FormSelect, FormTextArea} from "./FormComponents.js";
import Button from "../UI/Button";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import './FormComponents.css'
import './TaskForm.css'


export default function TaskForm(props) {

  //Initialisation

  const navigate = useNavigate();
  
  //State
  const [task, setTask] = useState(null);
  //Methods

 

  const handleChange = (event) => {
    const updatedTask = {...task, [event.target.name]: event.target.value};
    setTask(updatedTask);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    task['GroupID'] = props.groupID;
    task['TaskStatus'] = "Outstanding";
    console.log(task);
    props.onPost(task);
    navigate('/');
    
  }

  //View
  return (
    <>
  
   


<div className="Container">
    <div className="Card">
      <h1>Add Task form:</h1>
        <div className="Form">
            <Form onSubmit={handleSubmit}>
                <div className="FormFields">
                  <div className="Field"> 
                    <FormInput name = "TaskTitle" placeholder = "Enter task title" label = "Task Title" onChange={handleChange}   />
                    </div>
                    <div className="Field">
                    <FormTextArea name = "TaskDescription" placeholder = "Enter task description (max 300 char)..." label = "Task Description" onChange={handleChange}  />
                    </div>
                    <div className="Field">
                    <FormInput name = "TaskSetDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Set Date" onChange={handleChange} />
                    </div>
                    <div className="Field">
                    <FormInput name = "TaskDeadline" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Deadline" onChange={handleChange} />
                    </div>
                <Button
                  className = "submitBtn"
                  img = ""
                  alt = ""
                  title = "Submit"
                  onClick = {handleSubmit}
                  type = "Button"
                ></Button>
              </div>

              </Form>
      </div>
    </div>
  </div>




    </>
  )

}

