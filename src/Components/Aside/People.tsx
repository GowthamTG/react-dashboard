import React from "react";

// type Props = {};

export default function People() {
  return (
    <div className="people">
      <div className="main-heading">People</div>
      <div className="people-content">
        <div className="people-card">
          <div className="people-card-image-box">
            <img
              className="people-card-image"
              src="https://avatars.githubusercontent.com/u/40751854?v=4"
              alt=""
            />
          </div>
          <div className="people-card-text">@Carlo</div>
        </div>
        <div className="people-card">
          <div className="people-card-image-box">
            <img
              className="people-card-image"
              src="https://avatars.githubusercontent.com/u/40751854?v=4"
              alt=""
            />
          </div>
          <div className="people-card-text">@Jimmy</div>
        </div>
        <div className="people-card">
          <div className="people-card-image-box">
            <img
              className="people-card-image"
              src="https://avatars.githubusercontent.com/u/40751854?v=4"
              alt=""
            />
          </div>
          <div className="people-card-text">@Jaswanth</div>
        </div>
      </div>
    </div>
  );
}
