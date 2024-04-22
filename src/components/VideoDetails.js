import React, {useState} from "react";

function VideoDetails({title, views, createdAt, upvotes, downvotes}){
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    function handleLike(){
        const newLikes = likes + 1
        setLikes(newLikes)
    }

    function handleDislike(){
        const newDislikes = dislikes + 1
        setDislikes(newDislikes)
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button value={likes} onClick={handleLike}>{likes} 👍</button>
            <button value={dislikes} onClick={handleDislike}>{dislikes} 👎</button>
            <br></br>
            <br></br>
        </>
    )
}

export default VideoDetails