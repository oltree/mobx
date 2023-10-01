import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async () =>
  (await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')).data;
