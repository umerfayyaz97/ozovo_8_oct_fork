// pages/index.tsx
import Head from "next/head";
import image from "@/../public/ride/individual/section1.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="bg-graish text-white lg:h-[400px] lg:mt-20 mt-10">
      <Head>
        <title>Travel United</title>
      </Head>
      <div className="flex  justify-between">
        <div className="lg:w-2/4 justify-center text-start items-start flex flex-col py-20  px-6 lg:px-20 ">
          <h1 className="text-3xl font-bold ">
            {" "}
            <span className="text-customYellow">Travel</span> United
          </h1>
          <p className="text-3xl font-bold mb-4">
            With Tailored <span className="text-customYellow">Ease</span>{" "}
          </p>
          <p className="text-lg mb-8">
            Customized Group Rides For Every Occasion
          </p>
          <button className="bg-white hover:bg-customYellow text-black font-bold py-2 px-4 rounded-xl">
            Book Now
          </button>
        </div>
        <div className="lg:w-2/4 lg:block hidden">
          <Image
            src={image}
            alt="Travel United"
            className=" h-[400px] w-[800px]"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
