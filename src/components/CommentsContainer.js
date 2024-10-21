//commentsData->list of comments;each compent has three properties name,text,replies

import CommentList from "./CommentList";
import {commentsData} from "../utils/commentsData";



const CommentsContainer = () =>{
return(
    <div className="mt-1 w-full">
            <h1 className="text-2xl font-bold text-black">Comments:</h1>
            <CommentList comments={commentsData} />

    </div>
)  
}

export default CommentsContainer;