import './App.css';
import { useState, React } from 'react';
import CommentsList from './components2/CommentsList';
import Counter from './components2/counter';
import MessageList from './components2/renderArray';
import Timer from './components2/timer';
import RefExamle from './components2/useRef';
import Show from './components2/visible';
import InputForm from './components3/form';
import ParentCounter from './components3/parent';
import Nav from './components3/header';
import HoverRating from './components3/rating';
import BasicList from './components3/superList';
import Student from './components3/propType';
import TemperatureConverter from './homework3/task1';
import TodoList from './homework3/task2';
// import ArticleList from 'l./lesson4/Rout/ArticleList';
// import ArticleDetail from 'l./lesson4/Rout/ArticleDetail';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ProductList from './lesson4/Rout/ProductList';
// import ProductDetail from './lesson4/Rout/ProductDetail';



function App() {
  const userName = 'Maxim';
  return (
    <div>
        
        {/* <Counter />
        <Show />
        <Show data="Текст и компонента" />
        <Timer />
        <RefExamle />
        <MessageList /> */}
        <div>
          <BorderComp>
            <h1>Домашнее задание 1</h1>
            <h2>Hello, {userName}</h2>
          </BorderComp>
        </div>
        
        {/* <ParentCounter />
        <InputForm />
        <Nav />
        <HoverRating />
        <BasicList />
        <Student name="Дима" age={30} isStudent={true}/> */}
        <BorderComp>
            <h1>Домашнее задание 2</h1>
          <CommentsList />
        </BorderComp>
        <BorderComp>
          <h1>Домашнее задание 3</h1>
          <TemperatureConverter />
          <TodoList />
        </BorderComp>
        {
        // Пример использования children 1
        /* <div className="App">
          {
            console.log(
              <DivWithChild>
                <p>Новый текст</p>
                <div>Новый элемент div</div>
              </DivWithChild>
            )
          }
        </div> */}
        {/*<div className="App">
         Пример использования children 2 
          <div>
            <h2>Пример 2 использования "children"</h2>
            <BorderComp>
              <p>Этот абзац находится внутри рамки</p>
              <button>Кнопка внутри рамки</button>
            </BorderComp>
            <p>Этот абзац находится снаружи рамки</p>
          </div>
        </div> */}
        {/* Пример использования children 3 - кастомные карточки с разными элементами внутри,
        такими как текст, кнопки, ссылки и др.*/}
        {/* <div>
          <h2>Пример 3 использования "props.children"</h2>
          <Card title="Карточка 1">
            <p>Содержимое первой карточки</p>
            <button>Действие</button>
          </Card>
          <Card title="Карточка 2">
            <p>Содержимое второй карточки</p>
            <a href="#">Ссылка</a>
          </Card>
        </div> */}
        {/* Пример использования Render props с функциональми компонентами */}
        {/* <div>
          <h1>Пример использования Render props с функциональми компонентами</h1>
          <MouseTracker render={({ x, y}) => <MouseInfo x={x} y={y} />} />
        </div> */}
    </div>
  );
}

//////// Lesson3
//////// Children
// function DivWithChild({ children }) {
//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

const BorderComp = ({ children, props }) => {
  return (
    <div style={{border: '2px solid #000', padding: '16px'}}>
      {children}
    </div>
  )
}

// const Card = ({ title, children }) => {
//   return (
//     <div style={{border: '1px solid #ccc', padding: '16px', marginBottom: '16px'}}>
//       <h2>{title}</h2>
//       <p>Рекламный текст</p>
//       {children}
//     </div>
//   )
// }

// //////////// Render Props
// // Компонент для отслеживания положения курсора мыши
// const MouseTracker = ({ render }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0});

//   const handleMouseMove = (event) => {
//     setPosition({ x: event.clientX, y: event.clientY });
//   }

//   return (
//     <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
//       {/* Внутри Render prop используем переданную функцию */}
//       {render(position)}
//     </div>
//   )
// };

// // Компонент, который использует Render prop для рендеринга информации о положении курсора
// const MouseInfo = ({ x, y }) => {
//   return (
//     <div>
//       <h2>Положение курсора</h2>
//       <p>X: {x}, Y: {y}</p>
//     </div>
//   )
// }

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

// const App1 = () => {
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


// const App1 = () => {
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
export default App;
