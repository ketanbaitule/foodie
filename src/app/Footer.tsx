import { oswald } from "@/style/font";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer(){
  return(
    <div className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 md:py-16 p-8 gap-y-8">
        <div className=" place-self-center ">
          <h1 className={`text-primary text-7xl font-medium ${oswald.className}`}>Foodie</h1>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="font-semibold text-xl">Quick Links</h2>

          <ul className="flex flex-col max-md:items-center gap-y-4">
            <li>
              <Link href={"/terms"} className="flex items-center gap-x-1" > <MdKeyboardArrowRight className="max-md:hidden" /> Terms and Condition</Link>
            </li>
            <li>
              <Link href={"/privacy"} className="flex items-center gap-x-1" > <MdKeyboardArrowRight className="max-md:hidden" /> Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/refund"} className="flex items-center gap-x-1" > <MdKeyboardArrowRight className="max-md:hidden" /> Return & Refund Policy</Link>
            </li>
            <li>
              <Link href={"/contact"} className="flex items-center gap-x-1" > <MdKeyboardArrowRight className="max-md:hidden" /> Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="font-semibold text-xl">Follow Us</h2>
          <div className="grid grid-cols-3 gap-6 text-white">
            <Link href="https://www.facebook.com">
              <FaFacebook size={32} fill="#1877f2" />
            </Link>
            <Link href="https://www.twitter.com">
              <FaTwitter size={32} fill="#1da1f2" />
            </Link>
            <Link href="https://www.instagram.com">
              <FaInstagram size={32} fill="#c13584" />
            </Link>
            <Link href="https://www.linkedin.com">
              <FaLinkedin size={32} fill="#0a66c2" />
            </Link>
            <Link href="https://web.whatsapp.com">
              <FaWhatsapp size={32} fill="#25d366" />
            </Link>
            <Link href="https://t.me">
              <FaTelegram size={32} fill="#0088cc" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-secondary/70 px-8 py-4">
      © 2024 Foodie Pvt Ltd
      </div>
    </div>
  )
}

export default Footer;