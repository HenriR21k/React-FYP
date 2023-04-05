import React from 'react';
import GroupUser from './GroupUser';
import "./GroupMemberList.css"

function GroupMemberList(props) {
  return (
    
    <>
    <div className="modal">
        {
        !props.groupUsers
        ? <p>no group users</p>
        : <div className="modal-content">
            <h1>Group Members</h1>
            <button onClick={props.onCancel}>Close</button>
            
            {props.groupUsers.map(user => (
            <GroupUser key={user.id} user={user} taskID = {props.taskID} loadUsers = {props.loadUsers} />
            ))}

        </div>
        }
    </div>
    </>
    
  );
}

export default GroupMemberList;
