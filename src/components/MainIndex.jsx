import React from "react";
import IndexHome from "./mainIndex/IndexHome";
import IndexProjects from "./mainIndex/IndexProjects";
import IndexSolutions from "./mainIndex/IndexSolutions";
import IndexTech from "./mainIndex/IndexTech";
import Indexservice from "./mainIndex/Indexservice";

const MainIndex = () => {
  return (
    <>
      <IndexHome />
      <Indexservice />
      <IndexTech />
      <IndexSolutions />
      <IndexProjects />
    </>
  );
};

export default MainIndex;
