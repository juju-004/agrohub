import React from "react";
import Navb from "@/components/Navb";
import Auth from "@/components/Auth";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CardSection from "@/components/CardSection";
import CourseSec from "@/components/CourseSec";
import Footer from "@/components/Footer";

function Index() {
  return (
    <>
      <Navb>
        <Auth />
      </Navb>
      <Hero />
      <About />
      <CardSection />
      <CourseSec />
      <Footer />
    </>
  );
}

export default Index;
