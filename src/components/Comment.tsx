import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(state => {
            return state +1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar
                src="https://github.com/jhoownogueira.png" 
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jhonata Nogueira</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h</time>
                        </div>
                        <button 
                            title='Deletar comentário'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    )
}