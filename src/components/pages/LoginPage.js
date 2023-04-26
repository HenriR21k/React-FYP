import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents.js";
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth.js';
import useLoad from '../api/useLoad.js';
import Button from '../UI/Button.js';



function LoginPage() {
  // Properties ----------------------------
  const { login } = useAuth();
  const endpoint = `users`
  const [users, setUsers, loadingMessage, loadUsers] = useLoad(endpoint);
  const [selectedUser, setSelectedUser] = useState(null);

  const navigate = useNavigate();
  
  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  const navigateToHomePage = (event) => {
    event.preventDefault();
    console.log(selectedUser)
    login(selectedUser.UserID)
    navigate("./Home")
  };

  const handleChange = (event) => setSelectedUser(users[parseInt(event.target.value)]);
  // View ---------------------------------
  return (
    <>
      <FormCard>
            <Form label = "Login Form: ">
              <FormFields>
                      <Field>
                      {
                        !users 
                        ? <p>{loadingMessage}</p>
                        : <>
                          <FormSelect name = "User" label = "Select User Please" onChange={handleChange}>
                          
                            {
                              users.map((user,index) =>
                                <option key={user.UserID} value={index}>
                                  {`${user.lastName}, ${user.firstName}`}
                                </option>
                              )
                            }
                        </FormSelect>
                        </>
                      }
                      </Field>
                  <Button
                  className = "submitBtn"
                  img = ""
                  alt = ""
                  title = "Submit"
                  onClick = {navigateToHomePage}
                  type = "Button"
                  ></Button>
                </FormFields>
            </Form>
    </FormCard>
    </>
  )

}

export default LoginPage;