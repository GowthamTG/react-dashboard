import React from "react";

// type Props = {};

export default function Announcements() {
  return (
    <div className="announcements">
      <div className="main-heading">Announcements</div>
      <div className="announcement-content">
        <div className="announcement-card">
          <div className="announcement-heading">Heading</div>
          <div className="announcement-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            voluptatibus possimus
          </div>
        </div>
        <hr className="announcement-line" />
        <div className="announcement-card">
          <div className="announcement-heading">Heading</div>
          <div className="announcement-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            voluptatibus possimus
          </div>
        </div>
        <hr className="announcement-line" />
        <div className="announcement-card">
          <div className="announcement-heading">Heading</div>
          <div className="announcement-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            voluptatibus possimus
          </div>
        </div>
      </div>
    </div>
  );
}
