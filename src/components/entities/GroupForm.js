import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import useLoad from "../api/useLoad.js";

export default function GroupForm(props) {

  //Initialisation
  const navigate = useNavigate();
  //State

  const [group, setGroup] = useState(null);

  //Methods

  const handleDefaultValue = (GroupAttributeName) => {

    if (group === null)
    {
      return "";
    }
    else if (GroupAttributeName === "GroupName") 
    {
          return group[GroupAttributeName];
    }
    
   
  }

  useEffect(() => {setGroup(props.group)}, []);

  const handleChange = (event) => {
    const updatedGroup = {...group, [event.target.name]: event.target.value};
    setGroup(updatedGroup);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    group['projectID'] = props.projectID;
    props.onPost(group);
    console.log(group);

    props.onCancel();
    
  }

  //View
  return (
    <>
    <FormCard>
      <Button title="X" onClick={props.onCancel} />
            <Form label = "Group Form: ">
                <FormFields>
                    <Field>
                      <FormInput name = "GroupName" placeholder = "Enter Group title" label = "Group Name" defaultValue = {handleDefaultValue("GroupName")} onChange={handleChange}/>
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

