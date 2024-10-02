import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <div className="h-screen text-white flex -z-10 bg-cover relative bgfbd items-center">
      <Container className="z-10">
        <h1 className="md:text-6xl text-5xl">
          Web based Agribusiness information system
        </h1>
        <h1 className="font-[f-bold] text-6xl md:text-7xl">
          For Agripreneurs in Africa
        </h1>
      </Container>
      <div className="from-black/10 via-black/20 to-black/80 bg-gradient-to-b inset-0 absolute"></div>
    </div>
  );
}

export default Hero;
