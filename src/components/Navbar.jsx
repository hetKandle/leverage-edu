import { logo, phone } from "@/assets/nav";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md">
      <div className="w-[90%] sm:w-4/5 mx-auto h-16 sm:h-[72px] flex items-center justify-between">
        <Image src={logo} alt="logo" className="w-[20%] sm:w-[unset]" />
        <div className="flex items-center gap-4">
          <a
            href="tel: +91-8069361480"
            rel="noreferrer"
            className="hidden sm:block"
          >
            <button className="bg-white border border-[#002147] text-[#002147] rounded-lg px-6 py-2 text-base font-normal">
              Call us 08069361480
            </button>
          </a>
          <a
            href="tel: +91-8069361480"
            rel="noreferrer"
            className="md:hidden flex gap-2 items-center bg-white border border-[#002147] text-[#002147] rounded-lg px-3 py-1 text-base font-normal"
          >
            <div>Call us </div>
            <Image src={phone} alt="phone" className="w-[20%] sm:w-[unset]" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
