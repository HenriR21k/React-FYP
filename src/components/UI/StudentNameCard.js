
import useLoad from '../api/useLoad.js';
import { useNavigate } from 'react-router-dom';
import Button from './Button.js';


function StudentNameCard(props) {
  //Initialisation -------------------

  return (

    <div className="StudentNameCard">
      
      <div className='StudentCard'>
        {     
         <p>{props.user.firstName+" "+props.user.lastName} Object={JSON.stringify(props.isAssigned)}
          {
          !props.isAssigned 
            ? <Button title="Add"/>
            : <Button title="Remove"/>
          }
         
         </p> 
        }
      </div>
    </div>
  )
};

export default StudentNameCard;