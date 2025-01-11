import { useEffect, useState } from "react"

function Video({ video, showComments, onCommentClick }){
    const {title, createdAt, embedUrl, upvotes, downvotes, views} = video
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    return (
        <>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button onClick={()=>setLikes(likes=>likes + 1)}>{likes} 👍</button>
            <button onClick={()=>setDislikes(dislikes=>dislikes + 1)}>{dislikes} 👎</button>
            <br/>
            <br/>
            <button onClick={onCommentClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
        </>
    )
}

export default Video