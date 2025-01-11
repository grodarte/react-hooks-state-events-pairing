import { useState } from "react"
import Comment from "./Comment"

function Comments({ comments, onRemoveComment }){
    const [search, setSearch] = useState("")
    const displayComments = search ? comments.filter(comment=>comment.user.includes(search.toLowerCase())) : comments

    const commentElements = displayComments.map(comment=> <Comment key={comment.id} commentData={comment} onRemoveComment={onRemoveComment}/>)

    return (
        <>
            <hr/>
            <h2>{comments.length} Comments</h2>
            <input type="text" name="search" placeholder="Search Username" onChange={(e)=>setSearch(e.target.value)} value={search}/>
            {commentElements}
        </>
    )
}

export default Comments