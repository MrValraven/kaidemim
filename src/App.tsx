// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import portugueseVersions from "./assets/text/portuguese.json";
import englishVersions from "./assets/text/english.json";

import chappel2 from "./assets/eng/chappel2.png";
import chappel3 from "./assets/eng/chappel3.png";
import chappel4 from "./assets/eng/chappel4.png";

// hoe but make it fashion gif -
// what is love -
/* ── Motion variants ───────────────────────────────────────────── */
import type { Variants } from "framer-motion";
import Modal from "./Modal";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }, // 0.15‑s gap per verse
};

const item: Variants = {
  hidden: { y: 24, opacity: 0 }, // start 24px lower & invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 60, damping: 16 },
  },
};

const getModalChildren = (chosenChappel: string = "") => {
  switch (chosenChappel) {
    case "chappel2":
      return (
        <>
          <div className="chappel3content">
            <h2>Amor</h2>
            <p>
              I still can't believe I was the one that said it first. After all
              these years of being uncertain about how I feel my love for other
              people you really made me open my eyes.
            </p>
            <p>
              {" "}
              I love that we're partners and that our relationship feels so
              ✨queer✨ Dating you gives me so much joy and hope for all the
              community work that we do.
            </p>
            <p>
              I liiiiiiiiiiike you so much, I love you so much, I love being
              your goofy babygirl and I love that you're my silly little guy C:
            </p>
          </div>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExengxc2JqenVjZHp4cG1xMHhyYWE4aWlnMXJ1b2ZkaGVuaXgxYmp4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEhmFYGbhslCn6uQM/giphy.gif"
            alt="Funny GIF"
            style={{ borderRadius: "16px", height: "auto" }}
          />
        </>
      );
    case "chappel3":
      return (
        <>
          <div className="chappel3content">
            <h2>🔴 SLUT!!!!!!!!!!!</h2>
            <p>
              Honestly its crazy how attracted I am to you. Physically,
              emotionally, energetically.
            </p>
            <p>
              Thank you for jumpstarting my lover girl era and for making me see
              that I don't need to be afraid of asking for what I want.
            </p>
            <p>
              I still remember when we we're having sex at Mise en Scène during
              the FLINTA Party and you said that I made you feel like such a
              lesbian, I hope you know the feeling is mutual and I'm all here
              for it.
            </p>
          </div>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTBzaTdxZGV5MzI3bjIyMDN3M3AxZWNqeGQ1OHBrcngxeWE3anhqOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qEQpAXA6rc5bO/giphy.gif"
            alt="Funny GIF"
            style={{ borderRadius: "16px", height: "auto" }}
          />
        </>
      );
    case "chappel4":
      return (
        <>
          <div className="chappel3content">
            <h2>The universe finds its way</h2>
            <p>
              We started following each other on Instagram on the 20th of
              January 2024 and only managed to meet in person a year later on
              the 31st of January 2025.
            </p>
            <p>
              {" "}
              I fondly look back at our date that day that lasted a short 32
              hours. Pretty rookie numbers for a first date.
            </p>
            <p>
              {" "}
              Looking back at our text messages, during that 1 year, before we
              even met in person we always matched each other’s freaks. Deep
              down I knew I was already going to love you someday ❤️
            </p>
          </div>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThvaXNqcmlzcXVnbGxidWp4N3p5Yjk1c2c4Z3RqdnltbnZ2eGU5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1AjFIFD5p58sbFdOE0/giphy.gif"
            alt="Funny GIF"
            style={{ borderRadius: "16px", height: "auto" }}
          />
        </>
      );
    default:
      return null; // Fallback for unexpected cases
  }
};

function App() {
  const [currentMode, setCurrentMode] = useState("both");
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [chosenChappel, setChosenChappel] = useState("chappel2");

  const toggleModal = (
    isOpen: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any = null,
    currentChappel: string
  ) => {
    setChosenChappel(currentChappel);
    setImageSrc(image);
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setOpen(isOpen);
      });
    } else {
      // fallback
      setOpen(isOpen);
    }
  };

  return (
    <section className="app">
      <Modal
        isOpen={open}
        onClose={() => toggleModal(false, null, "")}
        imageSrc={imageSrc || chappel2}
        title="Kai de Mim"
      >
        {getModalChildren(chosenChappel)}
      </Modal>
      <header>
        <div className="tabs">
          <p
            className={`tab ${currentMode === "portuguese" ? "active" : ""}`}
            onClick={() => setCurrentMode("portuguese")}
          >
            Raiz
          </p>
          <p
            className={`tab ${currentMode === "english" ? "active" : ""}`}
            onClick={() => setCurrentMode("english")}
          >
            Echo
          </p>
          <p
            className={`tab ${currentMode === "both" ? "active" : ""}`}
            onClick={() => setCurrentMode("both")}
          >
            Entrelinguas
          </p>
        </div>
      </header>

      <div className="app-content">
        {(currentMode === "portuguese" || currentMode === "both") && (
          <motion.div
            key={currentMode + "portuguese"}
            className="poem-container"
            initial={{ opacity: 0, y: 32, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              mass: 0.4,
            }}
          >
            <img
              src={chappel2}
              alt="Chappel 2"
              className=" sticker chappel2"
              onClick={() => toggleModal(true, chappel2, "chappel2")}
            />
            <h1>Kai de Mim</h1>

            {/* outer motion container handles global stagger */}
            <motion.div
              className="poem-body"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {portugueseVersions.map((stanza) => (
                <div key={stanza.id} className="poem-body-stanza">
                  {stanza.verses.map((line, lineIndex) => (
                    <motion.p
                      key={`${stanza.id}-${lineIndex}`}
                      className="poem-line"
                      variants={item}
                    >
                      {line.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                      })}
                    </motion.p>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
        {(currentMode === "english" || currentMode === "both") && (
          <motion.div
            key={currentMode + "english"}
            className="poem-container"
            initial={{ opacity: 0, y: -32, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              mass: 0.4,
            }}
          >
            <img
              src={chappel3}
              alt="Chappel 3"
              className=" sticker chappel3"
              onClick={() => toggleModal(true, chappel3, "chappel3")}
            />
            <img
              src={chappel4}
              alt="Chappel 4"
              className=" sticker chappel4"
              onClick={() => toggleModal(true, chappel4, "chappel4")}
            />
            <h1>Kai de Mim</h1>

            {/* outer motion container handles global stagger */}
            <motion.div
              className="poem-body"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {englishVersions.map((stanza) => (
                <div key={stanza.id} className="poem-body-stanza">
                  {stanza.verses.map((line, lineIndex) => (
                    <motion.p
                      key={`${stanza.id}-${lineIndex}`}
                      className="poem-line"
                      variants={item}
                    >
                      {line.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                      })}
                    </motion.p>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default App;
