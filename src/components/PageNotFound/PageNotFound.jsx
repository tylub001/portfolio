import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <p className="not-found__text">
        Uh oh! There&apos;s nothing here... Sorry. 🥺
      </p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default PageNotFound;