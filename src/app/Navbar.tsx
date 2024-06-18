"use client";
import { oswald } from "@/style/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(){
  const [isVisible, setIsVisible] = useState(false);
  const pathname =  usePathname();

  return (
    <div className="bg-secondary py-4 px-12 mb-4">
      <div className="flex flex-col md:flex-row container mx-auto justify-between gap-y-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-primary text-4xl font-medium ${oswald.className}`}>Foodie</h1>
          <button onClick={() => setIsVisible(!isVisible)} className="md:hidden text-white">
          <GiHamburgerMenu size={20} /></button>
        </div>
        <ul className={`flex text-md max-md:justify-around items-center gap-x-8 ${isVisible ? "": "max-md:hidden"}`}>
          <li className={`${ pathname == "/" ? "text-primary text-lg font-medium" : "text-white"}`}>
            <Link href={"/"}>Home</Link></li>
          <li className={`${ pathname == "/menu" ? "text-primary text-lg font-medium" : "text-white"}`}>
            <Link href={"/menu"}>Menu</Link></li>
          <li className={`${ pathname == "/about" ? "text-primary text-lg font-medium" : "text-white"}`}>
            <Link href={"/about"}>About Us</Link></li>
          <li className={`${ pathname == "/contact" ? "text-primary text-lg font-medium" : "text-white"}`}>
            <Link href={"/about"}>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;