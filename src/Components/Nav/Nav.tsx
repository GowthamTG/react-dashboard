import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// type Props = {};

export default function Nav() {
  const { width } = useWindowDimensions();
  const openSideNav = () => {
    const sideBarDisplay = document.getElementById("side-nav") as HTMLElement;
    console.log(sideBarDisplay.style.display);
    if (width > 1080) {
      sideBarDisplay.style.display = "block";
      sideBarDisplay.style.position = "static";
      sideBarDisplay.style.height = "auto";
    } else if (
      sideBarDisplay.style.display.length === 4 ||
      sideBarDisplay.style.display.length === 0
    ) {
      sideBarDisplay.style.display = "block";
      sideBarDisplay.style.position = "fixed";
      sideBarDisplay.style.height = "100%";
      sideBarDisplay.style.zIndex = "100";
    } else {
      sideBarDisplay.style.display = "none";
    }
  };
  return (
    <section className="top-nav">
      <nav className="nav">
        <div className="nav-group mobile">
          <div className="side-nav-icon mobile hamburger">
            {/* <i className="fa-solid fa-bars" onClick={openSideNav}></i> */}
            <FontAwesomeIcon icon={["fas", "bars"]} onClick={openSideNav} />
          </div>
        </div>
        <div className="nav-group">
          <div className="side-nav-icon">
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
          </div>
          <div className="search">
            <input className="search-input" type="text" />
          </div>
        </div>
        <div className="nav-group hide">
          <div className="side-nav-icon side-nav-bell">
            {/* <i className="fa-solid fa-bell"></i> */}
            <FontAwesomeIcon icon={["fas", "bell"]} />
          </div>
          <div className="nav-image-box">
            <img
              className="nav-image"
              src="https://avatars.githubusercontent.com/u/40751854?v=4"
              alt=""
            />
          </div>
          <div className="nav-text">Gowtham T G</div>
        </div>
      </nav>
      <div className="nav-content">
        <div className="nav-content-group">
          <div className="nav-content-image-box">
            <img
              className="nav-content-image"
              src="https://avatars.githubusercontent.com/u/40751854?v=4"
              alt=""
            />
          </div>
          <div className="nav-content-greet">
            <div className="nav-content-hello">Hi There!</div>
            <div className="nav-content-username">Gowtham T G (@GowthamTG)</div>
          </div>
        </div>
        <div className="nav-content-group">
          <div className="nav-content-buttons">
            <button className="nav-content-button">New</button>
            <button className="nav-content-button">Upload</button>
            <button className="nav-content-button">Share</button>
          </div>
        </div>
      </div>
    </section>
  );
}
