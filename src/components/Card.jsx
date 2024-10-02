import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ data }) {
  return (
    <div className="flex-1 flex sm:flex-row flex-col items-center">
      <span className={`flex-1 h-full`}>
        <Image src={data.src} className="" alt="" width={550} height={100} />
      </span>
      <div className="flex-1">
        <h3 className="bg-cmedium text-3xl pl-3">{data.title}</h3>
        <p className="pl-3 line-clamp-5">{data.body}</p>
        <Link className="pl-3" href={"/"}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
