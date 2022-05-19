import { useState } from 'react';
import sleep from 'sleep-promise';
import { generatePosts } from '../utils/data';

import './Posts.css';

const dummyPosts = generatePosts();

const fetchPosts = () => {
    const posts = new Promise(resolve => resolve(dummyPosts)).then(sleep(1000));
    return posts;
}

const suspensify = (promise) => {
    let status = 'pending';
    let result;
    const suspender = promise.then(
      (r) => {
        status = 'success';
        result = r;
      },
      (e) => {
        status = 'error';
        result = e;
      }
    );
    return {
      read() {
        if (status === 'pending') {
          throw suspender;
        } else if (status === 'error') {
          throw result;
        } else if (status === 'success') {
          return result;
        }
      },
    };
  }

const initialPosts = suspensify(fetchPosts());

export default function Posts() {
    const [postsResource] = useState(initialPosts);
    const posts = postsResource.read();

    return (
      <ul>
        {
          posts.map(post => (
            <li className='post' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>-{post.author}</p>
            </li>
          ))
        }
      </ul>
    );  
  }

  

