import './PostSkeleton.css';

export default function PostSkeleton() {
    return (
      <ul>
        <li className="post">
            <h3 className="skeleton__title" />
            <p className="skeleton__text" />
            <p className="skeleton__text" />
            <p className="skeleton__text" />
            <p className="skeleton__author" />
        </li>
      </ul>
    );
  }