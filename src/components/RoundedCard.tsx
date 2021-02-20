import React from "react";

const RoundedCard: React.FC = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: " #303338 " }}
      className="p-10 flex flex-col justify-between rounded bg-white"
    >
      {children}
    </div>
  );
};

export default RoundedCard;
