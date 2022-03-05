import React from "react";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";

export default function UploadPage() {
  return (
    <>
      <h1 className=" Upload__main-title">Upload Video</h1>

      <form className="Upload__form" /*onSubmit={handleSubmit}*/>
        <div className="Upload__desktop-whole-container">
          <div className="Upload__form-section">
            <label className="Upload__subtitle">UPLOAD THUMBNAIL</label>
            <img
              src={Thumbnail}
              alt="thumbnail"
              className="Upload__thumbnail"
            />
          </div>
          <div className="Upload__desktop-input-container">
            <div className="Upload__form-section">
              <label className="Upload__subtitle">TITLE YOUR VIDEO</label>
              <input
                className="Upload__input-title"
                type="text"
                name="title"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="Upload__form-section">
              <label className="Upload__subtitle">
                ADD A VIDEO DESCRIPTION
              </label>
              <input
                className="Upload__input-description"
                type="text"
                name="description"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </div>
        <div className="Upload__button-container">
          <button className="Upload__publish-button" type="submit">
            PUBLISH
          </button>
          <button className="Upload__cancel-button" type="submit">
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}
