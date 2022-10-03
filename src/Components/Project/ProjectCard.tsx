import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = { heading: string; description: string };

export default function ProjectCard({ heading, description }: Props) {
  return (
    <div className="project-card">
      <div className="project-card-heading">{heading}</div>
      <div className="project-card-content">{description}</div>
      <div className="project-card-actions">
        <div className="side-nav-item no-border">
          <div className="side-nav-icon no-border">
            {/* <i className="fa-solid fa-star"></i> */}
            <FontAwesomeIcon icon={["fas", "star"]} />
          </div>
        </div>
        <div className="side-nav-item no-border">
          <div className="side-nav-icon no-border">
            {/* <i className="fa-regular fa-eye"></i> */}
            <FontAwesomeIcon icon={["fas", "eye"]} />
          </div>
        </div>
        <div className="side-nav-item no-border">
          <div className="side-nav-icon no-border">
            {/* <i className="fa-solid fa-code-fork"></i> */}
            <FontAwesomeIcon icon={["fas", "code-fork"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
