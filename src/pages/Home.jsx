import Container from "../components/Container";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
const Home = () => {
  const [posts, setPost] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const get = async () => {
    const req = await axios.get("http://localhost:3001/v1/api/posts");
    setPost(req.data);
  };
  const deletePost = async () => {
    await axios.delete(`http://localhost:3001/v1/api/posts/${id}`);
  };
  const submit = async () => {
    await axios.post("http://localhost:3001/v1/api/posts", {
      title,
      content,
    });
  };

  //<button onClick={deletePost}>Delete Post</button>
  return (
    <Container>
      <p>Welcome to Home Page</p>
      <div>
        <button onClick={get}>GET</button>
      </div>
      <p>
        <input
          type="text"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        ></input>
      </p>
      <p>
        <input
          type="text"
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
        ></input>
      </p>
      <button onClick={submit}>Submit</button>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link className="hover:underline" to={`/books/${post.id}`}>
              {post.title}
            </Link>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;
