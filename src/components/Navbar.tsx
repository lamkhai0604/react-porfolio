import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//STYLES
import {
  SidebarWrapper,
  Title,
  NavbarLink,
  StyledLink,
} from "../utils/styled-components";

class Header extends Component {
  render() {
    return (
      <SidebarWrapper>
        <Title>My Porfolio</Title>
        <NavbarLink>
          <NavLink to="/" className="Navbar-text">
            <StyledLink style={{}}>Home</StyledLink>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#8e9b97" }}
            to="/Home/AboutMe"
            className="Navbar-text"
          >
            <StyledLink>About Me</StyledLink>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#8e9b97" }}
            to="/Home/MyProjects"
            className="Navbar-text"
          >
            <StyledLink>My Projects</StyledLink>
          </NavLink>
          <NavLink
            activeStyle={{ color: "#8e9b97" }}
            to="/Home/ContactMe"
            className="Navbar-text"
          >
            <StyledLink>Contact Me</StyledLink>
          </NavLink>
        </NavbarLink>
      </SidebarWrapper>
    );
  }
}

export default Header;
