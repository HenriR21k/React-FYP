import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad.js";

export default function ProjectForm(props) {

  //Initialisation
  const navigate = useNavigate();
  //State

  const [project, setProject] = useState(null);

  //Methods

  const handleDefaultValue = (ProjectAttributeName) => {

    if (project === null)
    {
      return "";
    }
    else if (ProjectAttributeName === "projectName" || ProjectAttributeName === "projectDescription" || ProjectAttributeName === "projectStartDate" || ProjectAttributeName === "projectEndDate")
    {
          return project[ProjectAttributeName];
    }
    
   
  }

  useEffect(() => {setProject(props.project)}, []);

  const handleChange = (event) => {
    const updatedProject = {...project, [event.target.name]: event.target.value};
    setProject(updatedProject);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (props.project.projectID != null)
    {
      project['ModuleID'] = props.ModuleID;
      props.onPut(project);
      props.onCancel();
    }
    else {
    project['ModuleID'] = props.ModuleID;
    props.onPost(project);
    console.log(project);
    props.onCancel();
    }
  }

  //View
  return (
    <>
    <FormCard>
      <Button title="X" onClick={props.onCancel} />
            <Form label = "Project Form: ">
                <FormFields>
                    <Field>
                      <FormInput name = "projectName" placeholder = "Enter Project title" label = "Project Name" defaultValue = {handleDefaultValue("projectName")} onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormTextArea name = "projectDescription" placeholder = "Enter Project description (max 300 char)..." label = "project Description" defaultValue = {handleDefaultValue("projectDescription")} onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormInput name = "projectStartDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Project Start Date" defaultValue = {handleDefaultValue("projectStartDate")} onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormInput name = "projectEndDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Project End Date" defaultValue = {handleDefaultValue("projectEndDate")} onChange={handleChange}/>
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

