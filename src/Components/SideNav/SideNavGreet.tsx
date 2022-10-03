import React from "react";

// type Props = {};

export default function SideNavGreet() {
  return (
    <div className="side-nav-group mobile">
      <div className="side-nav-item-greet">
        <div className="side-nav-content-image-box">
          <img
            className="nav-content-image"
            src="https://avatars.githubusercontent.com/u/40751854?v=4"
            alt=""
          />
        </div>
        <div className="side-nav-content-greet">
          <div className="side-nav-content-hello">Hi There!</div>
          <div className="side-nav-content-username">Gowtham T G</div>
        </div>
      </div>
    </div>
  );
}
