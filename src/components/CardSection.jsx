import React from "react";
import Card from "./Card";
import Header from "./Header";
import { Container } from "react-bootstrap";

export default function CardSection() {
  const data = [
    {
      src: "/img1.jpg",
      title: "Vertical Farming Revolution",
      body: "Urban farmer Sarah transformed her city rooftop into a vertical farm, utilizing hydroponics to grow fresh produce year-round. Her innovative approach reduces food miles and promotes sustainable urban living.",
    },
    {
      src: "/img2.jpg",
      title: "Organic Dairy Success",
      body: "After inheriting a traditional dairy farm, Jake transitioned to organic practices. By focusing on sustainable grazing and holistic animal care, he increased profitability and built a loyal customer base.",
    },
    {
      src: "/img3.jpg",
      title: "Tech-Driven Crop Monitoring",
      body: "Innovator Mia developed a mobile app that uses AI to help farmers monitor crop health in real-time. Her startup empowers local farmers to make data-driven decisions, leading to increased yields.",
    },
    {
      src: "/img4.jpg",
      title: "Community Supported Agriculture (CSA)",
      body: "Mark and Lisa launched a CSA program that connects consumers directly with their farm. By offering subscription boxes of seasonal produce, they generate steady income and foster community.",
    },
  ];

  return (
    <Container>
      <br />
      <br />
      <br />
      <Header>Entrepreneurship in Agribusiness - IMPACT Stories</Header>
      <hr />
      <div className="flex w-full gap-5 lg:flex-row flex-col mt-16">
        <Card data={data[0]} />
        <Card data={data[1]} />
      </div>
      <div className="flex w-full lg:flex-row flex-col gap-5 mt-16">
        <Card data={data[2]} />
        <Card data={data[3]} />
      </div>
    </Container>
  );
}
