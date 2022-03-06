import React from "react";
import LogoImg from "../assets/logo/BrainFlix-logo.svg";
import Avatar from "../components/avatar/Avatar";
import SearchIcon from "../assets/Icons/search.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img
          src={LogoImg}
          alt="b
      brainflix-logo"
          className="header__logo"
        ></img>
      </Link>
      <section className="header__forspace"></section>
      <div className="header__container-search-upload-avatar">
        <div className="header__mobile-search-avatar-container">
          <input
            img
            src={SearchIcon}
            alt="search-bar"
            className="search-bar"
            type="search"
            placeholder="  Search"
          />
          <div className="header__mobile-avatar">
            <Avatar />
          </div>
        </div>
        <Link className="header__upload-link" to="/upload">
          <button className="header__button" type="button">
            UPLOAD
          </button>
        </Link>
        <div className="header__tablet-avatar">
          <Avatar />
        </div>
      </div>
    </header>
  );
}
