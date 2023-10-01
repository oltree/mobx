import PostsStore from './posts';
import CounterStore from './counter';

class RootStore {
  posts = PostsStore;
  counter = CounterStore;
}

export default RootStore;
