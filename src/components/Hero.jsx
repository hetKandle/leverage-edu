"use client";
import { right } from "@/assets/hero";
import Image from "next/image";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Hero() {
  return (
    <section className="flex flex-col items-center bg-[url('https://publicassets.leverageedu.com/abroadConsultantDelhiHeroMobile.png')] bg-cover bg-no-repeat pb-[80px] max-w-full sm-769:h-screen sm-769:py-20">
      <div className="relative h-full w-full flex justify-center sm-769:items-center">
        <img
          className="absolute object-cover w-full h-full hidden sm-769:block"
          src="https://publicassets.leverageedu.com/abroadConsultantDelhiHero.png"
        />
        <div className="flex flex-col sm-769:flex-row sm-769:absolute w-full sm-769:w-4/5 h-4/5 justify-between items-center">
          <div className="flex w-full sm-769:w-3/5 flex-col items-center gap-6 px-6  py-16  sm-769:p-0">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="w-full sm-769:w-11/12 text-white text-[32px] sm-769:text-[48px] font-semibold leading-10 sm-769:leading-[64px] text-center sm-769:text-left">
                Take the First Step to STUDY ABROAD
              </div>
              <div className="block font-normal text-[20px] leading-[30px] text-start text-white w-full sm-769:w-4/5">
                <div className="font-medium leading-[25px]">
                  <div className="mt-2 font-normal text-[18px] leading-[30px]">
                    <div className="flex gap-3 items-center">
                      <span>
                        <Image src={right} alt="right" />
                      </span>
                      {` Courses starting from ₹8 Lakhs`}
                    </div>
                    <div className="flex gap-3 items-center">
                      <span>
                        <Image src={right} alt="right" />
                      </span>
                      {` Scholarship worth ₹10,00,000`}
                    </div>
                    <div className="flex gap-3 items-center">
                      <span>
                        <Image src={right} alt="right" />
                      </span>
                      {` Offer letter in less than 48 hours`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative  sm-769:w-1/3 bg-white p-6 border border-[#e0e4e9] rounded-lg">
            <p className="text-[24px] sm-769:font-medium text-center">
              Start your Study Abroad Journey{" "}
            </p>
            <form className="flex flex-col gap-4 bg-white">
              <div className="flex flex-col gap-5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="absolute left-2.5 top-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out bg-white px-1.5 text-[#666] text-[10px]"
                  >
                    Name*
                  </label>
                  <input
                    className="block w-full h-[48px] p-3 rounded-lg border border-[#ccc] text-[16px] text-[#495057] bg-white transition-colors duration-150 ease-in-out placeholder-[#495057CC]"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Full Name*"
                  ></input>
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="absolute left-2.5 top-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out bg-white px-1.5 text-[#666] text-[10px]"
                  >
                    Enter Email Address*
                  </label>
                  <input
                    className="block w-full h-[48px] p-3 rounded-lg border border-[#ccc] text-[16px] text-[#495057] bg-white transition-colors duration-150 ease-in-out placeholder-[#495057CC]"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address*"
                  ></input>
                </div>
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="absolute left-12 top-0 transform -translate-y-1/2 z-[100] transition-all duration-300 ease-in-out bg-white px-1.5 text-[#666] text-[10px]"
                  >
                    Mobile number*
                  </label>
                  <PhoneInput
                    country={"us"}
                    inputStyle={{
                      fontSize: "16px",
                      height: "48px",
                      padding: "12px 16px 12px 48px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    // value={this.state.phone}
                    // onChange={(phone) => this.setState({ phone })}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="pincode"
                    className="absolute left-2.5 top-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out bg-white px-1.5 text-[#666] text-[10px]"
                  >
                    Pincode
                  </label>
                  <input
                    className="block w-full h-[48px] p-3 rounded-lg border border-[#ccc] text-[16px] text-[#495057] bg-white transition-colors duration-150 ease-in-out placeholder-[#495057CC]"
                    type="text"
                    name="pincode"
                    id="pincode"
                    placeholder="Pincode"
                  ></input>
                </div>
              </div>
              <div className="flex items-center gap-2 m-0 relative">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree"
                  required="true"
                  data-gtm-form-interact-field-id="0"
                />
                <label className="font-normal text-[12px] mb-0" for="agree">
                  I have read and agreed to{" "}
                  <a
                    href="/terms-and-conditions/#studyAbroadScholarship"
                    target="_blank"
                    className="text-[rgb(4,135,243)] no-underline"
                  >
                    terms
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="https://leverageedu.com/privacy-policy"
                    target="_blank"
                    className="text-[rgb(4,135,243)] no-underline"
                  >
                    privacy policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                name="Book your free consultation"
                id="book_your_free_consultation"
                className="bg-[#87c5f9] text-white border-0 rounded-lg h-[40px]"
                disabled=""
              >
                <span className="text-[#fff]">
                  {" "}
                  Book your free consultation{" "}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
