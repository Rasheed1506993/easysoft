
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">My Projects</h1>
      <p className="my-4">Here you can see some of my work.</p>
      
      <Link to="/" className="nav-link">Back to Home</Link>
    </div>
  );
};

export default Projects;
