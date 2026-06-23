import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MRIGANSHU
              <br />
              <span>K SINGH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Founder &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Automation Builder</div>
              <div className="landing-h2-2">Web Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Web Developer</div>
              <div className="landing-h2-info-1">AI Automation Builder</div>
            </h2>
            <p style={{ marginTop: "20px", maxWidth: "450px", fontSize: "1.1rem", lineHeight: "1.5", color: "#ccc" }}>
              Building modern websites, AI-powered systems, and digital experiences that help businesses grow.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
