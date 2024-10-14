import Image from "next/image";
import ozove from "@/../public/home/icons/ozove.png";
import shieldIcon from "@/../public/home/icons/shield.png";
import check from "@/../public/home/icons/check.png";
import walletIcon from "@/../public/home/icons/coin.png";
import clockicon from "@/../public/home/icons/clock.png";
import tailoredIcon from "@/../public/home/icons/setting.png";

const Section5 = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-white py-10 lg:px-16">
      <div className="flex flex-col lg:w-1/3 w-full lg:py-0 lg:px-0 py-1 px-4">
        <div className="bg-graish flex flex-row cursor-pointer text-white m-2 p-6 rounded-lg shadow-lg">
          <div className="lg:pr-8">
            <h3 className="lg:text-2xl text-3xl font-bold mb-4 text-customYellow">
              Affordable & Transparent
            </h3>
            <p className="lg:text-xs  text-base">
              Clear pricing with no hidden fees
            </p>
          </div>
          <Image
            src={walletIcon}
            alt="Affordable & Transparent"
            className="mt-20 lg:mt-0 lg:w-[80px] w-[100px] h-[100px] lg:h-[80px]"
            width={80}
            height={50}
          />
        </div>

        <div className="flex flex-row">
          <div className="bg-customYellow  cursor-pointer text-white m-2 p-5 rounded-lg shadow-lg lg:h-[200px] flex-grow">
            <div>
              {" "}
              <h3 className="lg:text-2xl text-2xl font-bold mb-4 text-black">
                Tailored To You
              </h3>
              <p className="lg:text-xs text-base ">
                Our services adapt to your requirements and timetable
              </p>
            </div>
            <div className="flex justify-items-end items-end  justify-end">
              <Image
                src={tailoredIcon}
                alt="Tailored To You"
                // className=" lg:-mt-6 w-[60px] lg:h-60px] h-[60px] pt-2"
                className="lg:w-[50px] lg:h-[50px] w-[70px] h-[70px] lg:-mt-4 lg:ml-26"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="bg-graish  cursor-pointer text-white m-2 p-5 rounded-lg shadow-lg lg:h-[200px] flex-grow">
            <div>
              <h3 className="lg:text-base text-2xl font-bold mb-2 text-customYellow">
                Integrated Mobility Solutions
              </h3>
              <p className="text-xs ">
                We blend car-sharing and delivery services into one platform
              </p>
            </div>
            <div className="flex justify-items-end items-end justify-end">
              <Image
                src={check}
                alt="Integrated Mobility Solutions"
                className=" lg:w-[60px] lg:h-[55px] w-[70px] h-[70px]  lg:ml-24"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 w-full lg:px-0 px-4 ">
        <div className="bg-graish cursor-pointer text-white m-2 p-9 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image
            src={ozove}
            alt="Integrated Mobility Solutions"
            className="lg:h-[225px] h-[240px] lg:w-[210px] w-[240px]"
            width={200}
            height={200}
          />
          <h2 className="text-xl mt-8 font-bold">
            Journeying Forward, Together.
          </h2>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col lg:w-1/3 w-[415px] lg:pl-2 pt-2 lg:pt-0  space-y-4">
        <div className="bg-customYellow cursor-pointer  text-white lg:mx-0 mx-4 p-6 rounded-lg shadow-lg h-[170px] flex justify-between items-center">
          <div className="">
            <h3 className="text-2xl font-bold mb-2 text-black">
              Secure & Safe
            </h3>
            <p className="lg:text-xs text-base">
              Highly trained and professional drivers catering to a wide range
              of customer needs
            </p>
          </div>
          <Image
            src={shieldIcon}
            alt="Secure & Safe"
            className="w-[70px] h-[70px]"
            width={70}
            height={70}
          />
        </div>

        <div className="bg-graish cursor-pointer text-white lg:mx-0 mx-4  p-6 rounded-lg shadow-lg h-[170px] flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-customYellow">
              Real-Time Tracking
            </h3>
            <p className="lg:text-xs text-base">
              Stay informed with live in-app order tracking
            </p>
          </div>
          <Image
            src={clockicon}
            alt="Real-Time Tracking"
            className="w-[70px] h-[70px]"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
