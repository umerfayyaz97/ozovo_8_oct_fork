// pages/index.tsx
import Head from "next/head";
import image from "@/../public/ride/business/section1.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="bg-graish text-white h-auto lg:h-[400px] p-4 lg:p-0 lg:mt-20  mt-16">
      <Head>
        <title>Travel United</title>
      </Head>
      <div className="flex lg:flex-row flex-col justify-between h-full">
        <div className="lg:w-2/5 flex flex-col justify-center items-start lg:px-20 p-8">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-customYellow">Corporate</span> travel,
            <span className="text-customYellow"> simplified!</span>
          </h1>
          <p className="text-lg mb-8">The Smart Choice for Business Rides</p>
          <button className="bg-white hover:bg-customYellow text-black font-bold py-2 px-4 rounded-xl">
            Register Now
          </button>
        </div>
        <div className="lg:w-2/4 lg:flex hidden justify-center mt-6 lg:mt-0">
          <Image
            src={image}
            alt="Travel United"
            className="w-full lg:w-[800px] lg:h-[400px] object-cover"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
