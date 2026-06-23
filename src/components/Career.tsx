import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>MG Webworks</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered web products and automation systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (IT)</h4>
                <h5>Second Year Engineering Student</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Focused on software development, web technologies, AI systems, and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
