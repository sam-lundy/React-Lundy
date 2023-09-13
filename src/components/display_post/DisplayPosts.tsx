import LikeDislike from "../like_dislike/LikeDislike"
import ReplyForm from "../reply/Reply"
import { Post } from '../../types/postTypes'
import './DisplayPosts.css'


interface DisplayPostsProps {
    posts: Post[];
    onLike: (post: Post) => void;
    onDislike: (post: Post) => void;
}


const handleReplySubmit = (reply: string, postIndex: number) => {

  console.log(`Reply to post #${postIndex}: ${reply}`);
}

const DisplayPosts: React.FC<DisplayPostsProps> = ({ posts, onLike, onDislike }) => {
  console.log("Posts in DisplayPosts:", posts);
  return (
    <div className="display-posts-container">
        {posts.map((post, index) => (
            <div key={index} className="post-item">
                <p>{post.content}</p>
                <ReplyForm onReplySubmit={(reply) => handleReplySubmit(reply, index)} />
                <div className="like-dislike-icons">
                    <LikeDislike post={post} onLike={onLike} onDislike={onDislike} />
                </div>
            </div>
        ))}
    </div>

  );
}


export default DisplayPosts
  