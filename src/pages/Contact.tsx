
const Contact = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="my-4">You can reach me at: mazen1221cool@gmail.com</p>
      
      <Link to="/" className="nav-link">Back to Home</Link>
    </div>
  );
};

import { Link } from "react-router-dom";
export default Contact;
