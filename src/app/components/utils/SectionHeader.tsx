import React from "react";

function SectionHeader({ text }: { text: string }) {
  return (
    <div className="space-y-1 w-fit">
      <h2 className="text-xl font-medium">{text}</h2>
      <div className="w-3/5 rounded-full h-1 bg-gradient-blue mx-auto"></div>
    </div>
  );
}

export default SectionHeader;
