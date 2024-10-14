import Section1 from "@/components/ui/ride/business/Section1";
import Section2 from "@/components/ui/ride/business/Section2";
import Section3 from "@/components/ui/ride/business/Section3";
import Section4 from "@/components/ui/ride/business/Section4";
import Section5 from "@/components/ui/ride/business/Section5";
import Section6 from "@/components/ui/ride/business/Section6";
import Section7 from "@/components/ui/ride/business/Section7";
import Section8 from "@/components/ui/ride/business/Section8";
import Head from "next/head";
import React from "react";

export default function BusinessRidePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Ozove Business Rides - Tailored Transport Solutions for Your Business
        </title>
        <meta
          name="description"
          content="Discover business rides with Ozove. Enjoy reliable, professional, and efficient transport solutions tailored to your business needs across Australia."
        />
        <meta
          name="keywords"
          content="Ozove business rides, corporate transportation, business transport, reliable business travel, professional ride services, ride-sharing Australia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.ozove.com.au/ride/business" />
        <meta
          property="og:title"
          content="Ozove Business Rides - Tailored Transport Solutions for Your Business"
        />
        <meta
          property="og:description"
          content="Optimize your business travel with Ozove's professional ride services. Tailored solutions to meet all your corporate transportation needs."
        />
        <meta
          property="og:url"
          content="https://www.ozove.com.au/ride/business"
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
