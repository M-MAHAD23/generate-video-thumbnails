import useVideoThumbnailForm from "../hooks/useVideoThumbnailForm";
import Thumbnails from "./Thumbnails";

const VideoThumbnailsFromUrl = () => {
  const {
    handleGenerateThumbnails,
    handleInputUrlChange,
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
    type: "url",
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
        <input
          className="input-videoUrl"
          type="url | text/html"
          placeholder="Direct URL of video file"
          onChange={handleInputUrlChange}
          value={inputUrl}
        />
        <input
          className='input-number'
          type="number"
          placeholder="Amount of thumbnails"
          onChange={handleNumberOfThumbnails}
          value={numberOfThumbnails}
        />
        <label>
          <input
            className='input-checkbox'
            type="checkbox"
            onChange={handleLoadAssync}
            checked={loadAssync}
          />{" "}
          Load asynchronously
        </label>
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

export default VideoThumbnailsFromUrl;
