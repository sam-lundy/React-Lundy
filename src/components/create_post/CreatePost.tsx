import './CreatePost.css'
import { useState, FormEvent } from 'react'


interface CreatePostProps {
    onPostSubmit: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostSubmit }) => {
    const [content, setContent] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (content.length <= 280) {
            onPostSubmit(content);
            setContent('');
        } else {
            alert("Post exceeds character limit!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="app-container">
                <div className="create-post-container">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        maxLength={280}
                        placeholder="What's on your mind?"
                        className="post-textarea"
                    />
                    <button type="submit" className="post-button">
                        Post
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CreatePost;