import { gradCap, handshake, scholarship, trophy } from "@/assets/achievement";
import Image from "next/image";
import React from "react";

function Achievement() {
  return (
    <section className="py-[48px] sm-769:py-[80px] bg-[#f5fafe]">
      <div className="w-full px-4 mx-auto sm-769:max-w-[82%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="text-[#002147] text-[24px] sm-769:text-[40px] font-semibold leading-[150%] text-left">
          Why Choose{" "}
          <span className="text-[#0487f3]  text-[24px] sm-769:text-[40px]  font-semibold leading-[150%]">
            Leverage Edu?
          </span>
        </div>
        <div className="mt-[45px] flex sm-769:gap-[15px] justify-between flex-wrap">
          <div className="flex flex-col basis-1/2 mb-[20px] sm-769:mb-0 sm-769:basis-auto items-center px-[15px]">
            <Image
              className="max-w-max max-h-[48px] mb-4"
              src={handshake}
              alt="handsake"
            />
            <h3>
              <p className="text-[#002147] text-center  text-[16px] font-normal leading-[150%] mb-0">
                <span className="text-[#002147] text-center text-[16px] font-medium leading-[150%] mb-0">
                  850+
                </span>{" "}
                University Partners
              </p>
            </h3>
          </div>
          <div className="flex flex-col basis-1/2 mb-[20px] sm-769:mb-0 sm-769:basis-auto items-center px-[15px]">
            <Image
              className="max-w-max max-h-[48px] mb-4"
              src={trophy}
              alt="trophy"
            />
            <h3>
              <p className="text-[#002147]  text-center  text-[16px] font-normal leading-[150%] mb-0">
                <span className="text-[#002147] text-center text-[16px] font-medium leading-[150%] mb-0">
                  5,000+
                </span>{" "}
                Success Stories
              </p>
            </h3>
          </div>
          <div className="flex flex-col basis-1/2 sm-769:basis-auto items-center px-[15px]">
            <Image
              className="max-w-max max-h-[48px] mb-4"
              src={scholarship}
              alt="scholarship"
            />
            <h3>
              <p className="text-[#002147]  text-center  text-[16px] font-normal leading-[150%] mb-0">
                Scholarship up to{" "}
                <span className="text-[#002147] text-center text-[16px] font-medium leading-[150%] mb-0">
                  50%*
                </span>
              </p>
            </h3>
          </div>
          <div className="flex flex-col basis-1/2 sm-769:basis-auto items-center px-[15px]">
            <Image
              className="max-w-max max-h-[48px] mb-4"
              src={gradCap}
              alt="gradCap"
            />
            <h3>
              <p className="text-[#002147] text-center  text-[16px] font-normal leading-[150%] mb-0">
                Courses starting at{" "}
                <span className="text-[#002147] text-center text-[16px] font-medium leading-[150%] mb-0">
                  ₹8 Lakhs*
                </span>
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
