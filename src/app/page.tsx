import Section1 from "@/components/ui/home/Section1";
import Section2 from "@/components/ui/home/Section2";
import Section3 from "@/components/ui/home/Section3";
import Section4 from "@/components/ui/home/Section4";
import Section5 from "@/components/ui/home/Section5";
import Section6 from "@/components/ui/home/Section6";
import Section7 from "@/components/ui/home/Section7";
import Section8 from "@/components/ui/home/Section8";
import Section9 from "@/components/ui/home/Section9";
import Head from "next/head";
import React from "react";

export default function Page() {
  return (
    <>
      {/* SEO Meta Tags */}

      <Head>
        <title>
          Zify - Simplified Ride Booking and Fleet Management in Australia
        </title>
        <meta
          name="description"
          content="Zify offers a seamless ride booking experience across Australia. Manage your fleet, book individual or business rides, and enjoy hassle-free transportation."
        />
        <meta
          name="keywords"
          content="Zify, ride booking, fleet management, driver management, business rides, individual rides, Australia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ozove.com.au/" />
        <meta
          property="og:title"
          content="Zify - Simplified Ride Booking and Fleet Management in Australia"
        />
        <meta
          property="og:description"
          content="Book rides and manage your fleet effortlessly with Zify, tailored for both individual and business needs across Australia."
        />
        <meta property="og:url" content="https://ozove.com.au/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />
      </Head>

      {/* Page Content */}
      <Section1 />
      <Section2 />
      {/* <div className="hidden sm:block"> */}
      <Section3 />
      {/* </div> */}
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <div className="bg-graish"> */}
      <Section7 />
      {/* </div> */}
      <Section8 />
      <Section9 />
    </>
  );
}
