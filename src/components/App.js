import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.js";
import VideoDetails from "./VideoDetails.js";
import CommentList from "./CommentList.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay videoURL={video.embedUrl} title={video.title}/>
      <VideoDetails 
          title={video.title} 
          views={video.views} 
          createdAt={video.createdAt} 
          upvotes={video.upvotes} 
          downvotes={video.downvotes}
      />
      <CommentList comments={video.comments}/>
      
    </div>
  );
}

export default App;
