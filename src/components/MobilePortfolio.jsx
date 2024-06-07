import { useState } from "react";

import MolbileItemButton from "./MobileItemButton";
import MobileFileButton from "./MobileFileButton";
import MobilePage from "./MobilePage";
import { projects } from "../projects";
import ButtonLink from "./ButtonLink";
import GitHub from "./icons/GitHub";
import Figma from "./icons/Figma";
import PortfolioImage from "./PortfolioImage";

const MobilePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [page, setPage] = useState(0);

  function handleOpenProject(index) {
    setSelectedProject(index);
    setPage(1);
  }

  return (
    <div className="md:hidden">
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
              key={index}
              title={index === 0 ? "index.html" : "README.txt"}
              date={file.date}
              href={projects[selectedProject].netlify}
              onClick={() => setPage(2)}
            />
          );
        })}
      </MobilePage>
      <MobilePage
        title="README.txt"
        onClick={() => setPage(1)}
        translate={page === 0 ? 200 : page === 1 ? 100 : 0}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{projects[selectedProject].title}</h3>
              <p>{projects[selectedProject].files[1].content}</p>
            </div>

            {/* Image */}

            <a target="_blank" href={projects[selectedProject].netlify}>
              <PortfolioImage>
                <img
                  src={projects[selectedProject].files[1].thumbnail.src}
                  alt={projects[selectedProject].files[1].thumbnail.alt}
                />
              </PortfolioImage>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <ButtonLink style="filled" href={projects[selectedProject].netlify}>
              Demo
            </ButtonLink>
            <ButtonLink
              style="outlined"
              href={projects[selectedProject].github}
            >
              GitHub
              <GitHub />
            </ButtonLink>
            {projects[selectedProject].figma && (
              <ButtonLink
                style="outlined"
                href={projects[selectedProject].figma}
              >
                Figma
                <Figma />
              </ButtonLink>
            )}
          </div>
        </div>
      </MobilePage>
    </div>
  );
};

export default MobilePortfolio;
