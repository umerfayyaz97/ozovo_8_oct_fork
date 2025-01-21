import Image, { StaticImageData } from "next/image";
import React from "react";
import i1 from "@/../public/ride/individual/section6/p1.png";
import i2 from "@/../public/ride/individual/section6/p2.png";
import i3 from "@/../public/ride/individual/section6/p3.png";
import i4 from "@/../public/ride/individual/section6/p4.png";

interface Event {
  title: string;
  time: string;
  location: string;
  image: StaticImageData;
}

const events: Event[] = [
  {
    title: "Marks Birthday Party",
    time: "Fri, 8:00 - 11:00 am",
    location: "The Ellington Jazz Club, 191/193 Beaufort St Perth WA",
    image: i1,
  },
  {
    title: "Robbie Williams",
    time: "Fri, 8:00 - 10:00 pm",
    location: "Nikola Estate, 148 Dale Rd Middle Swan WA",
    image: i2,
  },
  {
    title: "50 Cent",
    time: "Sat, 7:00 - 9:00 pm",
    location: "RAC Arena, 700 Wellington St Perth WA",
    image: i3,
  },
  {
    title: "FLETCHER",
    time: "Sat, 7:00 pm",
    location: "Metro City 146 Roe St Northbridge WA",
    image: i4,
  },
];

const Section6: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="m-10">
        <h2 className="text-3xl font-bold text-center mb-8">Nearby Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-36 object-cover"
                layout="responsive"
                width={400}
                height={200}
              />
              <div className="p-4">
                <div className="lg:h-24">
                  <h3 className="text-lg font-bold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600">{event.time}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
                <button className="mt-4 font-bold bg-customYellow text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
