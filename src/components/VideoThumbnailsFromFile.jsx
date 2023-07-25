import './style.css'
import useVideoThumbnailForm from "../hooks/useVideoThumbnailForm";
import Thumbnails from "./Thumbnails";

const VideoThumbnailsFromFile = () => {
  const {
    handleGenerateThumbnails,
    handleInputFileChange,
    handleLoadAssync,
    handleNumberOfThumbnails,
    inputUrl,
    isError,
    loadAssync,
    numberOfThumbnails,
    selectedThumbnail,
    setSelectedThumbnail,
    thumbnails,
  } = useVideoThumbnailForm({
    maxThumbnails: 20,
    type: "file",
  });

  return (
    <div className='container'>
      {inputUrl && (
        <div className="video-container">
          <video
            className='video-player'
            src={inputUrl}
            poster={selectedThumbnail || ""}
            controls
          ></video>
        </div>
      )}
      <div className='input-container'>
        <input className='input-video' type="file" onChange={handleInputFileChange} accept="video/*" />
        <input
          className='input-number'
          type="number"
          placeholder="Amount of thumbnails"
          onChange={handleNumberOfThumbnails}
          value={numberOfThumbnails}
        />
        <div className='checkbox-container'>
          <label>
            <input
              className='input-checkbox'
              type="checkbox"
              onChange={handleLoadAssync}
              checked={loadAssync}
            />{" "}
            Load asynchronously
          </label>
        </div>
        <button
          className='submit-btn'
          onClick={handleGenerateThumbnails}
          disabled={!(numberOfThumbnails && inputUrl)}
        >
          Generate Thumbnails
        </button>
      </div>
      <div className='thumbnails'>
        <Thumbnails
          thumbnails={thumbnails}
          selectedThumbnail={selectedThumbnail}
          setSelectedThumbnail={setSelectedThumbnail}
          isError={isError}
        />
      </div>
    </div>
  );
};

export default VideoThumbnailsFromFile;
