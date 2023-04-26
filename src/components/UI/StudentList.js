import StudentNameCard from './StudentNameCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';


export function StudentList(props) {
   
    return (
        <CardContainer className={classes.list}>

          
            {
              
                
                props.users.map(student => {
                  return (
                    <StudentNameCard 

                   
                    key={student.UserID} 
                    user = {student} 
                    loadMembers = {props.loadMembers}
                    isAssigned={ 
                      props.members
                        ? props.members.find(assignedUser => assignedUser.UserID === student.UserID) 
                        : false 
                      } 
                        
                      />
                      )
                  })
              }
        </CardContainer>
       
    );
}

export default StudentList;