import React from "react";
import Header from "./Header";
import Image from "next/image";
import agric from "@/images/photo.jpg";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Header>about us</Header>
      <div className="flex lg:flex-row flex-col gap-4 items-center">
        <div className="basis-2/5">
          <Image
            src={agric}
            width={500}
            height={400}
            alt="mypic"
            className="rounded-2xl md:rounded-none"
          />
        </div>
        <div className="basis-3/5">
          <p>
            Agro-Hub is a final year Project done by Onyekwere Gospel Emmanuel
            with Reg No. MOUAU/CMP/19/107924 in Michael Okpara Univerisity of
            Agriculture, Umudike launched in 2024. This Project aims to help
            agribusiness professionals develop a ground-breaking course that
            enables young African entrepreneurs within the agri-food sector to
            develop or enhance their business ideas and create a high-quality
            business plan to support the launch or growth of their
            agri-business.
          </p>
          <p>
            The AgriHub has also taken the approach to reach out to emerging or
            startup agriprenuers that programmes in this webapp will be of help
            to, based upon this approach they can be supported to enhance and
            grow their businesses, moving away from subsistence and supporting
            the growth of the rural economy
          </p>
          <p>
            The AgriHub will also acts as a go to resource for the African
            entrepreneurial sector and would also host top courses from clients
            including the UN Food and Agriculture Organisation.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
