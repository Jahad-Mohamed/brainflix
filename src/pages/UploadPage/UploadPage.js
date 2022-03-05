import React from "react";

export default function UploadPage() {
  return (
    <>
      <h1 className=" Upload__main-title">Upload Video</h1>
      <form className="Upload__form" /*onSubmit={handleSubmit}*/>
        <div className="Upload__form-section">
          <label className="Upload__subtitle">UPLOAD THUMBNAIL</label>
          <input type="text" name="title" />
        </div>
        <div className="Upload__form-section">
          <label className="Upload__subtitle">TITLE YOUR VIDEO</label>
          <input
            type="text"
            name="title"
            placeholder="Add a title to your video"
          />
        </div>
        <div className="Upload__form-section">
          <label className="Upload__subtitle">ADD A VIDEO DESCRIPTION</label>
          <input
            type="text"
            name="description"
            placeholder="Add a description to your video"
          />
        </div>

        <button className="Upload__publish-button" type="submit">
          PUBLISH
        </button>
      </form>
    </>
  );
}
