import AssignedUsersCard from './AssignedUsersCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';
import Modal from './Modal';
import { useState } from 'react';
import Button from './Button';
import GroupMemberList from './GroupMemberList';


export function AssignedUsersList(props) {

   
    return (
        <div>
        <CardContainer className={classes.list}>
            {props.users.map(user => (
                <AssignedUsersCard
                    key={user.UserID}
                    user={user}
                    
                />
            ))}
        </CardContainer>

    
    </div>
       
    );
}

export default AssignedUsersList;