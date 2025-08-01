import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  children?: React.ReactNode;
  song?: string;
}

export default function Modal({
  isOpen,
  onClose,
  imageSrc,
  title,
  children,
  song,
}: ModalProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isOpen) {
      if (audio) {
        audio.volume = 0.05; // Set volume here (e.g., 30%)
        audio.play();
      }
    } else {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        }}
      />
      <audio ref={audioRef} src={song} loop />

      {/* Modal content */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: 8,
          maxWidth: 700,
          width: "90%",
          maxHeight: "80vh",
          display: "flex",
          overflow: "hidden",
          zIndex: 1001,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Left image side */}
        <div style={{ flex: "1 1 50%", overflow: "hidden" }}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              viewTransitionName: "shared-image",
            }}
          />
        </div>

        {/* Right text side */}
        <div
          style={{
            flex: "1 1 50%",
            padding: 20,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            background: "#f8f0e3" /* parchment color */,
          }}
        >
          <div
            className="modal-content-text"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              gap: "10px",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
