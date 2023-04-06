import './AssignedUsersCard.css';



export function AssignedToGroup(props) {
  // Properties ----------------------------
  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  return (
      <>
        <div className="AssignedUserCard">
          {/**Insert extra div */}
          <p>{props.UserInGroup.firstName+" "+props.UserInGroup.lastName}</p>

        </div>
      
      
      
      </>
  )

}

export default AssignedToGroup;