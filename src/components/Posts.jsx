import './Posts.css';

export default function Posts({filteredPosts}) {
    return (
      <ul>
        {
            filteredPosts.map(post => (
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

  

