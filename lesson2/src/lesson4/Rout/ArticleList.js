// npm install react-route-dom

import React from 'react';
import { Link } from 'react-route-dom';

// будет отображать статьи (список внутри, которого будут ссылки)
const ArticleList = ({ articles }) => {
    <div>
        <h2>Список статей:</h2>
        <ul>
            {articles.map(article => (
                // присваиваем уник.значение
                <li key={article.id}>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </li>
            ))}
        </ul>
    </div>
};

export default ArticleList;