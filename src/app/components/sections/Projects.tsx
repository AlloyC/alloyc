import React from "react";
import SectionHeader from "../utils/SectionHeader";
import ProjectCard from "../utils/ProjectCard";
import Fupps from "../../../../public/assets/images/fupps.svg";

function Projects() {
  return (
    <div className="space-y-5 flex flex-col items-center">
      <SectionHeader text="Projects I Built" />
      <div className="flex flex-col md:flex-row gap-5 lg:gap-8">
        <ProjectCard
          projectDescription="Fupps is an all-in-one student portal and blog platform that connects students with academic resources, school updates, and a vibrant community."
          projectIMG={Fupps}
          projectTitle="Fupps"
          url="/fupps"
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
    </div>
  );
}

export default Projects;
