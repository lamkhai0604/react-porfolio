import React, { Component } from "react";
import { Link } from "react-router-dom";
//STYLES
import {
  SidebarWrapper,
  Title,
  NavLink,
  NavbarBtn,
} from "../utils/styled-components";

class Header extends Component {
  render() {
    return (
      <SidebarWrapper>
        <Title>My Porfolio</Title>
        <NavLink>
          <Link to="/" className="Navbar-text">
            <NavbarBtn>Home</NavbarBtn>
          </Link>
          <Link to="/Home/AboutMe" className="Navbar-text">
            <NavbarBtn>About Me</NavbarBtn>
          </Link>
          <Link to="/Home/MyProjects" className="Navbar-text">
            <NavbarBtn>Projects</NavbarBtn>
          </Link>
          <Link to="/Home/Skills" className="Navbar-text">
            <NavbarBtn>Skill</NavbarBtn>
          </Link>
          <Link to="/Home/ContactMe" className="Navbar-text">
            <NavbarBtn>Contact Me</NavbarBtn>
          </Link>
        </NavLink>
      </SidebarWrapper>
    );
  }
}

export default Header;
