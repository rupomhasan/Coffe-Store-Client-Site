import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="font-raleway bg-[url('/src/assets/more/13.jpg')] ">
      <div className="md:flex items-center justify-evenly max-w-screen-xl mx-auto pt-20 md:pt-36 pb-10 px-2">
        <div>
          <div className="space-y-5">
            <img className="w-20" src="/src/assets/more/logo1.png" alt="logo" />
            <h3 className="text-[#331a15] text-5xl font-rancho blur-[0.8px]">
              Espresso Emporium
            </h3>
            <p className="text-lg max-w-xl">
              Always ready to be your friend. Come & Contact with us to share
              your memorable meoments, to share with your best companion
            </p>

            <div className="text-2xl flex gap-5 ">
              <FaFacebook className="text-[#331a15]" />
              <FaTwitter className="text-[#331a15]" />
              <FaInstagram className="text-[#331a15]" />
              <FaLinkedin className="text-[#331a15]" />
            </div>
            <h3 className=" text-[#331a15] text-5xl font-rancho blur-[0.8px] ">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <div className="flex gap-3">
                <IoMdCall className="text-xl text-[#331a15]" />
                <p>01318044328</p>
              </div>
              <div className="flex gap-3">
                <IoMdMail className="text-xl text-[#331a15]" />
                <p>rupom.hasan@gmail.com</p>
              </div>
              <div className="flex gap-3">
                <FaLocationDot className="text-xl text-[#331a15]" />
                <p>72, wall street , king Road , Dhaka</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="space-y-10">
          <h3 className="text-[#331a15] text-5xl font-rancho blur-[0.8px]">
            Espresso Emporium
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-1"
            />
            <br />
            <input
              type="Email"
              placeholder="Email"
              className="w-full px-5 py-1"
            />
            <br />
            <textarea
              rows="4"
              cols="50"
              className="w-full px-5 py-1"
              placeholder="Massage"
            />
            <br />
            <input
              type="submit"
              value="Send Message"
              className="badge h-10 w-40 text-xl font-rancho border-2 border-[#331a15] text-[#331a15] font-bold"
            />
          </form>
        </div>
      </div>
      <div className="bg-[url('/src/assets/more/24.jpg')] bg-cover">
        <p className="text-center font-rancho text-xl py-2 text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
