
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">Rasheed Sharaf AL-Deen</h1>
      <p className="my-2">Web Developer & Designer</p>
      
      <div className="flex flex-col gap-2 mt-4">
        <Link to="/projects" className="nav-link">View My Work</Link>
        <Link to="/contact" className="nav-link">Contact Me</Link>
      </div>
    </div>
  );
};

export default Index;
