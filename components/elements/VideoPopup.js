"use client";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { useAppContext } from "@/context/AppContext";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import "../../node_modules/react-modal-video/css/modal-video.css";
import ReactDOM from "react-dom"; // Import ReactDOM for using portals

export default function VideoPopup({ style, videoId, color, shapeIcon, title, videoTitleIcon, videoTitleIconFirsts, customClasses }) {
  const { state } = useAppContext();
  const translation = state.LANG === "en" ? en : ar;
  const [isOpen, setOpen] = useState(false);
  const [ratioClass, setRatioClass] = useState(""); // To store the class based on ratio

  const checkRatioParameter = (videoId) => {
    const videoModelElement = document.querySelector(".modal-video");
    
    // Check if videoId contains the ratio query parameter
    const ratioParam = videoId.split("?")[1];
    if (ratioParam) {
      const ratio = new URLSearchParams(ratioParam).get("ratio");
      if (ratio === "width" && ratioClass !== "width-dem") {        
        videoModelElement?.classList.add("width-dem");
      } else if (ratio === "height" && ratioClass !== "height-dem") {
        videoModelElement?.classList.add("height-dem");
      } else if (!ratio) {
        videoModelElement?.classList.remove("width-dem");
        videoModelElement?.classList.remove("height-dem");
      }
    } else {
      videoModelElement?.classList.remove("width-dem");
      videoModelElement?.classList.remove("height-dem");
    }
  };

  useEffect(() => {
    if (videoId) {
      checkRatioParameter(videoId); // Only call the check when videoId changes
    }
  }, [isOpen]); // Make sure the effect runs when videoId changes

  // Create a portal to render the ModalVideo in the body
  const renderModalVideo = () => {
    return (
      isOpen &&
      ReactDOM.createPortal(
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId.split("?")[0]}  // Correcting this line: removed the comment within JSX
          onClose={() => setOpen(false)}
          style={{
            overlay: {
              zIndex: 9999, // Use a reasonable high z-index value
            },
          }}
          className={`modal-video ${ratioClass}`} // Add dynamic class here
        />,
        document.body // Render it directly in the body
      )
    );
  };

  return (
    <>
      {style === 1 && (
        <div className="video-box">
          <a
            onClick={() => setOpen(true)}
            className="video-btn ripple video-popup"
          >
            <i className="fa-solid fa-play" />
          </a>
        </div>
      )}
      {style === 2 && (
        <div className="video-box">
          <a
            onClick={() => setOpen(true)}
            className={`video-button video-popup ${customClasses}`}
          >
            <i className={`fa-solid ${videoTitleIconFirsts} me-2`}></i>
            {title}
            <i className={`fa-solid ${videoTitleIcon} ms-2`}></i>
          </a>
        </div>
      )}
      {style === 3 && (
        <span className="button-text wow fadeInUp" data-wow-delay=".9s">
          <a
            onClick={() => setOpen(true)}
            className={`video-btn ripple video-popup ${color === "fff" ? "white-video-btn" : ""}`}
          >
            {shapeIcon ? (
              <span className="custom-video-palyer-icon"></span>
            ) : (
              <i className="fa-solid fa-play" />
            )}
          </a>
        </span>
      )}

      {/* Render the ModalVideo using a portal */}
      {renderModalVideo()}
    </>
  );
}
