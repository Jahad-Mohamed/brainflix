import React, { useEffect, useRef, useState } from "react";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";

const UploadPage = () => {
  const imageRef = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "title":
        return setTitle(e.target.value);
      case "description":
        return setDescription(e.target.value);
      case "img":
        console.log(e.target.files[0]);

        return setImg(URL.createObjectURL(e.target.files[0]));

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !img)
      return alert("Please fill in the form!");

    try {
      await axios.post(`http://localhost:8080/videos`, {
        title,
        description,
        img,
      });

      alert("Video added!");
      setRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageClick = () => imageRef.current.click();

  const redirectToHome = () => {
    if (redirect) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="Upload__page">
      {redirectToHome()}
      <h1 className=" Upload__main-title">Upload Video</h1>

      <form className="Upload__form" onSubmit={handleSubmit}>
        <div className="Upload__desktop-whole-container">
          <div className="Upload__form-section">
            <label className="Upload__subtitle">UPLOAD THUMBNAIL</label>
            <img
              src={img ? img : Thumbnail}
              alt="thumbnail"
              className="Upload__thumbnail"
              onClick={handleImageClick}
            />
            <input
              type="file"
              onChange={handleChange}
              name="img"
              style={{ display: "none" }}
              ref={imageRef}
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
                value={title}
                onChange={handleChange}
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
                value={description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="Upload__button-container">
          <button className="Upload__publish-button">PUBLISH</button>
          <Link to="/">
            <button className="Upload__cancel-button" type="submit">
              CANCEL
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
