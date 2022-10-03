import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import SideNavGreet from "./SideNavGreet";
import SideNavItem from "./SideNavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideNav() {
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
    <section id="side-nav" className="side-nav">
      <div className="logo-box" onClick={openSideNav}>
        {/* <i className="logo fa-brands fa-stumbleupon"></i> */}{" "}
        <FontAwesomeIcon className="logo" icon={["fas", "blog"]} />
        <div className="logo-text">Dashboard</div>
      </div>
      <div className="side-nav-content">
        <SideNavGreet />
        <div className="side-nav-group">
          <SideNavItem isActive={true} name="Home" iconName="house-chimney" />
          <SideNavItem
            isActive={false}
            name="Profile"
            iconName="address-card"
          />
          <SideNavItem isActive={false} name="Messages" iconName="message" />
          <SideNavItem isActive={false} name="History" iconName="clock" />
          <SideNavItem isActive={false} name="Task" iconName="list-check" />
          <SideNavItem isActive={false} name="Communities" iconName="users" />
        </div>
        <div className="side-nav-group">
          <SideNavItem isActive={false} name="Settings" iconName="gear" />
          <SideNavItem isActive={false} name="Support" iconName="envelope" />
          <SideNavItem isActive={false} name="Privacy" iconName="shield" />
        </div>
      </div>
    </section>
  );
}
