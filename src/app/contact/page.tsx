import Section1 from "@/components/ui/contact/Section1";
import Section2 from "@/components/ui/contact/Section2";
import Section3 from "@/components/ui/contact/Section3";
import Section4 from "@/components/ui/contact/Section4";
import Head from "next/head";
import React from "react";

export default function ContactPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Ozove - Get in Touch with Us</title>
        <meta
          name="description"
          content="Need assistance or have questions? Contact Ozove today. Our support team is here to help with all your ride booking and fleet management inquiries."
        />
        <meta
          name="keywords"
          content="Ozove contact, customer support, ride booking inquiries, fleet management assistance, Australia"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ozove.com.au/contact" />
        <meta
          property="og:title"
          content="Contact Ozove - Get in Touch with Us"
        />
        <meta
          property="og:description"
          content="Contact Ozove for any questions or support you need. We're here to help with your ride booking and fleet management needs."
        />
        <meta property="og:url" content="https://ozove.com.au/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ozove.com.au/your-contact-image.jpg"
        />
      </Head>

      {/* Page Content */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
