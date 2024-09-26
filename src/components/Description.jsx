import React from "react";

function Description() {
  return (
    <section className="py-[48px] sm-769:py-[80px] bg-[#f5fafe]">
      <div className="sm-769:max-w-[82%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] w-full px-[15px] mx-auto">
        <div className="text-[#002147] text-[24px]  sm-769:text-[40px] font-semibold leading-[150%] text-left mb-6">
          Study Abroad with{" "}
          <span className="text-[#0487f3]  text-[24px]  sm-769:text-[40px] font-semibold leading-[150%]">
            Leverage Edu
          </span>
        </div>
        <p className="text-[#5c7189] text-[16px] font-normal leading-[150%]">
          India has the second-highest number of students enrolled in overseas
          education. Our student diaspora has not only helped spread our diverse
          traditions, foods, songs, and lore throughout the world but also
          helped create a solid reputation for Indian-origin professionals and
          leaders. Some of the top companies today have Indian-origin people
          running them. This makes India one of the most globally connected
          countries in the world.
        </p>
        <p className="text-[#5c7189] text-[16px] font-normal leading-[150%]">
          As per some estimates, close to a million students went to study
          abroad in 2023. And this number is expected to rise to 1.5 - 2 million
          by 2025. Some estimate that Indian overseas aspirants will spend
          around $70 billion on education by 2024. Not only are universities
          making themselves more attractive to Indians but countries are also
          seeking students to join the workforce.
        </p>
      </div>
    </section>
  );
}

export default Description;
