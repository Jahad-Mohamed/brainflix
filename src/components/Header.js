import React from "react";
import LogoImg from "../assets/logo/BrainFlix-logo.svg";
import Avatar from "../components/Avatar";
import UploadIcon from "../assets/Icons/upload.svg";
import SearchIcon from "../assets/Icons/search.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={LogoImg} alt="brainflix-logo" className="header__logo"></img>
      <section className="header__forspace"></section>
      <div className="header__container-search-upload-avatar">
        <div className="header__mobile-search-avatar-container">
          <input
            img
            src={SearchIcon}
            alt="search-bar"
            className="search-bar"
            type="search"
            placeholder="   Search"
          />
          <div class="header__mobile-avatar">
            <Avatar />
          </div>
        </div>
        <button class="header__button" type="button">
          <img src={UploadIcon} alt="button" class="header__button-icon" />
          UPLOAD
        </button>
        <div className="header__tablet-avatar">
          <Avatar />
        </div>
      </div>
    </header>
  );
}
