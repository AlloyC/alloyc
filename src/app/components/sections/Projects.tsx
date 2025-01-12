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
          projectDescription="JustBuy is an e-commerce platform designed to connect local vendors with nearby customers, facilitating the discovery and access to locally produced goods and services."
          projectIMG={Fupps}
          projectTitle="JustBuy"
          url="/just-buy"
        />
        <ProjectCard
          projectDescription="Fupps is a platform for accessing academic materials and sharing knowledge through blogs, organized by department and level for easy access."
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
