import Image from "next/image";
import logo1 from "@/../public/ride/individual/icons/section4/p1.png";
import logo2 from "@/../public/ride/individual/icons/section4/p2.png";
import logo3 from "@/../public/ride/individual/icons/section4/p3.png";
import logo4 from "@/../public/ride/individual/icons/section4/p4.png";
import logo5 from "@/../public/ride/individual/icons/section4/p5.png";
import logo6 from "@/../public/ride/individual/icons/section4/p6.png";

const Section4 = () => {
  return (
    <div className="bg-graish text-white py-12 lg:px-20 px-8">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-4">
        Add-Ons
      </h2>
      <p className="text-center mb-12">
        Choose Oz Ove For A Transportation Experience That Goes Above And
        Beyond. Expect The Extraordinary.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-cardgray cursor-pointer p-6 text-center shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo1}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Add More Vehicles</h3>
          <p className="text-sm">
            More the Merrier - Need more space? Book multiple rides within a
            single booking to accommodate everyone in your group comfortably.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo2}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">UPC Split Fare</h3>
          <p className="text-sm">
            Share the Fare - No need to handle messy UPI/Cash fare splits
            anymore! With our UPC Split fare, you can share the cost evenly
            among your group instantly.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo3}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Disability Support Driver</h3>
          <p className="text-sm">
            Supportive Journey - Travel without barriers! Our Disability Support
            Driver option includes additional assistance for passengers with
            disabilities, ensuring a smooth and comfortable ride.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo4}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Party Van</h3>
          <p className="text-sm">
            On-The-Go Party - Take the celebration on the road with our Party
            Van add-on. Enjoy high-quality sound and lighting while you travel
            to your destination.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo5}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Luggage Trailer</h3>
          <p className="text-sm">
            Travel hassle-free with our Luggage Trailer add-on. Ample space for
            all your essentials, so you can enjoy the journey worry-free. Your
            items will be safely stowed away.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo6}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Book By Hour</h3>
          <p className="text-sm">
            You can book a vehicle for a set period of time, so you don’t have
            to worry about waiting for a ride while enjoying the flexibility of
            transportation of having tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
