import Image from "next/image";
import ozove from "@/../public/home/icons/ozove.png"; // replace with your actual path
import shieldIcon from "@/../public/home/icons/shield.png"; // replace with your actual path
import p1 from "@/../public/driver/captain/Section2/p1.svg"; // replace with your actual path
import p2 from "@/../public/driver/captain/Section2/p2.svg"; // replace with your actual path
import p3 from "@/../public/driver/captain/Section2/p3.svg"; // replace with your actual path
import p4 from "@/../public/driver/captain/Section2/p4.svg"; // replace with your actual path
import p5 from "@/../public/driver/captain/Section2/p5.svg"; // replace with your actual path

const Section2 = () => {
  return (
    <div className="py-10 px-4 lg:px-8 xl:mx-28">
      <div className="flex flex-col items-center">
        <div className="bg-customYellow text-graish p-6 rounded-lg shadow-lg w-full  text-center lg:text-left">
          <h3 className="text-xl font-bold mb-4">
            The Freedom To Work And Earn In <br /> Your Own Time.
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 py-4">
          <div className="flex flex-col gap-2 w-full lg:w-1/3">
            <div className="bg-graish flex flex-row text-white p-6 rounded-lg shadow-lg h-[200px]">
              <div>
                <h3 className="text-2xl  font-bold mb-4 text-customYellow">
                  Maximize Your Earnings
                </h3>
                <p className="text-xs">
                  Your efforts count at OZ Ove. Earn more with every ride or
                  delivery you provide.
                </p>
              </div>
              <Image
                src={p1}
                alt="Maximize Your Earnings"
                className="lg:ml-4 "
                width={80}
                height={80}
              />
            </div>
            <div className="bg-customYellow flex flex-row text-black p-6 rounded-lg shadow-lg h-[200px]">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Embrace Entrepreneurship
                </h3>
                <p className="text-xs">
                  Seize control of your career journey. Pick the ride or
                  delivery orders that align with your preferences.
                </p>
              </div>
              <Image
                src={p2}
                alt="Embrace Entrepreneurship"
                className="mt-4  lg:ml-4 "
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src={p3}
              alt="Integrated Mobility Solutions"
              className=" lg:w-[600px] lg:h-[408px] w-full h-[300px] object-cover lg:rounded-xl rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/3">
            <div className="bg-customYellow flex flex-row text-black p-6 rounded-lg shadow-lg h-[200px]">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Enjoy Unparalleled Flexibility
                </h3>
                <p className="text-xs">
                  Maintain command over your schedule. Work on your terms,
                  provide services as per your convenience.
                </p>
              </div>
              <Image
                src={p4}
                alt="Enjoy Unparalleled Flexibility"
                className="mt-4  lg:ml-4 "
                width={80}
                height={80}
              />
            </div>
            <div className="bg-graish flex flex-row text-white p-6 rounded-lg shadow-lg h-[200px]">
              <div>
                <h3 className="text-xl font-bold mb-4 text-customYellow">
                  Experience Swift Payouts
                </h3>
                <p className="text-xs">
                  Maintain a steady cash flow with our immediate payout system.
                  Your earnings deposited straight to your bank.
                </p>
              </div>
              <Image
                src={p5}
                alt="Experience Swift Payouts"
                className="mt-4  lg:ml-4 w-[80px] h-[130px]"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
