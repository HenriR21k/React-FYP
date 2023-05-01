import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad.js";

export default function ModuleForm(props) {

  //Initialisation
  const navigate = useNavigate();
  //State

  const [module, setModule] = useState(null);
  const [showModuleStatusField, setShowModuleStatusField] = useState(false);
  const [moduleNameError, setModuleNameError] = useState(null);
  const [moduleDescriptionError, setModuleDescriptionError] = useState(null);
  const [moduleCodeError, setModuleCodeError] = useState(null);


  const handleDefaultValue = (ModuleObjectValue) => {

    if (module === null)
    {
      return "";
    }
    else if (ModuleObjectValue === "ModuleName")
    {
          return module.ModuleName;
    }
    else if (ModuleObjectValue === "ModuleDescription")
    {
          return module.ModuleDescription;
    }
    else if (ModuleObjectValue === "ModuleLevel")
    {
          return module.ModuleLevel;
    }
    else if (ModuleObjectValue === "ModuleCode")
    {
          return module.ModuleCode;
    }
    else if (ModuleObjectValue === "ModuleStartDate")
    {
          return module.ModuleStartDate;
    }
    else if (ModuleObjectValue === "ModuleEndDate")
    {
          return module.ModuleEndDate;
    }
   
  }

  useEffect(() => {setModule(props.module)}, []);

  const handleModuleNameError = (module) => {
    
    module.ModuleName.length === 0
    ? setModuleNameError("Error: Field cannot be blank")
    : setModuleNameError(null);
    
  }

  const handleModuleDescriptionError = (module) => {
    
    module.ModuleDescription.length === 0
    ? setModuleDescriptionError("Error: Field cannot be blank")
    : setModuleDescriptionError(null);
    
  }

  const handleModuleCodeError = (module) => {

    module.ModuleCode.length === 0
    ? setModuleCodeError("Error: Field cannot be blank")
    : setModuleCodeError(null);

  }

  const handleChange = (event) => {
    const updatedModule = {...module, [event.target.name]: event.target.value};
    setModule(updatedModule);
    event.target.name === "ModuleName" && handleModuleNameError(updatedModule);
    event.target.name === "ModuleDescription" && handleModuleDescriptionError(updatedModule);
    event.target.name === "ModuleCode" && handleModuleCodeError(updatedModule);
    
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (props.module.ModuleID != null)
    {
      props.onPut(module);
      props.onCancel();
    }
    else {
      if ("ModuleName" in module && "ModuleDescription" in module && "ModuleLevel" in module && "ModuleCode" in module && "ModuleStartDate" in module && "ModuleEndDate" in module) {
        {(moduleNameError === null && moduleDescriptionError === null && moduleCodeError === null)
          && props.onPost(module);
          console.log(module);
          props.onCancel()};
      }
      else {
        alert("Please enter all fields")
      }
    
    }
  }

  //View
  return (
    <>
    <FormCard>
      <Button title="X" onClick={props.onCancel} />
            <Form label = "Module Form: ">
                <FormFields>
                    <Field>
                      <FormInput name = "ModuleName" placeholder = "Enter Module title" label = "Module Name" defaultValue = {handleDefaultValue("ModuleName")} onChange={handleChange} error={moduleNameError}/>
                    </Field>
                    <Field>
                      <FormTextArea name = "ModuleDescription" placeholder = "Enter Module description (max 300 char)..." label = "Module Description" defaultValue = {handleDefaultValue("ModuleDescription")} onChange={handleChange} error={moduleDescriptionError}/>
                    </Field>
              
                      <Field>
                        <FormSelect name = "ModuleLevel" label = "Module Level" defaultValue = {handleDefaultValue("ModuleLevel")} onChange={handleChange}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                        </FormSelect>
                      </Field>
                    <Field>
                      <FormInput name = "ModuleCode" placeholder = "Enter Module code" label = "Module Code" defaultValue = {handleDefaultValue("ModuleCode")} onChange={handleChange} error={moduleCodeError}/>
                    </Field>  
                    <Field>
                      <FormInput name = "ModuleStartDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Module Start Date" defaultValue = {handleDefaultValue("ModuleStartDate")} onChange={handleChange}/>
                    </Field>
                    <Field>
                      <FormInput name = "ModuleEndDate" type = "datetime-local" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Module End Date" defaultValue = {handleDefaultValue("ModuleEndDate")} onChange={handleChange}/>
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

