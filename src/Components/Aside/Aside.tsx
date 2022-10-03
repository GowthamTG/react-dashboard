import React from "react";
import Announcements from "./Announcements";
import People from "./People";

// type Props = {};

export default function Aside() {
  return (
    <div className="others">
      <Announcements />
      <People />
    </div>
  );
}
