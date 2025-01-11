import video from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";
import { useEffect, useState } from "react";

function App() {
  const [showComments, setShowComments] = useState(true)
  const [videoData, setVideoData] = useState(video)

  function handleCommentClick(){
    setShowComments(current=>!current)
  }

  function handleRemoveComment(deletedId){
    const newCommentsArr = videoData.comments.filter(comment=>comment.id !== deletedId)

    setVideoData({
      ...videoData,
      comments: newCommentsArr
    })
  }

  return (
    <div className="App">
      <Video video={videoData} showComments={showComments} onCommentClick={handleCommentClick}/>
      {showComments && <Comments comments={videoData.comments} onRemoveComment={handleRemoveComment}/>}
    </div>
  );
}

export default App;
