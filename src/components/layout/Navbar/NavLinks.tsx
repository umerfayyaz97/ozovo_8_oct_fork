"use client";
import React, { useState } from "react";
import { links } from "./Mylinks";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const NavLinks = ({ setOpen }: any) => {
  const [heading, setHeading] = useState("");

  const handleLinkClick = () => {
    setOpen(false);
    setHeading("");
  };

  const handleHeadingClick = (linkName: React.SetStateAction<string>) => {
    if (heading === linkName) {
      setHeading("");
    } else {
      setHeading(linkName);
    }
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer font-semibold group relative ">
            <h1
              className="py-3 flex lg:justify-center justify-between items-center md:pr-0  pr-2 group lg:w-[132px] w-full"
              onClick={() => handleHeadingClick(link.name)}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <button
                  onClick={() => handleHeadingClick(link.name)}
                  className="lg:px-2 px-7  text-white rounded-md flex items-center justify-center"
                >
                  {heading === link.name ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
              </span>
              <span className="text-xl  md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ChevronDown size={16} />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute -mt-6 font-semibold z-50 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className=" text-white bg-zify py-1 gap-10 rounded-lg shadow-2xl">
                      {link.sublinks.map((mysublinks, index) => (
                        <div key={index}>
                          {mysublinks.sublink.map((slink) => (
                            <li key={slink.name} className="text-sm my-2.5">
                              <Link
                                href={slink.link}
                                className="hover:text-primary"
                                onClick={handleLinkClick}
                              >
                                <p className="relative z-10 px-6 pb-1 border-b-2 border-b-blue-900">
                                  {slink.name}
                                </p>

                                {/* <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-customYellow transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" /> */}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${heading === link.name ? "md:hidden" : "hidden"} z-50`}
          >
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  {slinks.sublink.map((slink) => (
                    <li key={slink.name} className="py-3 pl-14">
                      <Link href={slink.link} onClick={handleLinkClick}>
                        {slink.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
