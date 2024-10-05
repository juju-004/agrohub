import React from "react";

function Header({ children }) {
  return (
    <h1 className="mt-20 text-6xl wp mb-7 mx-auto text-center relative">
      {children}
      <span className="bg-cmedium w-10 h-2 rounded-2xl absolute top-full"></span>
    </h1>
  );
}

export default Header;
