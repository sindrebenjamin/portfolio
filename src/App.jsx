import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import MobilePortFolio from "./components/MobilePortfolio";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <Header />
      <Section>
        <h1 className="text-main-500 flex flex-col">
          <span className="font-name italic fluid-xl sm:fluid-2xl md:fluid-3xl">
            Sindre Skoglund-Hansen
          </span>
          <span className="font-bold fluid-2xl sm:fluid-3xl md:fluid-4xl font-heading">
            Frontend developer
          </span>
        </h1>
      </Section>
      <Section className="bg-main-950">
        <MobilePortFolio />
      </Section>
      <div className="bg-main-950"></div>
    </main>
  );
}

export default App;
