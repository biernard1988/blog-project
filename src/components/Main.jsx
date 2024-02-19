import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./MyCard";
import { useState } from "react";
import "../App.css";

const Main = () => {
  // Initialize state variables for title, photo, comment, and blogs
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [comment, setComment] = useState("");
  const [blogs, setBlogs] = useState([]);

  // Event handlers for input fields
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleInputPhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleInputComment = (e) => {
    setComment(e.target.value);
  };

  // Event handler for creating a new blog
  const handleBlogItClick = () => {
    if (title === "" || photo === "" || comment === "") {
      alert("Please add your Title, Photo, and Comment");
    } else {
      const submit = { id: new Date().getTime(), title, photo, comment };
      setBlogs([...blogs, submit]);

      // Clear input fields
      setTitle("");
      setPhoto("");
      setComment("");
    }
  };

  // Event handler for removing a blog
  const handleRemoveBlog = (blogId) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(updatedBlogs);
  };

  return (
    <main className="container-fluid row bg-dark p-5 rounded shadow">
      <div className="form-button-area d-flex flex-column col-sm-6 col-md-10 col-lg-6 col-xl-6">
        <div className="form-area d-flex flex-column gap-3">
          <div className="d-flex gap-4">
            <span className="text-light fw-bold">Title:</span>
            <input
              type="text"
              placeholder="Enter your title"
              onChange={handleInputTitle}
              value={title}
            />
          </div>
          <div className="d-flex gap-4">
            <span className="text-light fw-bold">Photo:</span>
            <input
              type="text"
              onChange={handleInputPhoto}
              placeholder="Image address"
              value={photo}
            />
          </div>
          <div className="d-flex gap-2">
            <span className="text-light fw-bold">Text:</span>
            <textarea
              onChange={handleInputComment}
              cols="30"
              rows="10"
              placeholder="Enter your text"
              value={comment}
            ></textarea>
          </div>
        </div>
        <div className="button-area d-flex flex-row-reverse w-50 mt-3">
          <button
            className="btn btn-primary p-2 fw-bold "
            onClick={handleBlogItClick}
          >
            Blog it!
          </button>
        </div>
      </div>

      <div className="card-area col-sm-12 col-md-10 col-lg-6 col-xl-6">
        {blogs.map((blog) => (
          <MyCard key={blog.id} blog={blog} onDelete={handleRemoveBlog} />
        ))}
      </div>
    </main>
  );
};

export default Main;
