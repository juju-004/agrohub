import React from "react";
import Navb from "@/components/Navb";
import Auth from "@/components/Auth";
import CourseCard from "@/components/CourseCard";
import { Container } from "react-bootstrap";

function Courses() {
  const data = [
    {
      title:
        "Understanding Agribusiness, Value Chains, and Consumers in Global Food Systems",
      description:
        "This course, offered by the University of Adelaide on edX, explores the intricacies of global food systems and the role of agribusiness within them. You'll learn about the distinction between agribusiness and other business sectors, value chains, market dynamics, and consumer behavior",
      link: "https://www.edx.org/learn/agribusiness/university-of-adelaide-understanding-agribusiness-value-chains-and-consumers-in-global-food-systems?webview=false&campaign=Understanding+Agribusiness%2C+Value+Chains%2C+and+Consumers+in+Global+Food+Systems&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fagribusiness",
    },
    {
      title: "Challenges of Agribusiness Management",
      description:
        "Università Bocconi offers this course on Coursera, focusing on the complexities of agribusiness management, particularly in Italy. You'll gain insights into the heritage and excellence of Italian agriculture, challenges faced by the global agro-system, and innovation in agribusines",
      link: "https://www.coursera.org/learn/agribusiness-management-challenges",
    },
    {
      title: "e-Learning on Digital Agriculture",
      description:
        "The World Bank Group offers this course on edX, teaching individuals how Digital Agricultural Technologies (DATs) can transform the agricultural sector. You'll learn about the role of ICT and digital technologies in agriculture, empowerment of smallholder farmers, and strengthening agricultural market access",
      link: "https://www.edx.org/learn/agriculture/world-bank-group-e-learning-on-digital-agriculture?webview=false&campaign=e-Learning+on+Digital+Agriculture&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fagribusiness",
    },
    {
      title: "Sustainable Agricultural Land Management",
      description:
        "The University of Florida offers this course on Coursera, providing a comprehensive study of land and nutrient management strategies. You'll gain an understanding of agricultural and urban water quality issues, regulations governing water quality, and soil and nutrient management",
      link: "https://www.edx.org/masters/micromasters/doanex-sustainable-agribusiness?webview=false&campaign=Sustainable+Agribusiness&source=edx&product_category=micromasters&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fagribusiness",
    },
    {
      title: "Organic Farming for Sustainable Agricultural Production",
      description:
        "NPTEL and IIT Kharagpur offer this course on YouTube, covering the principles, components, and management techniques necessary for sustainable agricultural production. You'll learn about organic farming practices, sustainable agriculture, and integrated farming systems ",
      link: "https://www.coursera.org/learn",
    },
  ];
  return (
    <>
      <Navb alwaysActive>
        <Auth />
      </Navb>
      <Container>
        <h1 className="mt-32 text-6xl wp mb-7 mx-auto text-center relative">
          Courses
          <span className="bg-cmedium w-10 h-2 rounded-2xl absolute top-full"></span>
        </h1>
        <div className="flex-wrap flex">
          {data.map(({ title, link, description }) => (
            <CourseCard
              title={title}
              link={link}
              description={description}
              key={title}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Courses;
