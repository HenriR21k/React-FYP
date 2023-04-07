import '../UI/Accordian.css'
import { useState } from 'react';
import AssignedToGroupList from '../UI/AssignedToGroupList';
import Button from '../UI/Button';
import AltATUList from '../UI/AltATUList';

function Accordian(props) {
  // Properties ----------------------------
  const [selected, setSelected] = useState(null);
  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------
  const groups = props.groups;
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i);
  }

  //Add function which listens to button
          

  return (
      <>
      <div className="wrapper">
        <div className="accordian">      
          {
          !groups
          ? <p>No groups</p>
          : groups.map((group, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{group.GroupName+" GroupID: "+group.GroupID}</h2>
                <span>{selected == i ? '-' : '+'}</span>
              </div>
              <div className={selected == i ? 'content show' : 'content'}>

                <AltATUList
                currentGroupID={group.GroupID}
                ModuleID = {props.ModuleID}
                // closeModal = {props.closeModal}
                // openModal={props.openModal}
                ModuleMembers = {props.ModuleMembers}
                // showModal={props.showModal}
                /*
                fetchCurrentGroup={props.fetchCurrentGroup}
                onAssignUsers={props.onAssignUsers}
                getCurrentGroupmembers={props.getCurrentGroupmembers}*/
                />
                
                
           
              </div>
            </div>
          ))}
        
        </div>
      </div>
      </>
  )

}

export default Accordian;