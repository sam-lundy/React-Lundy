import { useState, FormEvent } from 'react';

interface ReplyFormProps {
    onReplySubmit: (reply: string) => void;
}


const ReplyForm: React.FC<ReplyFormProps> = ({ onReplySubmit }) => {
    const [reply, setReply] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onReplySubmit(reply);
        setReply('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
        value={reply} 
        onChange={(e) => setReply(e.target.value)} 
        maxLength={280}
        placeholder="Reply..."
        />
        <button type="submit">Reply</button>
    </form>
    );
}

export default ReplyForm