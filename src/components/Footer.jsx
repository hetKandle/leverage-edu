import { logo } from "@/assets/nav";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="w-[80%] py-[64px] pb-[40px] mx-auto">
      <div className="pb-[24px] sm-769:pb-[32px] border-b border-[#c2cad3] flex flex-col sm-769:flex-row justify-center sm-769:justify-between">
        <div className="flex flex-col gap-[12px] sm-769:gap-[32px] items-center sm-769:items-start pb-6 sm-769:pb-0">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="text-[#5c7189] w-[260px] text-center sm-769:text-start">
            A plan for every dream
          </div>
        </div>
        <div className="text-[#5c7189] flex sm-769:flex-col gap-5 cursor-pointer no-underline justify-center sm-769:justify-end sm-769:text-right  pt-[24px] sm-769:pt-0 border-t border-[#c2cad3] sm-769:border-none ">
          <a target="_blank" href="/privacy-policy">
            Privacy Policy
          </a>
          <a target="_blank" href="/terms-and-conditions">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
      <div className="mt-6 sm-769:mt-8 text-[16px] text-[#5c7189] flex gap-3 no-underline justify-center text-center sm-769:text-start  sm-769:justify-start">
        Copyright Ⓒ 2024, Leverage Edu.
        <br /> All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
