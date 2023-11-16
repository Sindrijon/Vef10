import './App.css';
import React from 'react';
import { useRef, } from 'react';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Profile />
      <VideoComponent />      
      </header>
    </div>
  );
}



function VideoComponent() {
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <video ref={videoRef} src="HolyCow.mp4" width="320" height="240" controls></video>
      <button onClick={togglePlayPause}>Play/Pause</button>
    </div>
  );
}

const user = {
  name: 'Árni Bald',
  imageUrl: "arni.png",
  imageSize: 150,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


export default App
