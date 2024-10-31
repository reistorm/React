import { useState } from "react";

export function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    function removeComment(num) {
        setComments(item => item.filter(comment => comment.id !== num));
    }
    return (
        <>
            <ul>
                {comments.map(el => 
                    <li key={el.id}>{el.text} <button onClick={() => removeComment(el.id)}>Удалить комментарий</button></li>
                )}
            </ul>
        </>
    );
}

export default CommentsList;
