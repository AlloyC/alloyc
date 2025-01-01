import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronRight from "../../../../public/assets/icons/chevron-right.svg";
import ChevronRightLight from "../../../../public/assets/icons/chevron-right-light.svg";
import { useTheme } from "@/app/Context/themeContext";

function ProjectCard({
  projectIMG,
  projectTitle,
  projectDescription,
  url,
}: {
  projectIMG: string;
  projectTitle: string;
  projectDescription: string;
  url: string;
}) {
  const mode = useTheme();
  return (
    <div className="rounded-md drop-shadow-xl p-4 flex flex-col bg-dark-blue bg-opacity-20 dark:bg-light-blue-DM dark:bg-opacity-15 max-w-80">
      <Image src={projectIMG} className="w-full" alt={projectTitle} />
      <div className="py-2">
        <h3 className="font-medium text-lg">{projectTitle}</h3>
        <p className=" mb-4">{projectDescription}</p>
        <Link className="animated-loading inline-flex items-center gap-2" href={url}>
          <span className="pb-0.5 border-b italic">Learn More</span>{" "}
          <div className="inline-flex gap-2 items-center py-1">
            <Image
              src={mode === "light" ? ChevronRight: ChevronRightLight}
              className="chevron chevron-1"
              alt="chevron right"
            />
            <Image
              src={mode === "light" ? ChevronRight: ChevronRightLight}
              className="chevron scale-110 chevron-2"
              alt="chevron right"
            />
            <Image
              src={mode === "light" ? ChevronRight: ChevronRightLight}
              className="chevron scale-125 chevron-3"
              alt="chevron right"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
