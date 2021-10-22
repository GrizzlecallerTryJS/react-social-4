import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.posts}>
      my posts
      <div>
        new post
      </div>
      <div>
        post1
      </div>
      <div>
        post2
      </div>
    </div>
  )
}

export default Post;
