import Image from "next/image";
import React from "react";

function Logo({ className }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <Image src={"/logo.svg"} width={20} height={20} alt="" />
      <span>Agrohub</span>
    </div>
  );
}

export default Logo;
