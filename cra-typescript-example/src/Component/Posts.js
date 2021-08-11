import React from "react";
import usePosts from "../Hooks/usePost.hook";
// import { sayHello } from "hwrldkuldeep";

import SayHello from "sample_react_package_kuldeep";

const PostList = () => {
  const posts = usePosts();
  return (
    <div className="App">
      {/* <h1>Post Title {sayHello()}</h1> */}
      <SayHello name="Kuldeep" />
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}> {post.title} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
