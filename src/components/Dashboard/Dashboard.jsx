import { Link } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <p className="portfolio">Portfolio</p>
      

        <div className="intro">
          <p className="title">A New Beginning</p>
          When I first started my journey at TripleTen, I had little to no
          experience in coding. It felt like stepping into a completely new
          world—one filled with logic, creativity, and endless possibilities.
          But through persistence and hands-on learning, I have transformed from
          knowing nothing about web development to confidently working with
          HTML, CSS, JavaScript, React, Redux, and more.
          <p>
            I've learned how to structure and style web pages, build dynamic and
            interactive applications, and manage state efficiently with modern
            tools. Debugging, problem-solving, and refining user experiences
            have become second nature, and each project pushes me to think
            critically and improve my skills. Now, I approach coding challenges with adaptability, embracing the
            process, and constantly learning to refine my craft. The journey has
            been transformative, and I'm excited to continue building and
            exploring new technologies!
          </p>
            <Link className="link" to="/reviews">
          Click here!
        </Link>
        </div>
      </div>

      <div>
        <img
          className="image"
          src="https://i.postimg.cc/PrLm04Hh/aaaaaaa-removebg-preview.png"
        ></img>
      </div>
    </>
  );
}

export default Dashboard;
