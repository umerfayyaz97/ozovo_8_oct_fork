"use client";
import React, { useState } from "react";
import Logo from "@/../public/logo/image.png";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zify text-white z-50 font-medium fixed top-0 w-full ">
      <div className="flex items-center justify-between w-full lg:px-14 px-4">
        <div className="z-50 p-5  w-full flex justify-between">
          <Link href={"/"}>
            <Image
              src="/logo/zify_logo.png"
              alt="logo"
              width={100}
              height={54}
              className="md:cursor-pointer "
            />
          </Link>
          <div className="text-3xl md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-white rounded-md"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <ul className="md:flex hidden font-extrabold items-center justify-end  gap-4">
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks setOpen={setOpen} />
          <li>
            <Link href={"/contact"} className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <div>
            <Link
              href="/contact"
              className="py-2 px-3 w-[80px] text-center inline-block  border-white rounded-full text-white bg-blue-900 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
            >
              Login
            </Link>
          </div>
          <Link
            href="/contact"
            className="py-2 w-[80px] inline-block bg-white text-black rounded-full text-center hover:bg-customYellow transition-colors duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </ul>
        <div className="md:block hidden">{/* <Button /> */}</div>
        <ul
          className={`md:hidden bg-graish text-white font-semibold z-20 fixed w-full top-0 bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link
              href={"/"}
              className="py-7 px-3 inline-block"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <NavLinks setOpen={setOpen} />
          <Link
            href={"/contact"}
            className="py-7 px-3 inline-block"
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
          {/* <div>
            <Link
              href={"/contact"}
              className="py-2 px-3 inline-block border border-white rounded-lg text-white"
            >
              Login
            </Link>
          </div>

          <Link
            href={"/contact"}
            className="py-2 px-3 inline-block bg-white text-black rounded-lg"
          >
            Sign Up
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
