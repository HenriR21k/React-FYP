import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

export default function TaskForm(props) {

  //Initialisation
  const navigate = useNavigate();
  //State
  const [task, setTask] = useState(null);
  const [showTaskStatusField, setShowTaskStatusField] = useState(false);
  //Methods

  const handleDefaultValue = (taskObjectValue) => {

    if (task === null)
    {
      return "";
    }
    else if (taskObjectValue === "TaskTitle")
    {
          return task.TaskTitle;
    }
    else if (taskObjectValue === "TaskDescription")
    {
          return task.TaskDescription;
    }
    else if (taskObjectValue === "TaskStatus")
    {
          return task.TaskStatus;
    }
    else if (taskObjectValue === "TaskSetDate")
    {
          return task.TaskSetDate;
    }
    else if (taskObjectValue === "TaskDeadline")
    {
          return task.TaskDeadline;
    }
   
  }

  useEffect(() => {setTask(props.task)}, []);

  const handleChange = (event) => {
    const updatedTask = {...task, [event.target.name]: event.target.value};
    setTask(updatedTask);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (props.task.TaskID != null)
    {
      task['GroupID'] = props.groupID;
      props.onPut(task);
      navigate('/');
    }
    else {
    task['GroupID'] = props.groupID;
    task['TaskStatus'] = "Outstanding";
    console.log(task);
    props.onPost(task);
    navigate('/');
    }
  }

  //View
  return (
    <>
    <FormCard>
            <Form label = "Add Task Form: ">
                <FormFields>
                    <Field>
                      <FormInput name = "TaskTitle" placeholder = "Enter task title" label = "Task Title" defaultValue = {handleDefaultValue("TaskTitle")} onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormTextArea name = "TaskDescription" placeholder = "Enter task description (max 300 char)..." label = "Task Description" defaultValue = {handleDefaultValue("TaskDescription")} onChange={handleChange}/>
                    </Field>
                    {
                      props.task.TaskID != null &&
                      <Field>
                        <FormSelect name = "TaskStatus" label = "Task Status" defaultValue = {handleDefaultValue("TaskStatus")} onChange={handleChange}>
                          <option>Outstanding</option>
                          <option>Complete</option>
                        </FormSelect>
                      </Field>  
                    }
                    <Field>
                      <FormInput name = "TaskSetDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Set Date" defaultValue = {handleDefaultValue("TaskSetDate")} onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormInput name = "TaskDeadline" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Deadline" defaultValue = {handleDefaultValue("TaskDeadline")} onChange={handleChange}/>
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

