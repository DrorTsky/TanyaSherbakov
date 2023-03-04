/** @format */

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/graphic-design">Graphic Design</Link>
    </div>
  );
};
export default Navbar;
