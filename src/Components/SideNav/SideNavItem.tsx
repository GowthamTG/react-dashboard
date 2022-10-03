import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  isActive: boolean;
  name: string;
  iconName: any;
};

export default function SideNavItem({ isActive, name, iconName }: Props) {
  if (!isActive)
    return (
      <div className="side-nav-item">
        <div className="side-nav-icon">
          <FontAwesomeIcon icon={["fas", iconName]} />
        </div>
        <div className="side-nav-text">{name}</div>
      </div>
    );
  return (
    <div className="side-nav-item active">
      <div className="side-nav-icon active">
        <FontAwesomeIcon icon={["fas", iconName]} />
      </div>
      <div className="side-nav-text active">{name}</div>
    </div>
  );
}
