import Image from "next/image";
import p1 from "@/../public/driver/fleet-owner/section2/p1.png"; // replace with your actual path
import p2 from "@/../public/driver/fleet-owner/section2/p2.png"; // replace with your actual path
import p3 from "@/../public/driver/fleet-owner/section2/p3.png"; // replace with your actual path
import p4 from "@/../public/driver/fleet-owner/section2/p4.png"; // replace with your actual path

const Section2 = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-36 bg-white">
      <div className="flex flex-col items-center space-y-6">
        <div className="bg-customYellow text-start text-graish lg:p-9 p-3 rounded-lg shadow-lg w-full">
          <h3 className="lg:text-4xl  text-xl font-bold mb-2">
            What we <span className="text-white">offer</span>
          </h3>
          <p>
            Empower your fleet operations with Zify’s advanced Fleet Management
            Dashboard. Our platform provides robust infrastructure, technology
            and access to a comprehensive driver network, designed to optimize
            your business efficiency and profitability.
          </p>
        </div>
        <div className=" justify-center ">
          <div className="flex gap-x-2 ">
            <div className="bg-gray-200 lg:w-7/12 flex flex-col lg:flex-row items-center text-black p-6 rounded-lg shadow-lg  ">
              <div className="flex-1 lg:mr-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Driver App
                </h3>
                <p className="text-sm">
                  Streamline operations with our Driver App, efficiently
                  dispatching rides and maximizing driver productivity.
                </p>
              </div>
              <Image
                src={p1}
                alt="Driver App"
                width={100}
                height={40}
                className="mt-2 lg:mt-0"
              />
            </div>
            <div className="bg-zify flex lg:w-5/12 flex-col lg:flex-row items-center text-customYellow p-6 rounded-lg shadow-lg ">
              <div className="flex-1 lg:mr-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Management Dashboard
                </h3>
                <p className="text-sm text-white">
                  Monitor and manage your fleet effectively with our intuitive
                  Management Dashboard, offering real-time insights for better
                  control.
                </p>
              </div>
              <Image
                src={p2}
                alt="Management Dashboard"
                width={100}
                height={50}
                className="mt-4 lg:mt-0"
              />
            </div>
          </div>
          <div className="flex gap-x-2 py-2">
            <div className="bg-zify lg:w-5/12 flex flex-col lg:flex-row items-center text-customYellow p-6 rounded-lg shadow-lg">
              <div className="flex-1 lg:mr-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Instant Withdrawals
                </h3>
                <p className="text-sm text-white">
                  Access your earnings quickly with Instant Withdrawals,
                  facilitating a smooth and rapid financial flow.
                </p>
              </div>
              <Image
                src={p3}
                alt="Instant Withdrawals"
                width={100}
                height={50}
                className="mt-4 lg:mt-0 h-30 w-30"
              />
            </div>
            <div className="bg-customYellow lg:w-7/12 flex flex-col lg:flex-row items-center text-black p-6 rounded-lg shadow-lg ">
              <div className="flex-1 lg:mr-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Driver Network
                </h3>
                <p className="text-sm">
                  Empower your fleet operations with Zify&apos;s advanced Fleet
                  Management Dashboard. Our platform provides robust
                  infrastructure,
                  <span className="lg:block hidden">
                    technology and access to a comprehensive driver network,
                    designed to optimize your business efficiency and
                    profitability.
                  </span>
                </p>
              </div>
              <Image
                src={p4}
                alt="Driver Network"
                width={100}
                height={40}
                className="mt-2 lg:mt-0 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
