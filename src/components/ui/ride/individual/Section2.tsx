import Image from "next/image";
import midImage from "@/../public/ride/individual/section2.png";
import logo1 from "@/../public/ride/individual/icons/section2/i1.png";
import logo2 from "@/../public/ride/individual/icons/section2/i2.png";
import logo3 from "@/../public/ride/individual/icons/section2/i3.png";
import logo4 from "@/../public/ride/individual/icons/section2/i4.png";

const Section2 = () => {
  return (
    <div className="bg-slate py-6 px-4 lg:p-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {/* First Column */}
        <div className="flex flex-col ">
          <div className="bg-customYellow text-black p-4 shadow-md h-[240px] flex flex-col justify-center">
            <h3 className="text-2xl lg:text-4xl font-bold mb-2">
              Why Choose Zify?
            </h3>
          </div>
          <div className="lg:hidden flex ">
            <div className="bg-white   text-black p-4 shadow-md h-[240px] lg:hidden flex flex-col">
              <div className="lg:before:flex items-center mb-2">
                <Image
                  src={logo1}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
                <h3 className="text-base font-bold lg:ml-4 lg:mt-0 mt-2">
                  On-Demand Booking
                </h3>
              </div>
              <p className="text-sm lg:text-base">
                Streamline expenses with Oz Ove’s Business account for easy
                management.
              </p>
            </div>
            <div className="bg-zify text-white p-4 shadow-md h-[240px] lg:hidden flex  flex-col">
              <div className="lg:flex items-center mb-2">
                <Image
                  src={logo2}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
                <h3 className="text-sm font-bold lg:ml-4 lg:mt-0 mt-2">
                  Multiple drop-offs
                </h3>
              </div>
              <p className="text-sm lg:text-base">
                Benefit from special discounts and promotions to reduce
                expenses.
              </p>
            </div>
          </div>

          <div className="bg-white  hidden text-black p-4 shadow-md h-[150px] lg:flex flex-col">
            <div className="flex items-center mb-2">
              <Image
                src={logo1}
                alt=""
                width={40}
                height={40}
                className="w-[40px] h-[40px]"
              />
              <h3 className="text-lg lg:text-xl font-bold ml-4">
                On-Demand Booking
              </h3>
            </div>
            <p>
              Streamline expenses with Oz Ove’s Business account for easy
              management.
            </p>
          </div>
        </div>

        {/* Mobile section 2  */}

        {/* Second Column of destop  */}
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <Image
              src={midImage}
              alt=""
              width={600}
              height={240}
              className="w-full h-[240px] object-cover"
            />
          </div>
          <div className="bg-zify text-white p-4 shadow-md h-[150px] lg:flex hidden flex-col">
            <div className="flex items-center mb-2">
              <Image
                src={logo2}
                alt=""
                width={40}
                height={40}
                className="w-[40px] h-[40px]"
              />
              <h3 className="text-lg lg:text-xl font-bold ml-4">
                Multiple drop-offs
              </h3>
            </div>
            <p>
              Benefit from special discounts and promotions to reduce expenses.
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="lg:col-span-2 flex flex-col ">
          <div className="bg-customYellow text-black p-7 shadow-md flex flex-col justify-center h-[120px]">
            <h3 className="text-lg lg:text-xl font-bold mb-2">
              Affordable Rates
            </h3>
            <p>Enjoy high-quality service without breaking the bank.</p>
          </div>
          <div className="bg-zify text-white p-7 shadow-md flex flex-col justify-center h-[120px]">
            <h3 className="text-lg lg:text-xl font-bold mb-4">
              Exclusive Savings
            </h3>
            <p>
              Benefit from special discounts and promotions to reduce expenses.
            </p>
          </div>
          <div className="flex flex-row  lg:space-y-0 ">
            <div className="bg-white text-black p-4 shadow-md lg:h-[150px] h-[240px] flex flex-col">
              <div className="lg:flex items-center mb-2">
                <Image
                  src={logo3}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
                <h3 className="text-base lg:text-xl font-bold lg:ml-4 lg:mt-0 mt-2">
                  UPC Split Fare Technology
                </h3>
              </div>
              <p>Effortlessly split fares among group members.</p>
            </div>
            <div className="bg-customYellow text-white p-4 shadow-md lg:h-[150px] h-[240px] flex flex-col">
              <div className="lg:flex items-center mb-2">
                <Image
                  src={logo4}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]  "
                />
                <h3 className="text-base lg:text-xl font-bold lg:ml-4 lg:mt-0 mt-2">
                  Route Optimization
                </h3>
              </div>

              <p>Save time and fuel with the most efficient routes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
