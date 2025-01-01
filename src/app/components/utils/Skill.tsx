import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

function Skill({
  source,
  skillName,
}: {
  source: string | StaticImport;
  skillName: string;
}) {
  return (
    <div className="rounded-md px-5 py-3 bg-dark-gray dark:bg-light-blue-DM dark:bg-opacity-25 bg-opacity-25 backdrop-blur-md space-y-1 w-32">
      <Image src={source} className="h-8 mx-auto" alt={skillName} />
      <h4 className="text-sm text-center">{skillName}</h4>
    </div>
  );
}

export default Skill;
