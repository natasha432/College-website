import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-img"
          onClick={handlePlayClick}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>A Legacy of Academic Excellence</h2>
        <p>
          Our university is a center of academic excellence, dedicated to fostering intellectual growth, research, and professional development. With experienced faculty, modern infrastructure, and industry-aligned curricula, we provide students with a strong foundation for lifelong success.
        </p>
        <p>
         We emphasize a holistic learning environment that encourages creativity, collaboration, and ethical responsibility. Through academic rigor and experiential learning, students are empowered to transform knowledge into meaningful real-world impact.
        </p>
        <p>
          Our campus culture promotes inclusivity, innovation, and global awareness, preparing graduates to become responsible leaders and contributors to society. With experienced faculty, modern infrastructure, and industry-aligned curricula, we equip students with a strong foundation for lifelong learning and career success.
        </p>
      </div>
      {showVideo && (
        <div className="video-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowVideo(false)}>
              ×
            </button>
            <video
              className="modal-video"
              controls
              autoPlay
              src="https://www.pexels.com/download/video/30284506/" 
            >
              {/* Your browser does not support the video tag. */}
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
