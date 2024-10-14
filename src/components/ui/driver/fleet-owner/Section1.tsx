// pages/index.tsx
import Head from "next/head";
import p1 from "@/../public/driver/fleet-owner/section1.jpeg";
import p2 from "@/../public/driver/captain/section1/p2.png";

// import p2 from "@/../public/driver/captain/section1/p2.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="bg-graish text-white lg:mt-20 mt-20 lg:h-[460px] lg:relative">
      <Head>
        <title>AzOve - Become a Fleet Owner</title>
      </Head>
      <div className="flex lg:flex-row flex-col justify-between h-full">
        <div className="lg:w-2/5 flex flex-col justify-center items-start lg:px-20 p-8">
          <h1 className="text-3xl font-bold mb-4 ">
            <span className="text-customYellow">MAXIMISE </span> YOUR <br />
            {`FLEET'S`} <span className="text-customYellow">POTENTIAL</span>
          </h1>
          <p className="text-base mb-8">
            Built for Fleet owners, Oz Ove Fleet Management empowers you to
            manage drivers and vehicles more efficiently.
          </p>
          <button className="bg-customYellow text-black font-bold py-2 px-4 rounded">
            Deliver Now
          </button>
        </div>
        <div className="lg:w-3/5 relative lg:py-0 py-10 ">
          <Image
            src={p1}
            alt="Become a driver"
            layout="fill"
            objectFit="cover"
            className="lg:h-full lg:w-full lg:block hidden "
          />
          <div className="lg:absolute lg:-top-5 lg:right-40  bg-gray-50 shadow-lg lg:w-96 lg:m-10 my-10 mx-4  rounded-lg z-20">
            <div className="pt-4 ml-10">
              <Image
                src={p2}
                alt="Ozove"
                //   layout="fill"
                //   objectFit="cover"
                className="h-[30px] w-[120px] lg:block hidden object-fill items-center justify-center ml-20 mb-4"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 px-8">
              Become a Fleet Owner
            </h2>
            <form>
              <div className="px-8 overflow-auto lg:h-[270px] scrollbar-custom ">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="role"
                  >
                    What is your role in your Fleet? *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="role"
                    type="text"
                    placeholder="Owner, Manager, Operator"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="company"
                  >
                    Tell us about your Fleet *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="company"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone number *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="+61 2 6150 7771"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="tranthuy.nute@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="region"
                  >
                    Which region is your Fleet in? *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="region"
                    type="text"
                    placeholder="Tasmania"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="drivers"
                  >
                    How many drivers would you like to register? *
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="drivers"
                    type="text"
                    placeholder="185"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-customYellow hover:bg-customYellow text-white font-bold py-2 px-4 w-full rounded rounded-t-none focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
