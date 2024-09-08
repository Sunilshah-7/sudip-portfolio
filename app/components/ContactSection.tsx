import React from "react";

const ContactSection: React.FC = () => (
  <section
    id="contact"
    className="flex overflow-hidden flex-col px-6 pt-8 pb-14 mx-auto w-full text-black bg-red-300 rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full"
  >
    <div className="flex gap-10 justify-between items-end text-base font-light">
      <p>
        Have some <br /> questions?
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec8263890bbbe4ce7fe0bd6a76f454cc9ba05266209e4c4dc8bb3c5c5f93a22?placeholderIfAbsent=true&apiKey=1be3d317cbba4674962afd174a0d3cec"
        alt=""
        className="object-contain shrink-0 aspect-square w-[38px]"
      />
    </div>
    <h2 className="self-start mt-48 text-6xl font-medium max-md:mt-10 max-md:text-4xl">
      Contact me
    </h2>
  </section>
);

export default ContactSection;
