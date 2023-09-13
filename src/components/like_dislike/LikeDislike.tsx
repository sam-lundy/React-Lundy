import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { Post } from '../../types/postTypes'


interface LikeDislikeProps {
    post: Post;
    onLike: (post: Post) => void;
    onDislike: (post: Post) => void;
}


const LikeDislike: React.FC<LikeDislikeProps> = ({ post, onLike, onDislike }) => {
    const handleLike = () => {
        onLike(post)
    }

    const handleDislike = () => {
        onDislike(post)
    }

    return (
        <div>
        <FaThumbsUp className="like-icon"
            onClick={handleLike} 
            style={{ 
                cursor: 'pointer', 
                color: post.liked ? 'blue' : 'gray'
            }}
        />
        <FaThumbsDown className="dislike-icon"
            onClick={handleDislike} 
            style={{ 
                cursor: 'pointer', 
                color: post.disliked ? 'red' : 'gray'
            }}
        />
      </div>
    );
}


export default LikeDislike;