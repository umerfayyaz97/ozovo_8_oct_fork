// components/ContactInfo.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";
import p1 from "@/../public/contact/Section2/p1.png";
import p2 from "@/../public/contact/Section2/p2.png";
import p3 from "@/../public/contact/Section2/p3.png";
import Link from "next/link";

type ContactInfoItem = {
  icon: StaticImageData;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
};

const contactInfoData: ContactInfoItem[] = [
  {
    icon: p1,
    title: "Service Center",
    description:
      "Please contact our customer care in the In-app Chat section or Fanpage with any questions or support requests.",
  },
  {
    icon: p2,
    title: "Contact Us",
    description: "Need help or want to leave feedback?",
    link: "mailto:info@zify.com.au",
    linkText: "info@zify.com.au",
  },
  {
    icon: p3,
    title: "Our Office",
    description:
      "Our office address Level 1 45 St Georges Terrace, Perth, WA 6000",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-4 gap-6 lg:gap-0 p-6 bg-white">
      {contactInfoData.map((item, index) => (
        <div
          key={index}
          className="bg-slate flex flex-col justify-center items-center px-6 rounded-lg shadow-lg text-center w-[340px] h-[300px]"
        >
          <div className="text-3xl mb-2">
            <Image src={item.icon} alt={item.title} width={50} height={50} />
          </div>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-xs font-semibold">
            {item.description}
            {item.link && (
              <>
                <br />
                <Link href={item.link} className="text-blue-500">
                  {item.linkText}
                </Link>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
