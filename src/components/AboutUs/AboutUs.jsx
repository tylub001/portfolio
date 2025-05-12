import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <p className="findout">You can find out more about me and my work here:</p>
      <ul>
        <li>
          <a href="https://github.com/tylub001" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brittany-tylutke-27418a34a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/brittany.tylutke" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="mailto:tylub001@gmail.com">
            tylub001@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
