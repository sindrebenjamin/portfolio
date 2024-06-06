import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import MobilePortFolio from "./components/MobilePortfolio";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <Header />
      <div className="bg-main-950">
        <MobilePortFolio />
      </div>
    </main>
  );
}

export default App;
