import { useState } from "react";

function Comment({ commentObj, onDelete }){
    const [likes, setLikes] = useState({
        upvotes: "",
        downvotes: "",
    })
    const {id, user, comment} = commentObj

    function handleLike(event){
        let name = event.target.name
        let value = Number(event.target.value) + 1

        setLikes({
            ...likes,
            [name]: value
        })
    }

    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button name="upvotes" value={likes.upvotes} onClick={handleLike}>{likes.upvotes} 👍</button>
            <button name="downvotes" value={likes.downvotes} onClick={handleLike}>{likes.downvotes} 👎</button>
            <br/>
            <button onClick={()=>onDelete(commentObj)}>Delete</button>
        </div>
    )
}

export default Comment