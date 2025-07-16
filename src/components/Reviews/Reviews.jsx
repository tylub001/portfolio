import { Link } from "react-router-dom";
import "./Reviews.css";

function Reviews() {
  const projects = [
    {
      id: 5,
      title: "PokemonDB",
      url: "https://tylub001.github.io/pokemonDB/",
    },

    {
      id: 2,
      title: "Weather App",
      url: "https://www.btwdwr-demo.jumpingcrab.com/",
    },

    {
      id: 4,
      title: "BreatheWell",
      url: "https://tylub001.github.io/CalmCoders2025/",
    },

    {
      id: 1,
      title: "Project Spots",
      url: "https://tylub001.github.io/se_project_spots/",
    },
    {
      id: 3,
      title: "TaskFlow",
      url: "https://tylub001.github.io/testing1/",
    },
  ];

  return (
    <div className="reviews">
      <ul className="reviews__list">
        {projects.map((project) => (
          <li key={project.id} className="reviews__item">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
