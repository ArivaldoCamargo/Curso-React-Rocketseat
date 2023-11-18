import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

        onDeleteComment(content);

    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return (

        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arivaldocamargo.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arivaldo Camargo</strong>
                            <time title="04 de Novembro às 00:33h" dateTime="2022-11-04">Cerca de 1h atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>

            </div>

        </div>

    )
}