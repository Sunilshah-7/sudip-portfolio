import React from 'react';

const socialLinks = [
  { name: "Instagram", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Linkedin", url: "#" }
];

const SocialLinks: React.FC = () => (
  <nav className="flex overflow-hidden flex-col justify-center px-14 py-11 mt-6 w-full text-base font-light uppercase bg-red-100 rounded-3xl max-md:px-5 max-md:max-w-full">
    <ul className="flex gap-10 justify-between items-center">
      {socialLinks.map((link) => (
        <li key={link.name} className="self-stretch my-auto">
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default SocialLinks;