import React, {useState} from "react";

function Comment({user, comment}){
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)


    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button value={like} onClick={()=>setLike(like + 1)}>{like} 👍</button>
            <button value={dislike} onClick={()=>setDislike(dislike + 1)}>{dislike} 👎</button>
        </div>
    )
}

export default Comment