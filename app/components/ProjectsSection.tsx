import React from 'react';

interface Project {
  name: string;
}

const projects: Project[] = [
  { name: "Musea" },
  { name: "Elara" },
  { name: "Verve" },
  { name: "Zephyr" }
];

const ProjectsSection: React.FC = () => (
  <section id="projects" className="flex overflow-hidden flex-col px-6 py-10 w-full text-2xl font-medium bg-red-100 rounded-3xl max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between">
      <h2>Musea</h2>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf1423798b95d7e316981440b12401abba63cb9f04ec734f0b4059d6294dafe5?placeholderIfAbsent=true&apiKey=1be3d317cbba4674962afd174a0d3cec" alt="" className="object-contain shrink-0 my-auto aspect-square w-[26px]" />
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4896621d55fa2bb8ccb3045fcf5e609971104bff4aca144e73ab2bd33cafef41?placeholderIfAbsent=true&apiKey=1be3d317cbba4674962afd174a0d3cec" alt="Project Musea" className="object-contain mt-5 w-full aspect-[1.48]" />
    {projects.slice(1).map((project, index) => (
      <React.Fragment key={project.name}>
        <hr className="shrink-0 mt-7 h-0.5 border-2 border-red-300 border-solid" />
        <h3 className="self-start mt-10 max-md:mt-10">{project.name}</h3>
      </React.Fragment>
    ))}
  </section>
);

export default ProjectsSection;