import './App.css';
import { useState, React } from 'react';
// import ArticleList from './component/ArticleList';
// import ArticleDetail from './component/ArticleDetail';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import ProductList from './component/ProductList';
// import ProductDetail from './component/ProductDetail';
import HomePage from './homework4/HomePage';
import AboutPage from './homework4/AboutPage'


/// App.js для Rout lesson4 - файлы ArticleList.js and ArticleDetail.js
// const articles = [
//   { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1'},
//   { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2'},
//   { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3'},
// ]
// const products = [
//   { id: 1, name: "Товар 1", description: "Описание товара 1", price: "100 руб"},
//   { id: 2, name: "Товар 2", description: "Описание товара 2", price: "200 руб"},
//   { id: 3, name: "Товар 3", description: "Описание товара 3", price: "300 руб"},
//   { id: 4, name: "Товар 4", description: "Описание товара 4", price: "400 руб"},
//   { id: 5, name: "Товар 5", description: "Описание товара 5", price: "500 руб"},
//   { id: 6, name: "Товар 6", description: "Описание товара 6", price: "600 руб"},
//   { id: 7, name: "Товар 7", description: "Описание товара 7", price: "700 руб"},
//   { id: 8, name: "Товар 8", description: "Описание товара 8", price: "800 руб"},
//   { id: 9, name: "Товар 9", description: "Описание товара 9", price: "900 руб"},
// ];

// const App = () => {
//   <Router>
//     <div>
//       <h1>Приложение для просмотра статей</h1>
//       <Routes>
//         <Route path="/" element={<ArticleList articles={articles} />} />
//         <Route path="articles/:id" element={<ArticleDetail articles={articles} />} />
//         // * - значит абсолютно другой путь
//         <Route path="*" element={<ArticleList articles={articles} />} />
//       </Routes>
//     </div>
//   </Router>
// }

/// App.js для Rout lesson4 - файлы ArticleList.js and ArticleDetail.js
// const App = () => {
//   <Router>
//     <div>
//       <h1>Приложение для просмотра продуктов</h1>
//       <Routes>
//          {/* просмотр продуктов */}
//         <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
//          {/* просмотр деталей продуктов */}
//         <Route path="product/:productId" element={<ProductDetail products={products} />} />
//         <Route path="/" element={<ProductDetail products={products} />} />
//       </Routes>
//     </div>
//   </Router>
// }

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App;
