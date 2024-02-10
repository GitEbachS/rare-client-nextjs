import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import PostCard from '../components/PostCard';

function ViewPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
      <div className="post-container">
        {posts.map((post) => (
          <PostCard key={post.id} postObj={post} />
        ))}
      </div>
    </>
  );
}

export default ViewPosts;
