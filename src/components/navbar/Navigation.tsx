import './Navigation.css'
import { Link } from 'react-router-dom'


const Navigation: React.FC = () => {
  return (
    <>
      <div className='navbar'>
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
          <li><Link to="/display-posts">Posts</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navigation