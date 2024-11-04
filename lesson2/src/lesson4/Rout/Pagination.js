import React from 'react';
import { Link } from 'react-route-dom';
// переключения; productsPerPage - сколько товаров на странице
const Pagination = ({ totalProducts, productsPerPage, currentPage }) => {
    // totalPages - кол-во страниц в зависимости от кол-ва товаров, округление в большую сторону
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                // переход на другие страницы
                <Link key={index} to={`/page${index + 1}`}>{index + 1}</Link>
            ))}
        </div>
    );
};

export default Pagination;


