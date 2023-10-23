import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

// Define a functional component called Navbar, which receives the `onBlogItClick` prop

const Navbar = ({ onBlogItClick }) => {
  return (
    <nav className="navbar sticky-top bg-dark px-3 py-0 shadow">
      <span className="text-primary fw-bold fs-1">orcute</span>
      <ul className="d-flex justify-content-center align-items-center mt-3 gap-5 list-unstyled text-primary fw-bold">
        <li>
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link active" href="#">
            Explore
          </a>
        </li>
        <li>
          <a className="nav-link active" href="#">
            Activities
          </a>
        </li>
      </ul>
      <Button className="btn btn-primary p-1 fw-bold" onClick={onBlogItClick}>
        Let's Blog!
      </Button>
    </nav>
  );
};

export default Navbar;
