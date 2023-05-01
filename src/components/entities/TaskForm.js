import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad.js";

export default function TaskForm(props) {

  //Initialisation
  const navigate = useNavigate();
  //State

  const [task, setTask] = useState(null);
  const [showTaskStatusField, setShowTaskStatusField] = useState(false);
  const [TaskTitleError, setTaskTitleError] = useState(null);
  const [TaskDescriptionError, setTaskDescriptionError] = useState(null);
 

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

  const handleTaskTitleError = (task) => {
    
    task.TaskTitle.length === 0
    ? setTaskTitleError("Do not leave field blank")
    : setTaskTitleError(null);
    
  }

  const handleTaskDescriptionError = (task) => {

    task.TaskDescription.length === 0
    ? setTaskDescriptionError("Do not leave field blank")
    : setTaskDescriptionError(null);

  }

  const handleChange = (event) => {
    const updatedTask = {...task, [event.target.name]: event.target.value};
    setTask(updatedTask);
    event.target.name === "TaskTitle" && handleTaskTitleError(updatedTask);
    event.target.name === "TaskDescription" && handleTaskDescriptionError(updatedTask);
    console.log(TaskTitleError)
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (props.task.TaskID != null)
    {
      task['GroupID'] = props.groupID;
      props.onPut(task);
      
    }
    else {
    task['GroupID'] = props.groupID;
    task['TaskStatus'] = "Outstanding";
    console.log(task);
    props.onPost(task);
    
    }
  }

  const handleSub = async (event) => {
    event.preventDefault()

    if (props.task.TaskID != null)
    {
      task['GroupID'] = props.groupID;
      props.onPut(task);
    }
    else {
      if ("TaskTitle" in task && "TaskDescription" in task && "TaskSetDate" in task && "TaskDeadline" in task) {
        task['GroupID'] = props.groupID;
        task['TaskStatus'] = "Outstanding";
        
        console.log(TaskTitleError);
        {(TaskTitleError === null && TaskDescriptionError === null)
          && props.onPost(task)};
      }
      else {
       alert("Please do not leave the fields blank") 
      }
    }
  }

  //View
  return (
    <>
    <FormCard>
      <Button title="X" onClick={props.onCancel} />
            <Form label = "Task Form: ">
                <FormFields>
                    <Field>
                      <FormInput name = "TaskTitle" placeholder = "Enter task title" label = "Task Title" defaultValue = {handleDefaultValue("TaskTitle")} onChange={handleChange} error={TaskTitleError}/>
                    </Field>
                    <Field>
                      <FormTextArea name = "TaskDescription" placeholder = "Enter task description (max 300 char)..." label = "Task Description" defaultValue = {handleDefaultValue("TaskDescription")} onChange={handleChange} error={TaskDescriptionError}/>
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
                  onClick = {handleSub}
                  type = "Button"
                  ></Button>
                </FormFields>
            </Form>
    </FormCard>
    </>
  )
}

