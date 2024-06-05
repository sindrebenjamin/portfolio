import { useState } from "react";

import MolbileItemButton from "./MobileItemButton";
import MobileFileButton from "./MobileFileButton";
import MobilePage from "./MobilePage";
import { projects } from "../projects";

const MobilePortFolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [page, setPage] = useState(0);

  function handleOpenProject(index) {
    setSelectedProject(index);
    setPage(1);
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project, index) => {
          return (
            <MolbileItemButton
              onClick={() => handleOpenProject(index)}
              key={index}
              className={index === 2 ? "col-span-2" : ""}
              title={project.title}
            />
          );
        })}
      </div>

      <MobilePage
        onClick={() => setPage(0)}
        translate={page === 0 ? 100 : page === 1 ? 0 : -100}
        title={projects[selectedProject].title}
      >
        {projects[selectedProject].files.map((file, index) => {
          return (
            <MobileFileButton
              title={index === 0 ? "index.html" : "README.txt"}
              date={file.date}
              href={projects[selectedProject].netlify}
              onClick={() => setPage(2)}
            />
          );
        })}
      </MobilePage>
      <MobilePage
        onClick={() => setPage(1)}
        translate={page === 0 ? 200 : page === 1 ? 100 : 0}
      >
        test
      </MobilePage>
    </>
  );
};

export default MobilePortFolio;
