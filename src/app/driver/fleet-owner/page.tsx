import Section1 from "@/components/ui/driver/fleet-owner/Section1";
import Section2 from "@/components/ui/driver/fleet-owner/Section2";
import Section3 from "@/components/ui/driver/fleet-owner/Section3";
import Section4 from "@/components/ui/driver/fleet-owner/Section4";
import Section5 from "@/components/ui/driver/fleet-owner/Section5";
import Section6 from "@/components/ui/driver/fleet-owner/Section6";
import Section7 from "@/components/ui/driver/fleet-owner/Section7";
import Head from "next/head";
import React from "react";

export default function FleetOwnerPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Ozove Fleet Owner - Manage Your Fleet with Ease</title>
        <meta
          name="description"
          content="Join Ozove as a Fleet Owner and manage your vehicles effortlessly. Maximize your fleet's potential with our advanced tools and support."
        />
        <meta
          name="keywords"
          content="Ozove Fleet Owner, fleet management, vehicle management, ride-sharing fleet, fleet owner tools, fleet support, Australia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.ozove.com.au/driver/fleet-owner"
        />
        <meta
          property="og:title"
          content="Ozove Fleet Owner - Manage Your Fleet with Ease"
        />
        <meta
          property="og:description"
          content="Take control of your fleet with Ozove. Whether you have a small or large fleet, our platform offers the tools you need for efficient management."
        />
        <meta
          property="og:url"
          content="https://www.ozove.com.au/driver/fleet-owner"
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
    </>
  );
}
