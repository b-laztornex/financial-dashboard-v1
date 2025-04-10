import React from "react";

interface SplitLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  switchSides?: boolean;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({
  left,
  right,
  switchSides = false,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className={switchSides ? "lg:w-1/3 w-full" : "lg:w-2/3 w-full"}>
        {switchSides ? right : left}
      </div>
      <div className={switchSides ? "lg:w-2/3 w-full" : "lg:w-1/3 w-full"}>
        {switchSides ? left : right}
      </div>
    </div>
  );
};

export default SplitLayout;
