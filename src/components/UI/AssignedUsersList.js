import AssignedUsersCard from './AssignedUsersCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';


export function AssignedUsersList(props) {
   
    return (
        
        
        <CardContainer className={classes.list}>
            {
                props.users.map(user => {
                  
                    return(
                    <AssignedUsersCard 
                        key={user.UserID} 
                        user = {user} 
                    />
                    )
                })
            }
        </CardContainer>
       
    );
}

export default AssignedUsersList;