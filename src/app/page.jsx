import React from "react";
import Navb from "@/components/Navb";
import Auth from "@/components/Auth";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import Head from "next/head";

function Index() {
  return (
    <>
      <Navb>
        <Auth />
      </Navb>
      <Hero />
      <About />
      <CardSection />
      <Footer />
    </>
  );
}

export default Index;
