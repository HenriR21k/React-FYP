import GroupNameCard from './GroupNameCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';


export function GroupList(props) {
   
    return (
        
        
        <CardContainer className={classes.list}>
            {
                props.groups.map(group => {
                  
                    return(
                    <GroupNameCard 
                        key={group.GroupID} 
                        group = {group} 
                        userID = {props.userID}
                    />
                    )
                })
            }
        </CardContainer>
       
    );
}

export default GroupList;