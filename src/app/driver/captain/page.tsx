import Section1 from "@/components/ui/driver/captain/Section1";
import Section2 from "@/components/ui/driver/captain/Section2";
import Section3 from "@/components/ui/driver/captain/Section3";
import Section4 from "@/components/ui/driver/captain/Section4";
import Section5 from "@/components/ui/driver/captain/Section5";
import Section6 from "@/components/ui/driver/captain/Section6";
import Section7 from "@/components/ui/driver/captain/Section7";
import Head from "next/head";
import React from "react";

export default function CaptainPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Ozove Captain - Drive with Us</title>
        <meta
          name="description"
          content="Join Ozove as a Captain and drive with us. Enjoy flexible hours, competitive pay, and the opportunity to be part of Australia's leading ride-sharing platform."
        />
        <meta
          name="keywords"
          content="Ozove Captain, drive with Ozove, ride-sharing Australia, become a driver, driver jobs, flexible driving hours, captain opportunities"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ozove.com.au/driver/captain" />
        <meta property="og:title" content="Ozove Captain - Drive with Us" />
        <meta
          property="og:description"
          content="Become a Captain with Ozove and start driving today. Enjoy the benefits of flexible hours and competitive earnings."
        />
        <meta property="og:url" content="https://ozove.com.au/driver/captain" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ozove.com.au/your-captain-image.jpg"
        />
      </Head>

      {/* Page Content */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
}
