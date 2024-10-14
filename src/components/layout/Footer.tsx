import logo from "@/../public/logo/image.png"; // Ensure the logo image is in the public folder
import Image from "next/image";
import Link from "next/link";
import p1 from "@/../public/footer/p1.png";
import p2 from "@/../public/footer/p2.png";
import i1 from "@/../public/footer/icons/f.svg";
import i2 from "@/../public/footer/icons/insta.svg";
import i3 from "@/../public/footer/icons/X.svg";
import i4 from "@/../public/footer/icons/linkdien.svg";

const Footer = () => {
  return (
    <footer className="bg-graish text-white py-8 lg:pt-40 lg:px-20 px-8">
      <div className="container mx-auto py-8 lg:px- flex flex-col md:flex-row justify-between lg:items-center text-center">
        <div className="flex flex-col md:flex-row ">
          <Image src={logo} alt="OzOve Logo" width={200} height={200} />
        </div>
        <div>
          <div className="mt-5 md:mt-0 flex flex-col lg:items-start items-start">
            <h5 className="font-bold mb-2">Get in touch</h5>
            <p>Information: info@ozove.com.au</p>
            <p>Media: Media@ozove.com.au</p>
            <div className="flex space-x-2 mt-2">
              <Link href="https://www.facebook.com/ozove.australia?mibextid=LQQJ4d">
                <Image
                  src={i1}
                  alt=""
                  width={40}
                  height={40}
                  className="gray-y-4"
                />
              </Link>
              <Link href="https://www.instagram.com/oz_ove?igsh=MTRyY2d2b2dtNG5sNg==">
                <Image
                  src={i2}
                  alt="App Store"
                  width={40}
                  height={40}
                  className="gray-y-4"
                />{" "}
              </Link>
              <Link href="https://x.com/ozove_australia?s=21&t=DacckBwbP2oi9w-4Uu-LHQ">
                <Image
                  src={i3}
                  alt="App Store"
                  width={40}
                  height={40}
                  className="gray-y-4"
                />{" "}
              </Link>
              <Link href="https://www.linkedin.com/company/oz-ove/">
                <Image
                  src={i4}
                  alt="App Store"
                  width={40}
                  height={40}
                  className="gray-y-4"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row lg:justify-between gap-20  lg:items-center">
        <div className="lg:flex flex-wrap lg:gap-16 xl:gap-20 2xl:gap-28  lg:justify-between justify-start mt-5 md:mt-0">
          <div className="lg:mr-10 lg:py-0 py-2">
            <Link href="/">
              <h5 className="font-bold mb-2 text-customYellow">Home</h5>
            </Link>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2 text-customYellow">Ride</h5>
            <ul>
              <li>
                <Link href="/ride/individual">
                  <span className="cursor-pointer ">Individual</span>
                </Link>
              </li>
              <li>
                <Link href="/ride/business">
                  <span className="cursor-pointer">Business</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2 text-customYellow">Drive With Us</h5>
            <ul>
              <li>
                <Link href="/driver/captain">
                  <span className="cursor-pointer">Apply to Drive</span>
                </Link>
              </li>
              <li>
                <Link href="/driver/fleet-owner">
                  <span className="cursor-pointer">Fleet Owner</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2 text-customYellow">Company</h5>
            <ul>
              <li>
                <Link href="/contact" passHref>
                  <span className="cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2 text-customYellow">Legal</h5>
            <ul>
              <li>
                <Link href="/contact" passHref>
                  <span className="cursor-pointer">Privacy policy</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="cursor-pointer">Cookie policy</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="cursor-pointer">Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:items-center  lg:py-0 py-2 ">
            <h5 className="font-bold text-customYellow">Ride With Us</h5>
            <p className="pb-2">Download the app</p>
            <div>
              <Link href="#" passHref>
                <Image
                  src={p1}
                  alt="App Store"
                  width={120}
                  height={40}
                  className="gray-y-4"
                />
              </Link>
              <Link href="#" passHref>
                <Image
                  src={p2}
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="mt-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-10">
        <p>OZ Ove © 2023 | Journeying Forward, Together.</p>
      </div>
    </footer>
  );
};

export default Footer;
