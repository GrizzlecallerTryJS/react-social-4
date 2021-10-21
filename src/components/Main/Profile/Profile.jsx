import React from 'react';
import styles from './Profile.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div>
        Main
      </div>
      <div className={styles.about}>
        avatar + desc
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU" alt="default avatar image" />
        </div>
      </div>
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
    </div>
  )
}

export default Main;
