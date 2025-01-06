import React from "react";
import SectionHeader from "../utils/SectionHeader";
import ProjectCard from "../utils/ProjectCard";
import Fupps from "../../../../public/assets/images/fupps.jpg";

function Projects() {
  return (
    <section id="projects" className="space-y-5 flex flex-col items-center">
      <SectionHeader text="Projects I Built" />
      <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
        <ProjectCard
          projectDescription="JustBuy is an e-commerce platform designed to bridge the gap between local vendors and nearby customers, making it easier to discover and access locally produced goods and services."
          projectIMG={Fupps}
          projectTitle="JustBuy"
          url="/just-buy"
        />
        <ProjectCard
          projectDescription="Lorem ipsum dolor sit amet  nisi, amet aliquam delectus accusantium eaque consectetur officia minus aperiam deserunt repudiandae pariatur fugiat."
          projectIMG={Fupps}
          projectTitle="Fupps"
          url="/fupps"
        />
        <ProjectCard
          projectDescription="Lorem ipsum dolor sit amet nisi, amet aliquam delectus accusantium eaque consectetur officia minus aperiam deserunt repudiandae pariatur fugiat."
          projectIMG={Fupps}
          projectTitle="Fupps"
          url="/fupps"
        />
      </div>
    </section>
  );
}

export default Projects;
