import PostsCard from './PostsCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';


export function PostList(props) {
   
    return (
        
        
        <CardContainer className={classes.list}>
            {
                props.posts.map(post => {
                  
                    return(
                    <PostsCard 
                        key={post.PostID} 
                        post = {post} 
                    />
                    )
                })
            }
        </CardContainer>
       
    );
}

export default PostList;