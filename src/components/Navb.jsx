"use client";

import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./Logo";

function Navb({ children }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div
      id="navdiv"
      className={`fixed z-40 inset-x-0 duration-200 top-0  py-2  ${
        active
          ? "bg-[#fff] shadow-md"
          : "bg-[#ffffff00] shadow-none scale-y-90 "
      }`}
    >
      <Navbar
        bg="#00000000"
        className={`${active ? "scale-100" : "scale-95"} duration-300`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <div className="flex-1"></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className={`mr-auto navm ${active ? "active" : ""}`}>
              <NavDropdown title="Knowledge Hub" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  featured publication : fao agripreneurship across africa
                  stories of inspiration
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  free online agripreneurship course
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Webinar</NavDropdown.Item>
              </NavDropdown>
              {children}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
