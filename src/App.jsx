import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import MobilePortFolio from "./components/MobilePortfolio";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <div className="bg-main-950">
        <MobilePortFolio />
      </div>
    </main>
  );
}

export default App;
