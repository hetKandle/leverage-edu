import {
  arrow,
  sampleProfile,
  sampleUni,
  sampleUniLogo,
} from "@/assets/testimonials";
import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <section className="py-[48px] sm-769:py-[60px]">
      <div className="sm-769:max-w-[82%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full px-[15px] mx-auto">
        <div className="text-[#002147] sm:text-[24px]  sm-769:text-[40px] font-semibold leading-[150%] text-left">
          45,000+{" "}
          <span className="text-[#0487f3] sm:text-[24px] sm-769:text-[40px] font-semibold leading-[150%]">
            Success Stories
          </span>
        </div>
        <p className="text-[#5c7189] font-rubik text-[16px] font-normal leading-[24px] mb-[10px]">
          From Dreamers to Achievers
        </p>
        {/* Desktop */}
        <div className="flex-col hidden sm-821:flex">
          <div className="flex gap-7 justify-between">
            <div className="min-h-[250px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
              <div className="flex">
                <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                  <Image src={sampleProfile} all="profile" />
                </div>
                <div>
                  <div className="text-[14px] leading-[20px] capitalize">
                    Kshitij
                  </div>
                  <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                    <div>Delhi</div>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                    <div>United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
                My Leverage Edu coach made studying abroad a breeze. From
                university shortlisting to visa application, they guided me
                every step of the way.
              </div>
              <div className="flex justify-between mt-[16px]">
                <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                  Data Science
                </div>
                <div className="flex justify-end ">
                  <Image
                    src={sampleUniLogo}
                    alt="uni"
                    className="h-[28px] max-w-max"
                  />
                </div>
              </div>
            </div>
            <div className="min-h-[250px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
              <div className="flex">
                <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                  <Image src={sampleProfile} all="profile" />
                </div>
                <div>
                  <div className="text-[14px] leading-[20px] capitalize">
                    Kshitij
                  </div>
                  <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                    <div>Delhi</div>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                    <div>United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
                My Leverage Edu coach made studying abroad a breeze. From
                university shortlisting to visa application, they guided me
                every step of the way.
              </div>
              <div className="flex justify-between mt-[16px]">
                <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                  Data Science
                </div>
                <div className="flex justify-end ">
                  <Image
                    src={sampleUniLogo}
                    alt="uni"
                    className="h-[28px] max-w-max"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="min-h-[250px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
              <div className="flex">
                <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                  <Image src={sampleProfile} all="profile" />
                </div>
                <div>
                  <div className="text-[14px] leading-[20px] capitalize">
                    Kshitij
                  </div>
                  <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                    <div>Delhi</div>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                    <div>United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
                My Leverage Edu coach made studying abroad a breeze. From
                university shortlisting to visa application, they guided me
                every step of the way.
              </div>
              <div className="flex justify-between mt-[16px]">
                <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                  Data Science
                </div>
                <div className="flex justify-end ">
                  <Image
                    src={sampleUniLogo}
                    alt="uni"
                    className="h-[28px] max-w-max"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-7 justify-between">
            <div className="min-h-[250px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
              <div className="flex">
                <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                  <Image src={sampleProfile} all="profile" />
                </div>
                <div>
                  <div className="text-[14px] leading-[20px] capitalize">
                    Kshitij
                  </div>
                  <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                    <div>Delhi</div>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                    <div>United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
                My Leverage Edu coach made studying abroad a breeze. From
                university shortlisting to visa application, they guided me
                every step of the way.
              </div>
              <div className="flex justify-between mt-[16px]">
                <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                  Data Science
                </div>
                <div className="flex justify-end ">
                  <Image
                    src={sampleUniLogo}
                    alt="uni"
                    className="h-[28px] max-w-max"
                  />
                </div>
              </div>
            </div>
            <div className="min-h-[250px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
              <div className="flex">
                <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                  <Image src={sampleProfile} all="profile" />
                </div>
                <div>
                  <div className="text-[14px] leading-[20px] capitalize">
                    Kshitij
                  </div>
                  <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                    <div>Delhi</div>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                    <div>United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
                My Leverage Edu coach made studying abroad a breeze. From
                university shortlisting to visa application, they guided me
                every step of the way.
              </div>
              <div className="flex justify-between mt-[16px]">
                <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                  Data Science
                </div>
                <div className="flex justify-end ">
                  <Image
                    src={sampleUniLogo}
                    alt="uni"
                    className="h-[28px] max-w-max"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="min-h-[250px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
              <div className="flex">
                <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                  <Image src={sampleProfile} all="profile" />
                </div>
                <div>
                  <div className="text-[14px] leading-[20px] capitalize">
                    Kshitij
                  </div>
                  <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                    <div>Delhi</div>
                    <div>
                      <Image src={arrow} alt="arrow" />
                    </div>
                    <div>United Kingdom</div>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
                My Leverage Edu coach made studying abroad a breeze. From
                university shortlisting to visa application, they guided me
                every step of the way.
              </div>
              <div className="flex justify-between mt-[16px]">
                <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                  Data Science
                </div>
                <div className="flex justify-end ">
                  <Image
                    src={sampleUniLogo}
                    alt="uni"
                    className="h-[28px] max-w-max"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex sm-821:hidden overflow-scroll gap-4 pb-4">
          <div className="min-h-[250px] min-w-[320px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
            <div className="flex">
              <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                <Image src={sampleProfile} all="profile" />
              </div>
              <div>
                <div className="text-[14px] leading-[20px] capitalize">
                  Kshitij
                </div>
                <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                  <div>Delhi</div>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
              My Leverage Edu coach made studying abroad a breeze. From
              university shortlisting to visa application, they guided me every
              step of the way.
            </div>
            <div className="flex justify-between mt-[16px]">
              <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                Data Science
              </div>
              <div className="flex justify-end ">
                <Image
                  src={sampleUniLogo}
                  alt="uni"
                  className="h-[28px] max-w-max"
                />
              </div>
            </div>
          </div>
          <div className="min-h-[250px] min-w-[320px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
            <div className="flex">
              <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                <Image src={sampleProfile} all="profile" />
              </div>
              <div>
                <div className="text-[14px] leading-[20px] capitalize">
                  Kshitij
                </div>
                <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                  <div>Delhi</div>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
              My Leverage Edu coach made studying abroad a breeze. From
              university shortlisting to visa application, they guided me every
              step of the way.
            </div>
            <div className="flex justify-between mt-[16px]">
              <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                Data Science
              </div>
              <div className="flex justify-end ">
                <Image
                  src={sampleUniLogo}
                  alt="uni"
                  className="h-[28px] max-w-max"
                />
              </div>
            </div>
          </div>          <div className="min-h-[250px] min-w-[320px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
            <div className="flex">
              <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                <Image src={sampleProfile} all="profile" />
              </div>
              <div>
                <div className="text-[14px] leading-[20px] capitalize">
                  Kshitij
                </div>
                <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                  <div>Delhi</div>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
              My Leverage Edu coach made studying abroad a breeze. From
              university shortlisting to visa application, they guided me every
              step of the way.
            </div>
            <div className="flex justify-between mt-[16px]">
              <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                Data Science
              </div>
              <div className="flex justify-end ">
                <Image
                  src={sampleUniLogo}
                  alt="uni"
                  className="h-[28px] max-w-max"
                />
              </div>
            </div>
          </div>          <div className="min-h-[250px] min-w-[320px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
            <div className="flex">
              <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                <Image src={sampleProfile} all="profile" />
              </div>
              <div>
                <div className="text-[14px] leading-[20px] capitalize">
                  Kshitij
                </div>
                <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                  <div>Delhi</div>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
              My Leverage Edu coach made studying abroad a breeze. From
              university shortlisting to visa application, they guided me every
              step of the way.
            </div>
            <div className="flex justify-between mt-[16px]">
              <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                Data Science
              </div>
              <div className="flex justify-end ">
                <Image
                  src={sampleUniLogo}
                  alt="uni"
                  className="h-[28px] max-w-max"
                />
              </div>
            </div>
          </div>          <div className="min-h-[250px] min-w-[320px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
            <div className="flex">
              <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                <Image src={sampleProfile} all="profile" />
              </div>
              <div>
                <div className="text-[14px] leading-[20px] capitalize">
                  Kshitij
                </div>
                <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                  <div>Delhi</div>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
              My Leverage Edu coach made studying abroad a breeze. From
              university shortlisting to visa application, they guided me every
              step of the way.
            </div>
            <div className="flex justify-between mt-[16px]">
              <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                Data Science
              </div>
              <div className="flex justify-end ">
                <Image
                  src={sampleUniLogo}
                  alt="uni"
                  className="h-[28px] max-w-max"
                />
              </div>
            </div>
          </div>          <div className="min-h-[250px] min-w-[320px] break-words p-[24px] rounded-[12px] border-2 border-[#e0e4e9] bg-[#f5f6f8] flex flex-col mt-[24px]">
            <div className="flex">
              <div className="relative h-[44px] w-[44px] mr-[16px] border border-gray-500 rounded-full overflow-hidden">
                <Image src={sampleProfile} all="profile" />
              </div>
              <div>
                <div className="text-[14px] leading-[20px] capitalize">
                  Kshitij
                </div>
                <div className="flex gap-1 items-center text-[14px] leading-[20px] mt-[4px] text-[#5c7189]">
                  <div>Delhi</div>
                  <div>
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
            <div className="mt-[16px] text-[#002147] text-[14px] font-normal leading-[160%]">
              My Leverage Edu coach made studying abroad a breeze. From
              university shortlisting to visa application, they guided me every
              step of the way.
            </div>
            <div className="flex justify-between mt-[16px]">
              <div className="text-[12px] w-max text-nowrap text-center font-normal leading-[20px] text-[#0ea5e9] py-[4px] px-[12px] rounded-full bg-[rgba(14,165,233,0.1)]">
                Data Science
              </div>
              <div className="flex justify-end ">
                <Image
                  src={sampleUniLogo}
                  alt="uni"
                  className="h-[28px] max-w-max"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
