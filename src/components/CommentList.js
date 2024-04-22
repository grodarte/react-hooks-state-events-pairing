import React, {useState} from "react";
import Comment from "./Comment";

function CommentList({comments}){
    const [seeComments, setSeeComments] = useState(true)
    const [searchUser, setSearchUser] = useState("")
    const commentAmount = comments.length

    const commentElements = comments.map(comment=>{
        if (seeComments && comment.user.includes(searchUser)){
            return <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
        } else {return null}

    })

    function handleClick(){
        setSeeComments(!seeComments)
    }

    function handleSearch(e){
        const search = e.target.value.toLowerCase()
        setSearchUser(search)
    }

 return(
    <>
        <button value={seeComments} onClick={handleClick}>{seeComments ? "Hide Comments" : "Show Comments"}</button>
        <hr></hr>
        <h2>{commentAmount} Comments</h2>
        <form>
            <input type="text" value={searchUser} placeholder="Search by username..." onChange={handleSearch}/>
        </form>
        {commentElements}
    </>
 )
}

export default CommentList