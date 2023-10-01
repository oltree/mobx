import { makeAutoObservable, runInAction } from 'mobx';

import { Post, getPosts } from '../../api/getPosts';
// import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';

class PostsStore {
  posts: Post[] = [];
  isLoading = false;

  /* posts?: IPromiseBasedObservable<Post[]>; */

  constructor() {
    makeAutoObservable(this);
  }

  getPostsAction = async () => {
    try {
      this.isLoading = true;

      const response = await getPosts();

      runInAction(() => {
        this.posts = response;
        this.isLoading = false;
      });
    } catch (err) {
      this.isLoading = false;

      console.error(err);
    }
  };

  /* getPostsAction = () => {
    this.posts = fromPromise(getPosts());
  }; */
}

export default new PostsStore();
