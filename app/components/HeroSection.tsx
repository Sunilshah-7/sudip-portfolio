import React from "react";

const HeroSection: React.FC = () => (
  <section className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow px-6 pt-9 pb-20 w-full text-6xl font-bold text-black bg-red-100 rounded-3xl leading-[56px] max-md:px-5 max-md:mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfbe7904aa1ff1a04b145c7919596fea0b061a597da74313252360ecc2f433c0?placeholderIfAbsent=true&apiKey=1be3d317cbba4674962afd174a0d3cec"
          alt=""
          className="object-contain self-end max-w-full aspect-square w-[119px]"
        />
        <h2 className="mt-20 mr-9 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Artist Redefining{" "}
          <span className="italic font-light">Architecture</span> with AI-Driven
          Design
        </h2>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/821a27cb6c5c985e4d5de46ce5e09ea0c18421913808fcf12cb482538f8ee58d?placeholderIfAbsent=true&apiKey=1be3d317cbba4674962afd174a0d3cec"
        alt="AI-driven architectural design"
        className="object-contain grow w-full aspect-[0.69] max-md:mt-7"
      />
    </div>
  </section>
);

export default HeroSection;
