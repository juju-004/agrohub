"use client";

import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./Logo";
import Link from "next/link";

function Navb({ children, alwaysActive }) {
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

  let activeC = ["bg-[#fff] shadow-md", "scale-100", "active"];
  let inActiveC = ["bg-[#ffffff00] shadow-none scale-y-90", "scale-95", ""];

  return (
    <div
      id="navdiv"
      className={`fixed z-40 inset-x-0 duration-200 top-0  py-2  ${
        alwaysActive ? activeC[0] : active ? activeC[0] : inActiveC[0]
      }`}
    >
      <Navbar
        bg="#00000000"
        className={`${
          alwaysActive ? activeC[1] : active ? activeC[1] : inActiveC[1]
        } duration-300`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <div className="flex-1"></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav
              className={`mr-auto navm ${
                alwaysActive ? activeC[2] : active ? activeC[2] : inActiveC[2]
              }`}
            >
              <NavDropdown
                title="Knowledge Hub"
                className="lg:mr-6"
                id="basic-nav-dropdown"
                align={"end"}
              >
                <NavDropdown.Item href="#action/3.1">
                  featured publication : fao agripreneurship <br /> across
                  africa stories of inspiration
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href={"/courses"} className="no-underline text-black">
                    free online agripreneurship course
                  </Link>
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
