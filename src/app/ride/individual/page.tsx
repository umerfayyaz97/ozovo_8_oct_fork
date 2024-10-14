import Section1 from "@/components/ui/ride/individual/Section1";
import Section2 from "@/components/ui/ride/individual/Section2";
import Section3 from "@/components/ui/ride/individual/Section3";
import Section4 from "@/components/ui/ride/individual/Section4";
import Section5 from "@/components/ui/ride/individual/Section5";
import Section6 from "@/components/ui/ride/individual/Section6";
import Section7 from "@/components/ui/ride/individual/Section7";
import Section8 from "@/components/ui/ride/individual/Section8";
import Head from "next/head";
import React from "react";

export default function IndividualRidePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Ozove Individual Rides - Your Personal Ride Awaits</title>
        <meta
          name="description"
          content="Book your individual ride with Ozove. Experience reliable, safe, and convenient transportation tailored to your needs across Australia."
        />
        <meta
          name="keywords"
          content="Ozove individual ride, personal transportation, book a ride, reliable ride, convenient travel, ride-sharing Australia"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ozove.com.au/ride/individual" />
        <meta
          property="og:title"
          content="Ozove Individual Rides - Your Personal Ride Awaits"
        />
        <meta
          property="og:description"
          content="Enjoy a personalized transportation experience with Ozove. Book your ride today and travel in comfort across Australia."
        />
        <meta
          property="og:url"
          content="https://www.ozove.com.au/ride/individual"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Page Content */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
}
