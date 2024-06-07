import { useState } from "react";

import AddressButton from "./AddressButton";
import ArrowButton from "./ArrowButton";
import DesktopItemButton from "./DesktopItemButton";
import Folder from "./icons/Folder";
import { projects } from "../projects";
import { usePortfolioStore } from "../store/usePortfolioStore";
import DesktopFileButton from "./DesktopFileButton";
import Modal from "./Modal";

const DesktopPortfolio = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    selectedProject,
    previouslySelected,
    setSelectedProject,
    setPreviouslySelected,
  } = usePortfolioStore((state) => ({
    selectedProject: state.selectedProject,
    previouslySelected: state.previouslySelected,
    setSelectedProject: state.setSelectedProject,
    setPreviouslySelected: state.setPreviouslySelected,
  }));

  return (
    <div className="hidden md:block border-2 border-main-100 rounded-lg">
      {/* Topbar */}
      <div className="flex items-center gap-2 w-full p-4 bg-main-100">
        <Folder color="#562e76" />
        <p className="text-main-600 font-bold">My Projects</p>
      </div>
      {/* Addressfield */}
      <div className="bg-main-50 flex items-center justify-between pt-4 pr-4 pb-4 pl-[10px] gap-[14px]">
        {/* Buttons */}
        <div className="flex gap-3">
          <ArrowButton
            onClick={() => setSelectedProject(null)}
            direction="left"
            disabled={selectedProject === null}
          />
          <ArrowButton
            onClick={() => setSelectedProject(previouslySelected)}
            direction="right"
            disabled={selectedProject !== null}
          />
        </div>
        {/* Location */}
        <div className="flex items-center text-main-600 border border-main-600 w-full">
          <AddressButton onClick={() => setSelectedProject(null)}>
            My Projects
          </AddressButton>
          {selectedProject !== null && <p className="select-none">{">"}</p>}
          {selectedProject !== null && (
            <AddressButton>{projects[selectedProject].title}</AddressButton>
          )}
        </div>
      </div>
      {/* Browser */}
      <div className="p-4 bg-main-900 rounded-b-lg min-h-[300px]">
        <div className="grid grid-cols-3 mb-4">
          <p className="col-span-2">Name</p>
          <p className="col-span-1">Date</p>
        </div>
        {selectedProject === null &&
          projects.map((project, index) => {
            return (
              <DesktopItemButton
                onClick={() => {
                  setSelectedProject(index);
                  setPreviouslySelected(index);
                }}
                key={project.id}
                name={project.title}
                date={project.files[0].date}
              />
            );
          })}
        {(selectedProject || selectedProject === 0) &&
          projects[selectedProject].files.map((file, index) => {
            return (
              <DesktopFileButton
                key={index}
                name={index === 0 ? "index.html" : "README.txt"}
                date={file.date}
                href={projects[selectedProject].netlify}
                onClick={() => setShowModal(true)}
              />
            );
          })}
      </div>
      {selectedProject !== null && (
        <Modal
          project={projects[selectedProject]}
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default DesktopPortfolio;

//
