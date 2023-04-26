import PostsCard from './PostsCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';
import {Form, FormInput, FormSelect, FormTextArea, FormCard, FormFields, Field} from "../UI/FormComponents"
import Button from './Button';
import { useState } from 'react';
import API from '../api/apiRequest';


export function PostList(props) {
    
    const [PostDescription, setPostDescription] = useState(null);
    const endpoint = `tasks/${props.TaskID}/posts`
    const user = props.user

    const handleFeedbackPost = async (newPost) => {
        const outcome = await API.post('tasks/posts', newPost);
        props.loadPosts(endpoint)
      }

    const handleChange = (event) => {
      //  const updatedPost = {...posts, [event.target.name]: event.target.value};
        setPostDescription(event.target.value);
        console.log(PostDescription);
      };

      const handleSubmit = async (event) => {
        event.preventDefault()
        let posts = {
            TaskID: props.TaskID,
            UserID: user,
            PostDescription: PostDescription,
            PostDate: new Date().toISOString()
        }

        if (posts.PostDescription === null || posts.PostDescription === '') {
            alert("Please do not leave post field blank")
        }
        else {
            handleFeedbackPost(posts)
            setPostDescription('');
        }
        

        }
      

   
    return (
        
        <CardContainer className={classes.list}>
            
                <FormTextArea name = "PostDescription" placeholder = "Enter Post (max 300 char)..." value={PostDescription} onChange={handleChange}/>
                <Button
                    className="addPost"
                    img="https://img.icons8.com/material-outlined/48/plus-math--v1.png"
                    title = "Submit Post"
                    onClick = {handleSubmit}
                    type = "Button"
                />
            
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