import {
  acco,
  assistance,
  DreamCourse,
  financial,
  testPrep,
  visa,
} from "@/assets/advantage";
import Image from "next/image";
import React from "react";

function Advantage() {
  return (
    <section className="py-[48px] sm-769:py-[60px]">
      <div className="max-w-full sm-769:max-w-[82%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full px-[15px] mx-auto">
        <div className="text-[#002147] text-[24px]  sm-769:text-[40px] font-semibold leading-[150%] text-left">
          Leverage Edu{" "}
          <span className="text-[#0487f3] text-[24px] sm-769:text-[40px] font-semibold leading-[150%]">
            Advantage
          </span>
        </div>
        <div className="mt-[40px]  flex-wrap hidden sm-769:flex">
          <div className="flex flex-row basis-1/3 items-center p-[15px] gap-6 mb-[40px]">
            <Image
              className="max-h-[48px] max-w-max"
              src={DreamCourse}
              alt="dream-course"
            />
            <div>
              Finding the Program <br /> That’s Right for You
            </div>
          </div>
          <div className="flex flex-row basis-1/3 items-center p-[15px] gap-6 mb-[40px]">
            <Image
              className="max-h-[48px] max-w-max"
              src={assistance}
              alt="dream-course"
            />
            <div>
              Curated Expert-led <br /> Application Assistance
            </div>
          </div>
          <div className="flex flex-row basis-1/3 items-center p-[15px] gap-6 mb-[40px]">
            <Image
              className="max-h-[48px] max-w-max"
              src={testPrep}
              alt="dream-course"
            />
            <div>
              English Assessment <br /> Test Prep On-the-go
            </div>
          </div>
          <div className="flex flex-row basis-1/3 items-center p-[15px] gap-6">
            <Image
              className="max-h-[48px] max-w-max"
              src={visa}
              alt="dream-course"
            />
            <div>
              Hacking thy Interviews
              <br /> & the All-important VISA
            </div>
          </div>
          <div className="flex flex-row basis-1/3 items-center p-[15px] gap-6">
            <Image
              className="max-h-[48px] max-w-max"
              src={financial}
              alt="dream-course"
            />
            <div>
              Solving for <br /> Money Money Money!
            </div>
          </div>
          <div className="flex flex-row basis-1/3 items-center p-[15px] gap-6">
            <Image
              className="max-h-[48px] max-w-max"
              src={acco}
              alt="dream-course"
            />
            <div>
              Making Sure You Stay Right, <br /> And Stay Well
            </div>
          </div>
        </div>
        <div className="mt-[24px] flex-wrap flex sm-769:hidden">
          <div className="flex flex-col  basis-1/2  items-center p-[15px] gap-3 mb-[24px]">
            <Image
              className="max-h-[48px] max-w-max"
              src={DreamCourse}
              alt="dream-course"
            />
            <div className="text-center">Finding the Program That’s Right for You</div>
          </div>
          <div className="flex flex-col  basis-1/2 items-center p-[15px] gap-3 mb-[24px]">
            <Image
              className="max-h-[48px] max-w-max"
              src={assistance}
              alt="dream-course"
            />
            <div className="text-center">Curated Expert-led Application Assistance</div>
          </div>
          <div className="flex flex-col  basis-1/2  items-center p-[15px] gap-3 mb-[24px]">
            <Image
              className="max-h-[48px] max-w-max"
              src={testPrep}
              alt="dream-course"
            />
            <div className="text-center">English Assessment Test Prep On-the-go</div>
          </div>
          <div className="flex flex-col basis-1/2  items-center p-[15px] gap-3">
            <Image
              className="max-h-[48px] max-w-max"
              src={visa}
              alt="dream-course"
            />
            <div className="text-center">Hacking thy Interviews & the All-important VISA</div>
          </div>
          <div className="flex flex-col  basis-1/2  items-center p-[15px] gap-3">
            <Image
              className="max-h-[48px] max-w-max"
              src={financial}
              alt="dream-course"
            />
            <div className="text-center">Solving for Money Money Money!</div>
          </div>
          <div className="flex flex-col  basis-1/2  items-center p-[15px] gap-3">
            <Image
              className="max-h-[48px] max-w-max"
              src={acco}
              alt="dream-course"
            />
            <div className="text-center">Making Sure You Stay Right, And Stay Well</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
