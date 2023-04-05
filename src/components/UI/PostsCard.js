import './PostsCard.css';
import useLoad from "../api/useLoad.js";



export function PostsCard(props) {
  // Properties ----------------------------
  let postDate = props.post.PostDate;
  const c = { time: postDate };
  let date = new Date(c.time).toLocaleDateString();
  let UserID = props.post.UserID;
  const endpoint = `users/${UserID}`
  // Hooks ---------------------------------
  const [user, , loadingMessage3] = useLoad(endpoint);

  // Context -------------------------------
  // Methods -------------------------------
  // View ---------------------------------

  return (
      <>
        <div className="PostsCard">
          
          <div className='PostDate'>
            <p> Posted at: {date} </p>
          </div>
          <div className='PostContents'>
           <p> {props.post.PostDescription} </p>
          </div>
          <div className='PostAuthor'>
            {
              !user
              ?<p>No user</p>
              :
                <>
                <p>Posted by {user[0].firstName+" "+user[0].lastName} </p>
                </>
            }
          </div>
          
        </div>
      
      
      
      </>
  )

}

export default PostsCard;