import { Suspense } from 'react'
import Posts from './components/Posts';
import PostSkeleton from './components/PostSkeleton';

import './App.css'


function App() {
  const PostSkeletons = (
    <>
      <PostSkeleton/>
      <PostSkeleton/>
      <PostSkeleton/>
    </>
  )
  
  return (
    <div className="App">
      <header className="App-header">
        <div>REACT 18</div>
        <Suspense fallback={PostSkeletons}>
          <Posts />
        </Suspense>
      </header>

    </div>
  )
}

export default App
