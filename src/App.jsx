import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Modal from "./components/Modal";
import "./App.css";
import { projects } from "./projects";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {projects.map((project) => {
        return (
          <img
            src={project.files[1].thumbnail.src}
            alt={project.files[1].thumbnail.alt}
          />
        );
      })}
    </>
  );
}

export default App;
