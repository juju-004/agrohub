"use client";
import React from "react";

function Header({ children }) {
  return (
    <div className="fx mx-0 mb-7 mt-20">
      <span
        className="text-5xl relative text-center"
        style={{ maxWidth: "100%", wordBreak: "break-word" }}
      >
        {children}
        <span className="bg-cmedium w-10 h-2 rounded-2xl hidden sm:flex absolute top-full"></span>
      </span>
    </div>
  );
}

export default Header;
