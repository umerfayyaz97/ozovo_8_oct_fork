import Head from "next/head";
import Image from "next/image";
import i1 from "@/../public/ride/business/section6/p1.svg";
import i2 from "@/../public/ride/business/section6/p2.svg";

export default function Section6() {
  return (
    <div className=" bg-white  py-6 lg:py-0">
      <Head>
        <title></title>
        <meta name="Vehicle" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col py-10 lg:px-32 px-4">
        <p className="text-center text-black lg:text-4xl text-2xl font-extrabold mb-12">
          Any vehicle to match your <br /> Travel Needs
        </p>
        <div className="flex items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/ride/business/zify_bus_sec6.png"
              alt={""}
              width={400}
              height={400}
              className=" m-4"
            />
            <p className="text-2xl font-bold text-black">Bus</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-12">
            <Image
              src="/ride/business/zify_van_sec6.png"
              alt={""}
              width={400}
              height={400}
              className=" m-4"
            />
            <p className="text-2xl font-bold text-black">Van</p>
          </div>{" "}
        </div>
      </main>
    </div>
  );
}
