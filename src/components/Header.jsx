"use client";
import React from "react";
import { Container } from "react-bootstrap";

function Header({ children }) {
  return (
    <Container className="w-screen fx overflow-hidden mb-7 mt-20">
      <h4 className="sm:text-5xl text-3xl wp relative text-center">
        {children}
        <span className="bg-cmedium w-10 h-2 rounded-2xl absolute top-full"></span>
      </h4>
    </Container>
  );
}

export default Header;
