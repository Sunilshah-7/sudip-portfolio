import React from "react";

const AboutSection: React.FC = () => (
  <section
    id="about"
    className="flex overflow-hidden flex-col grow items-start py-10 pr-20 pl-6 w-full text-xl font-light leading-6 text-black bg-red-100 rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0801eab0b521238955ab2cb7dbd413b5d8b77f0660b9938487dcd5aa2d909336?placeholderIfAbsent=true&apiKey=1be3d317cbba4674962afd174a0d3cec"
      alt=""
      className="object-contain aspect-square w-[38px]"
    />
    <p className="mt-20 max-md:mt-10">
      Julia Huang is an innovative AI artist, renowned for blending cutting-edge
      technology with creative expression. Based in LA, she crafts unique
      digital art experiences accessible globally.
    </p>
  </section>
);

export default AboutSection;
