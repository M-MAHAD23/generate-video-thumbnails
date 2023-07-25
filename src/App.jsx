import { useState } from 'react';
import './App.css';
import VideoThumbnailsFromFile from './components/VideoThumbnailsFromFile';
import VideoThumbnailsFromUrl from './components/VideoThumbnailsFromUrl';

function App() {
  const [thumbSourceType, setThumbSourceType] = useState(null)

  return (
    <div className='container'>
        {
          thumbSourceType === null &&
          <div >
            <h1>Generate Thumbnail From</h1>
            <div className='button-container'>
              <button className='button' onClick={() => setThumbSourceType("File")}>File</button>
              <button className='button' onClick={() => setThumbSourceType("Url")}>Url</button>
            </div>
          </div>
        }
        <div>
          {thumbSourceType === "File" && <VideoThumbnailsFromFile />}
          {thumbSourceType === "Url" && <VideoThumbnailsFromUrl />}
        </div>
      </div>
  );
}

export default App;
