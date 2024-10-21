
import Comment from "./Comment";

const CommentList = ({comments}) =>{
    return comments.map((comment,index)=>(
        <div  key={index} className="mb-6 rounded-md shadow-md mt-1 ">
          <Comment data={comment}/>
         <div className="ml-8 mt-3 pl-2">
     <CommentList comments= {comment.replies}/>
        </div>
      </div>)
)
}
export default CommentList;