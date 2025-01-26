// pages/index.tsx
import Head from "next/head";
import image from "@/../public/driver/captain/section3.svg";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="bg-zify text-white lg:h-[540px] lg:px-20 p-8 ">
      <Head>
        <title>Travel United</title>
      </Head>
      <div className="lg:flex  justify-between">
        <div className="lg:w-2/4 justify-center text-start items-start flex flex-col  lg:p-14  ">
          <p className="text-3xl font-bold mb-4">
            <span className="text-customYellow ">Chart</span> Your Course <br />
            <span className="text-customYellow mt-6">With Zify</span>{" "}
          </p>
          <p className="text-base mb-8">
            Zify offers you the chance to establish and grow your own
            transportation business, paving the way to a brighter future. As a
            Captain with Zify, you&apos;ll receive access to our fleet of
            vehicles and cutting-edge technology, tailored for servicing groups
            and businesses with precision and ease. Backed by a well-known
            brand, our Captains can concentrate on delivering an exceptional
            transportation experience to every passenger, ensuring every journey
            is as fun as the destination.
          </p>
          <button className="bg-white hover:bg-customYellow text-black font-bold py-2 px-4 rounded-xl">
            Launching Soon
          </button>
        </div>
        <div className="lg:w-2/4 flex justify-center items-center mt-10 ">
          <Image
            src={image}
            alt="Travel United"
            className=" lg:h-[300px] lg:w-[500px] "
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
