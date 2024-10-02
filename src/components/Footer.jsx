import React from "react";
import { Container } from "react-bootstrap";
import Logo from "./Logo";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";

const Span = ({ children }) => {
  return (
    <span className="w-10 h-10 rounded-full border-4 border-white -translate-y-1/2 fx bg-white">
      {children}
    </span>
  );
};

function Footer() {
  return (
    <div className="bg-cmedium mt-20 ">
      <Container className="flex relative py-8 flex-col items-start">
        <Logo className={"scale-125 mb-2"} />
        <span className="scale-90">All rights reserved</span>
        <div className="absolute top-0 right-0 flex gap-2">
          <Span>
            <BiLogoFacebook />
          </Span>
          <Span>
            <BiLogoTwitter />
          </Span>
          <Span>
            <BiLogoWhatsapp />
          </Span>
          <Span>
            <BiLogoInstagram />
          </Span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
