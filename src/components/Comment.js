import { useState } from "react"

function Comment({ commentData, onRemoveComment }){
    const {id, comment, user} = commentData
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    return (
        <>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={()=>setLikes(likes=>likes + 1)}>{likes} 👍</button>
            <button onClick={()=>setDislikes(dislikes=>dislikes + 1)}>{dislikes} 👎</button>
            <br/>
            <button onClick={()=>onRemoveComment(id)}>Remove Comment</button>
        </>
    )
}

export default Comment