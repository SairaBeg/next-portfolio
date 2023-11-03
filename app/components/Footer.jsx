import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" z-10 footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        {" "}
        <Link
          className="text-2xl md:text-5xl text-white font-semibold"
          href={"/"}
        >
          <Image
            className="w-auto h-5"
            src="/images/_DevSaira.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
