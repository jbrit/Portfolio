import React from "react";

const PageContainer: React.FC = ({ children }) => {
  return (
    <div className="py-7 px-4 mx-auto sm:w-4/5 text-white">{children}</div>
  );
};

export default PageContainer;
