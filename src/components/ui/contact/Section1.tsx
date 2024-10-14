// pages/index.tsx
import Head from "next/head";
import image from "@/../public/contact/Section1.jpeg";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="bg-graish text-white lg:h-[400px] ">
      <Head>
        <title>Travel United</title>
      </Head>
      <div className="flex  lg:justify-between justify-start items-center lg:items-start">
        <div className="lg:w-2/4 lg:justify-center text-start lg:items-start flex flex-col lg:pt-40 pt-24 lg:pb-0 pb-10 px-6 lg:px-20   ">
          <h1 className="text-3xl font-bold ">
            <span className=" text-customYellow">Contact Us</span>
          </h1>
          <p className="">Got Any Concerns</p>
          <p className="text-3xl font-bold mb-4">Get in touch now .</p>
        </div>
        <div className="lg:w-2/4 lg:block hidden">
          <Image
            src={image}
            alt="Travel United"
            className=" h-[400px] w-[800px]  object-cover"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
