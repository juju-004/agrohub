"use client";
import Link from "next/link";
import React from "react";
import { BiCaretRight } from "react-icons/bi";

function CourseCard({ link, description, title }) {
  return (
    <div className="lg:basis-1/2 basis-full p-4">
      <div className="rounded-xl bg-white shadow-lg overflow-hidden pb-2">
        <h5 className="px-4 pt-4 bg-cmedium/60 pb-2">{title}</h5>
        <p className="px-4">{description}</p>
        <hr />
        <Link
          href={link}
          className="no-underline ml-6 text-left hover:underline flex items-center "
        >
          link here <BiCaretRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
