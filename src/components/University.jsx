"use client";
import {
  canadaFlag,
  germanyFlag,
  sampleUni,
  ukFlag,
  usaFlag,
} from "@/assets/university";
import Image from "next/image";
import React, { useState } from "react";

function University() {
  const [country, setCountry] = useState("uk");

  return (
    <section className="py-[48px] sm-769:py-[60px] overflow-hidden bg-[#f5fafe]">
      <div className="sm-769:max-w-[82%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full px-[15px] mx-auto mb-6 mt-2">
        <div className="text-[#002147] text-[24px] sm-769:text-[40px] font-semibold leading-[150%] text-left">
          Top Universities to{" "}
          <span className="text-[#0487f3]  text-[24px] sm-769:text-[40px] font-semibold leading-[150%]">
            Study Abroad
          </span>
        </div>
        <div
          style={{ scrollbarWidth: "none" }}
          className="overflow-auto whitespace-nowrap pl-[15px] mb-[24px] flex"
        >
          <button
            className={`flex items-center gap-1 sm-769:gap-2 sm-769:px-[16px] p-[12px] text-[16px] font-normal leading-[24px] ${
              country == "uk"
                ? "text-[#0487f3] border-b-2 border-[#0487f3]"
                : "text-[#8594a7] "
            }`}
            onClick={() => setCountry("uk")}
          >
            <Image
              src={ukFlag}
              alt="flag"
              className="w-[16px] sm-769:w-6 rounded-full"
            />
            United Kingdom
          </button>
          <button
            className={`flex items-center gap-1 sm-769:gap-2 px-[16px] py-[12px] text-[16px] font-normal leading-[24px] ${
              country == "usa"
                ? "text-[#0487f3] border-b-2 border-[#0487f3]"
                : "text-[#8594a7] "
            }`}
            onClick={() => setCountry("usa")}
          >
            <Image
              src={usaFlag}
              alt="flag"
              className="w-[16px] sm-769:w-6 rounded-full"
            />
            USA
          </button>
          <button
            className={`flex items-center gap-1 sm-769:gap-2 px-[16px] py-[12px] text-[16px] font-normal leading-[24px] ${
              country == "ger"
                ? "text-[#0487f3] border-b-2 border-[#0487f3]"
                : "text-[#8594a7] "
            }`}
            onClick={() => setCountry("ger")}
          >
            <Image
              src={germanyFlag}
              alt="flag"
              className="w-[16px] sm-769:w-6 rounded-full"
            />
            Germany
          </button>
          <button
            className={`flex items-center gap-1 sm-769:gap-2 px-[16px] py-[12px] text-[16px] font-normal leading-[24px] ${
              country == "can"
                ? "text-[#0487f3] border-b-2 border-[#0487f3]"
                : "text-[#8594a7] "
            }`}
            onClick={() => setCountry("can")}
          >
            <Image
              src={canadaFlag}
              alt="flag"
              className="w-[16px] sm-769:w-6 rounded-full"
            />
            Canada
          </button>
        </div>
      </div>
      <div className="sm-769:max-w-[82%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full px-[15px] mx-auto flex flex-wrap justify-between gap-0 sm-769:gap-6">
        <div className="w-[100%] flex flex-col sm-769:flex-row flex-wrap justify-center items-center sm-769:justify-between">
          <div className="bg-white border max-w-max border-[#e0e4e9] rounded-[12px] flex items-center gap-[10px] p-[12px] mb-4 sm-769:mb-0">
            <div className="border border-[#e0e4e9] rounded-[8px] w-[64px] h-[64px] overflow-hidden flex justify-center items-center p-[5px]">
              <Image src={sampleUni} alt="sampleUni" />
            </div>
            <div>
              <p className="font-medium text-[14px] sm-769:text-[16px] leading-[22px] text-[#002147] mb-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                University of Birmingham
              </p>
              <div className="flex justify-between items-center mb-[4px] gap-[6px]">
                <p className="text-[12px] font-normal leading-[14px] text-[#5c7189] text-left mb-0 overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">
                  Birmingham , United Kingdom
                </p>
                <span className="border border-[#ffd600] rounded-[5px_0_5px_0] bg-[#fff7ab] text-[#002147] text-[8px] font-normal leading-[12px] text-center py-[2px] px-[6px]">
                  497+ Courses
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border max-w-max border-[#e0e4e9] rounded-[12px] flex items-center gap-[10px] p-[12px] mb-4 sm-769:mb-0">
            <div className="border border-[#e0e4e9] rounded-[8px] w-[64px] h-[64px] overflow-hidden flex justify-center items-center p-[5px]">
              <Image src={sampleUni} alt="sampleUni" />
            </div>
            <div>
              <p className="font-medium text-[14px] sm-769:text-[16px] leading-[22px] text-[#002147] mb-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                University of Birmingham
              </p>
              <div className="flex justify-between items-center mb-[4px] gap-[6px]">
                <p className="text-[12px] font-normal leading-[14px] text-[#5c7189] text-left mb-0 overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">
                  Birmingham , United Kingdom
                </p>
                <span className="border border-[#ffd600] rounded-[5px_0_5px_0] bg-[#fff7ab] text-[#002147] text-[8px] font-normal leading-[12px] text-center py-[2px] px-[6px]">
                  497+ Courses
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border max-w-max border-[#e0e4e9] rounded-[12px] flex items-center gap-[10px] p-[12px] mb-4 sm-769:mb-0">
            <div className="border border-[#e0e4e9] rounded-[8px] w-[64px] h-[64px] overflow-hidden flex justify-center items-center p-[5px]">
              <Image src={sampleUni} alt="sampleUni" />
            </div>
            <div>
              <p className="font-medium text-[14px] sm-769:text-[16px] leading-[22px] text-[#002147] mb-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                University of Birmingham
              </p>
              <div className="flex justify-between items-center mb-[4px] gap-[6px]">
                <p className="text-[12px] font-normal leading-[14px] text-[#5c7189] text-left mb-0 overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">
                  Birmingham , United Kingdom
                </p>
                <span className="border border-[#ffd600] rounded-[5px_0_5px_0] bg-[#fff7ab] text-[#002147] text-[8px] font-normal leading-[12px] text-center py-[2px] px-[6px]">
                  497+ Courses
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col sm-769:flex-row flex-wrap justify-center items-center sm-769:justify-between">
          <div className="bg-white border max-w-max border-[#e0e4e9] rounded-[12px] flex items-center gap-[10px] p-[12px] mb-4 sm-769:mb-0">
            <div className="border border-[#e0e4e9] rounded-[8px] w-[64px] h-[64px] overflow-hidden flex justify-center items-center p-[5px]">
              <Image src={sampleUni} alt="sampleUni" />
            </div>
            <div>
              <p className="font-medium text-[14px] sm-769:text-[16px] leading-[22px] text-[#002147] mb-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                University of Birmingham
              </p>
              <div className="flex justify-between items-center mb-[4px] gap-[6px]">
                <p className="text-[12px] font-normal leading-[14px] text-[#5c7189] text-left mb-0 overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">
                  Birmingham , United Kingdom
                </p>
                <span className="border border-[#ffd600] rounded-[5px_0_5px_0] bg-[#fff7ab] text-[#002147] text-[8px] font-normal leading-[12px] text-center py-[2px] px-[6px]">
                  497+ Courses
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border max-w-max border-[#e0e4e9] rounded-[12px] flex items-center gap-[10px] p-[12px] mb-4 sm-769:mb-0">
            <div className="border border-[#e0e4e9] rounded-[8px] w-[64px] h-[64px] overflow-hidden flex justify-center items-center p-[5px]">
              <Image src={sampleUni} alt="sampleUni" />
            </div>
            <div>
              <p className="font-medium text-[14px] sm-769:text-[16px] leading-[22px] text-[#002147] mb-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                University of Birmingham
              </p>
              <div className="flex justify-between items-center mb-[4px] gap-[6px]">
                <p className="text-[12px] font-normal leading-[14px] text-[#5c7189] text-left mb-0 overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">
                  Birmingham , United Kingdom
                </p>
                <span className="border border-[#ffd600] rounded-[5px_0_5px_0] bg-[#fff7ab] text-[#002147] text-[8px] font-normal leading-[12px] text-center py-[2px] px-[6px]">
                  497+ Courses
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border max-w-max border-[#e0e4e9] rounded-[12px] flex items-center gap-[10px] p-[12px] mb-4 sm-769:mb-0">
            <div className="border border-[#e0e4e9] rounded-[8px] w-[64px] h-[64px] overflow-hidden flex justify-center items-center p-[5px]">
              <Image src={sampleUni} alt="sampleUni" />
            </div>
            <div>
              <p className="font-medium text-[14px] sm-769:text-[16px] leading-[22px] text-[#002147] mb-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                University of Birmingham
              </p>
              <div className="flex justify-between items-center mb-[4px] gap-[6px]">
                <p className="text-[12px] font-normal leading-[14px] text-[#5c7189] text-left mb-0 overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">
                  Birmingham , United Kingdom
                </p>
                <span className="border border-[#ffd600] rounded-[5px_0_5px_0] bg-[#fff7ab] text-[#002147] text-[8px] font-normal leading-[12px] text-center py-[2px] px-[6px]">
                  497+ Courses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default University;
