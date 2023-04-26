import { useState, useEffect } from "react";
import { API } from "../api/apiRequest.js";
import useLoad from "../api/useLoad.js";
import GroupList from "../UI/GroupList";
import './Home.css';
import TeamTable from "../entities/TeamTable";
import Table from "../entities/Table.js";
import Accordian from "../entities/Accordian.js";
import StudentHome from "./StudentHome.js";
import LecturerHome from "./LecturerHome.js";
import { useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth.js';

function Home() {
  // Initialisation ------------------------------
  const { state } = useLocation(); // 
  
  const { loggedinUser } = useAuth();

  //const loggedInUserID = state.id; //OR 51 for lecturer, 42 is a Student
  const endpoint = `users/${loggedinUser}/usertype`
  const [usertype, , loadingMessage2] = useLoad(endpoint)

  let variant = ""
  {!usertype
    ? variant = "Empty"
    : variant = usertype[0].UserTypeName
  }

  console.log(variant)

  // View ----------------------------------------

    switch (variant) {
     case 'Student':
      return (

        <StudentHome
        userID = {loggedinUser}
        />
      )
     case 'Lecturer':
       return (
        <LecturerHome/>
       )
  
    }

  
}


export default Home;