import React from "react";
import Navb from "@/components/Navb";
import Auth from "@/components/Auth";
import CourseCard from "@/components/CourseCard";
import { Container } from "react-bootstrap";
import Image from "next/image";

function Courses() {
  const data = [
    {
      src: "/img1.jpg",
      title: "Vertical Farming Revolution",
      body: "Urban farmer Sarah transformed her city rooftop into a vertical farm, utilizing hydroponics to grow fresh produce year-round. Her innovative approach reduces food miles and promotes sustainable urban living.",
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
    {
      src: "/img2.jpg",
      title: "Organic Dairy Success",
      body: "After inheriting a traditional dairy farm, Jake transitioned to organic practices. By focusing on sustainable grazing and holistic animal care, he increased profitability and built a loyal customer base.",
    },
  ];
  return (
    <>
      <Navb alwaysActive>
        <Auth />
      </Navb>
      <Container>
        <h1 className="mt-32 text-6xl wp mb-7 mx-auto text-center relative">
          Agripreneurship stories of inspiration
          <span className="bg-cmedium w-10 h-2 rounded-2xl absolute top-full"></span>
        </h1>
        <div className="flex-wrap flex">
          {data.map(({ src, title, body }) => (
            <div className="lg:basis-1/2 basis-full p-4">
              <div className="flex-1 flex sm:flex-row flex-col items-center">
                <span className={`flex-1 h-full`}>
                  <Image
                    src={src}
                    className=""
                    alt=""
                    width={550}
                    height={100}
                  />
                </span>
                <div className="flex-1">
                  <h3 className="bg-cmedium text-3xl pl-3">{title}</h3>
                  <p className="pl-3 line-clamp-5">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Courses;
