"use client";
import React from "react";
import Header from "./Header";
import Image from "next/image";
import agric from "@/images/course.webp";
import { Container } from "react-bootstrap";
import Link from "next/link";

function CourseSec() {
  return (
    <Container className="flex pt-24 flex-col items-center">
      <Header>Free Online Agripreneurship Course</Header>
      <Image
        src={agric}
        width={500}
        height={400}
        alt="mypic"
        className="rounded-2xl mt-5 md:rounded-none"
      />
      <span className="mb-9 mt-3 font-bold">Agripreneurship101</span>
      <p className="text-center">
        The UN-FAO have recently added a new course to their online learning
        academy. Agripreneurship 101 aims to provide guidance on how to start or
        improve an agribusiness. It shows how to identify, evaluate and pursue
        opportunities in a given agri-food value chain. To learn more about this
        free course and to register to follow it please{" "}
        <Link href={"/courses"}>click here</Link>
      </p>
    </Container>
  );
}

export default CourseSec;
