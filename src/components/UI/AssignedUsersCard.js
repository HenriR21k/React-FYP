import './AssignedUsersCard.css';



export function AssignedUsersCard(props) {
  // Properties ----------------------------
  // Hooks ---------------------------------
  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  return (
      <>
        <div className="AssignedUserCard">
          {/**Insert extra div */}
          <p>{props.user.firstName+" "+props.user.lastName}</p>

        </div>
      
      
      
      </>
  )

}

export default AssignedUsersCard;