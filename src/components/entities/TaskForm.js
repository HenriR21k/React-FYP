import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import Button from "../UI/Button";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

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

  //Needs to stay
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
    <FormCard>
            <Form label = "Add Task Form: ">
                <FormFields>
                    <Field>
                      <FormInput name = "TaskTitle" placeholder = "Enter task title" label = "Task Title" onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormTextArea name = "TaskDescription" placeholder = "Enter task description (max 300 char)..." label = "Task Description" onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormInput name = "TaskSetDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Set Date" onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormInput name = "TaskDeadline" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Deadline" onChange={handleChange}/>
                    </Field>
                  <Button
                  className = "submitBtn"
                  img = ""
                  alt = ""
                  title = "Submit"
                  onClick = {handleSubmit}
                  type = "Button"
                  ></Button>
                </FormFields>
            </Form>
    </FormCard>
    </>
  )
}

