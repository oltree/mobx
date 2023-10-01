// import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Counter } from './counter';

// import PostsStore from '../store/posts';

import { useStore } from '../hooks/useStore';

import styles from './App.module.css';

export const App = observer(() => {
  // const { posts, isLoading, getPostsAction } = PostsStore;

  /* useEffect(() => {
    getPostsAction();
  }, []); */

  const {
    posts: { posts, isLoading, getPostsAction },
  } = useStore();

  console.log('posts', posts);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.app}>
      <Counter />

      <div>
        <button onClick={getPostsAction}>load posts</button>
        <p>{posts.length}</p>
      </div>
    </div>
  );
});
