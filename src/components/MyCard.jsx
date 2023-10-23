import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Define a functional component named MyCard, which receives the `blog` and `onDelete` props
function MyCard({ blog, onDelete }) {
  // Initialize state variable showFullComment and its setter function
  const [showFullComment, setShowFullComment] = useState(false);

  // Function to toggle the visibility of the full comment
  const toggleShowComment = () => {
    setShowFullComment(!showFullComment);
  };

  return (
    <Card style={{ width: "25rem", marginBottom: "20px", marginTop: "20px" }}>
      <Card.Img variant="top" src={blog.photo} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {showFullComment
            ? blog.comment
            : blog.comment.length > 100
            ? `${blog.comment.substring(0, 100)}...`
            : blog.comment}
        </Card.Text>

        {blog.comment.length > 100 && (
          <Button variant="primary" onClick={toggleShowComment}>
            {showFullComment ? "Show less" : "Show more"}
          </Button>
        )}
        <Button
          variant="danger"
          className="btn-remove"
          onClick={() => onDelete(blog.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
