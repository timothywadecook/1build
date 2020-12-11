import React from "react";
import "../App.css";

interface Props {}

const Blog: React.FC<Props> = (props) => (
  <div className="screen">
    <h2 style={{ paddingLeft: 10 }}>Welcome to the blog!</h2>
  </div>
);

export default Blog;
