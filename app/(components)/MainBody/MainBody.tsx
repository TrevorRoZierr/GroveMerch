import React from "react";
import TitleContent from "./TitleContent";
import AllCollections from "./AllCollections";
const MainBody = () => {
  return (
    <div className="bg-white border-b-4 border-green-400">
      <TitleContent />
      <AllCollections />
    </div>
  );
};

export default MainBody;
