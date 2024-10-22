import { useState } from "react"
import Comment from "./Comment"

function Comments({ commentArray }){
    const [allComments, setAllComments] = useState(commentArray)
    const [showComments, setShowComments] = useState(true)
    const [search, setSearch] = useState("")

    function handleDelete(deletedComment){
        console.log(deletedComment)
        const newCommentList = allComments.filter(comment=> comment.id !== deletedComment.id)

        setAllComments(newCommentList)
    }

    const displayComments = search ? allComments.filter(comment=>comment.user.includes(search)) : allComments

    const commentElements = displayComments.map(comment=>{
        return <Comment key={comment.id} commentObj={comment} onDelete={handleDelete}/>
    })

    return (
        <div>
            <button onClick={()=>setShowComments(showComments=>!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <hr/>
            <h2>{commentArray.length} Comments</h2>
            <input type="text" name="search" placeholder="Search username..." value={search} onChange={(event)=>setSearch(event.target.value.toLowerCase())}/>
            {showComments ? commentElements : null}
        </div>
    )
}

export default Comments