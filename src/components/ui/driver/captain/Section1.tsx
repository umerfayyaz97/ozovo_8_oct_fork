import Head from "next/head";
import p1 from "@/../public/driver/captain/section1.svg";
import p2 from "@/../public/driver/captain/section1/p2.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="bg-graish text-white lg:mt-20 mt-16 lg:h-[440px] lg:relative">
      <Head>
        <title>AzOve - Become a Driver</title>
      </Head>
      <div className="flex lg:flex-row flex-col justify-between h-full">
        <div className="lg:w-2/5 flex flex-col justify-center items-start lg:px-20 p-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-customYellow">Make</span> Your Own{" "}
            <span className="text-customYellow">Rules</span>
          </h1>
          <p className="text-base mb-8">
            Drive When You Want, Earn What You Need, And Be A Part Of The Next
            Big Thing In Mobility Services.
          </p>
          <button className="bg-white hover:bg-customYellow text-black font-bold py-2 px-4 rounded">
            Launching Soon
          </button>
        </div>
        <div className="lg:w-3/5 lg:relative z-0">
          <Image
            src={p1}
            alt="Become a driver"
            layout="fill"
            objectFit="cover"
            className="h-full w-full z-0 lg:block hidden"
          />
          <div className="">
            <div className="lg:absolute lg:-top-5 lg:right-40  bg-gray-50 shadow-lg lg:w-96 lg:m-10 my-10 mx-4  rounded-lg z-20">
              <div className="pt-4 lg:ml-10">
                <Image
                  src={p2}
                  alt="Ozove"
                  className="h-[30px] w-[120px] lg:block hidden object-fill items-center justify-center ml-20 mb-4"
                />
              </div>
              <h2 className="text-2xl px-8 p  b-2 font-bold text-black">
                Become a driver
              </h2>
              <form className="">
                <div className="px-8 overflow-auto lg:h-[270px] scrollbar-custom ">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullname"
                    >
                      Fullname
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="fullname"
                      type="text"
                      placeholder="Fullname"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="contact"
                    >
                      Contact Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="contact"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="city"
                    >
                      Driving Details
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="city"
                    >
                      <option value="perth">Perth</option>
                      <option value="sydney">Sydney</option>
                      <option value="melbourne">Melbourne</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="vehicle"
                    >
                      <option value="van">Van</option>
                      <option value="car">Car</option>
                      <option value="bike">Bike</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-customYellow hover:bg-yellow-700 text-white font-bold py-2 px-4 w-full rounded rounded-t-none focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Get Started as a Driver
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
