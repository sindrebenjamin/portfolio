import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import MobilePortFolio from "./components/MobilePortfolio";
import Header from "./components/Header";
import Section from "./components/Section";
import PortfolioImage from "./components/PortfolioImage";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="text-main-100">
      <Header />
      <Section>
        <h1 className="text-main-500 flex flex-col">
          <span className="font-name italic fluid-xl sm:fluid-2xl md:fluid-3xl">
            Sindre Skoglund-Hansen
          </span>
          <span className="font-bold fluid-2xl sm:fluid-3xl md:fluid-4xl font-heading">
            Frontend Developer
          </span>
        </h1>
        {/* Flex */}
        <div className="flex flex-col sm:flex-row gap-12 items-center justify-between mt-12">
          {/* Text */}
          <div className="sm:max-w-[500px] flex flex-col gap-2">
            <h2 id="about-me" className="text-main-500 font-bold sm:text-xl">
              About Me
            </h2>
            <p>
              Hi! My name is Sindre, and I am a newly graduated frontend
              developer. Through my studies, I have gained a deep understanding
              for web development. I am proficient in a range of technologies
              including HTML, CSS, JavaScript, React, and Tailwind.
            </p>
          </div>
          <div className="sm:max-w-[400px]">
            <PortfolioImage>
              <img src="/profilbilde.jpg" />
            </PortfolioImage>
          </div>
        </div>
      </Section>
      <Section className="bg-main-950">
        <MobilePortFolio />
      </Section>
      <div className="bg-main-950"></div>
    </main>
  );
}

export default App;
