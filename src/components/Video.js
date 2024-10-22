import Comments from "./Comments"
import { useState } from "react"

function Video({ videoData }){
    const [video, setVideo] = useState(videoData)

    const {comments, createdAt, downvotes, embedUrl, id, title, upvotes, views} = video
    
    function handleLike(event){
        let name = event.target.name
        let value = Number(event.target.value) + 1
        
        setVideo({
            ...video,
            [name]: value
        })
    }

    return (
        <div>
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
            <div>
                <button name="upvotes" value={upvotes} onClick={handleLike}>{upvotes} 👍</button>
                <button name="downvotes" value={downvotes} onClick={handleLike}>{downvotes} 👎</button>
            </div>
            <br/>
            <Comments commentArray={comments}/>
        </div>
    )
}

export default Video