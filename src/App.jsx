import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import { projects } from "./projects";
import Award from "./components/icons/Award";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <Award />
      <h1 className="text-main-500 font-name">ee</h1>
      {projects.map((project) => {
        return (
          <img
            src={project.files[1].thumbnail.src}
            alt={project.files[1].thumbnail.alt}
          />
        );
      })}
    </main>
  );
}

export default App;
