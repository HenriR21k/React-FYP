import React from 'react';
import ModuleUser from './ModuleUser';
import "./GroupMemberList.css"

function ModuleMemberList(props) {
  return (
    <>
     {console.log("This is modulememberlist"+props.loadUsersInGroup)} 
    <div className="modal">
        {
        !props.UsersInModule
        ? <p>No users</p>
        : <div className="modal-content">
            <h1>Module Members</h1>
            
            
            <button onClick={props.onCancel}>Close</button>
            
            {
              props.UsersInModule.map(user => (
                <ModuleUser
                  key={user.UserID} 
                  user={user} 
                  currentGroupID = {props.GroupID} 
                  loadUsers = {props.loadUsersInGroup} 
                  isAssigned={ 
                    props.UsersAssignedToGroup 
                      ? props.UsersAssignedToGroup.find(assignedUser => assignedUser.UserID === user.UserID) 
                      : false 
                    } 
                />
              ))
            }

        </div>
        }
    </div>
    </>
    
  );
}

export default ModuleMemberList;
