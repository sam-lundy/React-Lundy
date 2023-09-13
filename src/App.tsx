import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navigation from './components/navbar/Navigation'
import Home from './components/home/Home'
import CreatePost from './components/create_post/CreatePost'
import DisplayPosts from './components/display_post/DisplayPosts'
import { Post } from './types/postTypes'


const App = () => {
  const [posts, setPosts] = useState<Post[]>([])

  const handlePostSubmit = (content: string) => {    //
    console.log('New post content:', content)
    const newPost: Post = {
      content: content,
      likes: 0,
      dislikes: 0,
      liked: false,
      disliked: false
    }
    setPosts(prevPosts => {
      const updatedPosts = [...prevPosts, newPost]
      console.log("Updated Posts:", updatedPosts)
      return updatedPosts
    })
  }


  const handleLike = (likedPost: Post) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post === likedPost
          ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked, disliked: false }
          : post
      )
    );
  }
  

  const handleDislike = (dislikedPost: Post) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post === dislikedPost
          ? { ...post, dislikes: post.disliked ? post.dislikes - 1 : post.dislikes + 1, disliked: !post.disliked, liked: false }
          : post
      )
    );
  }
  

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost onPostSubmit={handlePostSubmit}/>} />
          <Route path="/display-posts" element={<DisplayPosts posts={posts} onLike={handleLike} onDislike={handleDislike}/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App