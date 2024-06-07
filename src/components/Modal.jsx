import CloseButton from "./CloseButton";
import File from "./icons/File";
import PortfolioImage from "./PortfolioImage";
import ButtonLink from "./ButtonLink";
import GitHub from "./icons/GitHub";
import Figma from "./icons/Figma";

const Modal = ({ showModal, onClose, project }) => {
  return (
    <div
      className={`${
        !showModal && "hidden"
      } fixed z-40 h-screen w-full top-0 left-0 flex justify-center items-center`}
    >
      {/* Overlay */}
      <div
        className="h-screen w-full bg-black bg-opacity-40 absolute"
        onClick={onClose}
      ></div>
      {/* Modal */}
      <div
        className={`bg-main-900 rounded-lg z-50 w-full m-6 max-w-[1000px] border-2 border-main-100`}
      >
        <div className="flex bg-main-100 text-main-600 font-bold p-4 items-center justify-between">
          <div className="flex gap-2 items-center">
            <File color="#562e76" />
            <p>README.txt</p>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Window inside */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Text */}
            <div className="max-w-[500px]">
              <p className="font-bold mb-2">{project.title}</p>
              <p>{project.files[1].content}</p>
            </div>
            {/* Thumbnail */}
            <a className="max-w-[400px]" target="_blank" href={project.netlify}>
              <PortfolioImage>
                <img
                  src={project.files[1].thumbnail.src}
                  alt={project.files[1].thumbnail.alt}
                />
              </PortfolioImage>
            </a>
          </div>
          <div className="flex gap-2 mt-6">
            <ButtonLink style="filled" href={project.netlify}>
              Demo
            </ButtonLink>
            <ButtonLink style="outlined" href={project.github}>
              GitHub
              <GitHub />
            </ButtonLink>
            {project.figma && (
              <ButtonLink style="outlined" href={project.figma}>
                Figma
                <Figma />
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
