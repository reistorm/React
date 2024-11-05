import React from 'react';
import { useParams } from 'react-route-dom';
import Product from './lesson4/Rout/Product';
import Pagination from './lesson4/Rout/Pagination'
 
// список продуктов, с которым работаем
const ProductList = ({ products }) => {
    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    // отображение товаров на странице
    const productsPerPage = 3;
    // стартовый индекс
    const startIndex = (currentPage - 1) * productsPerPage;
    // вырезаем стартовый индекс и 3 товара на странице, берем оставшиеся
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
        <div>
            {currentProducts.map((product, index) => (
                <Product key={index} product={product} />
            ))}
            <Pagination totalProducts={products.length} productsPerPage={productsPerPage} 
            currentPage={currentPage} />
        </div>
    )
};

export default ProductList;