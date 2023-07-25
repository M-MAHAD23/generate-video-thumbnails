import "./style.css"
import loadingSVG from "../assets/loading.svg";

const Thumbnails = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    thumbnails = [],
    // eslint-disable-next-line react/prop-types
    selectedThumbnail,
    // eslint-disable-next-line react/prop-types
    setSelectedThumbnail,
    // eslint-disable-next-line react/prop-types
    isError,
  } = props;

  if (isError) {
    return (
      <pre style={{ maxWidth: 800, margin: "auto", overflow: "auto" }}>
        {JSON.stringify(isError, undefined, 2)}
      </pre>
    );
  }

  return (
    <>
      <div className="thumbnails-container">
        {thumbnails.map((image, index) => {
          if (image === "") {
            return (
              <>
                <div className="thumbnails-loader">
                  <img
                    key={`loader_${index}`}
                    src={loadingSVG}
                    alt="thumbnails-loader"
                    className="thumbnails-loader"
                    style={{ maxWidth: "", maxHeight: "45px" }}
                  />
                </div>
              </>
            );
          }

          return (
            <>
              <img
                src={image}
                alt="thumbnails"
                className={`width-100 ${image === selectedThumbnail ? "active" : ""}`}
                style={{ maxWidth: "", maxHeight: "45px" }}
                key={`thumb_${index}`}
                onClick={() => setSelectedThumbnail(image)}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Thumbnails;
