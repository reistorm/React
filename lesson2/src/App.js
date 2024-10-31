import './App.css';
import CommentsList from './components/CommentsList';
import Counter from './components/counter';
import MessageList from './components/renderArray';
import Timer from './components/timer';
import RefExamle from './components/useRef';
import Show from './components/visible';

function App() {
  const userName = 'Maxim';
  return (
    <div>
        <h1>Hello, {userName}</h1>
        {/* <Counter />
        <Show />
        <Show data="Текст и компонента" />
        <Timer />
        <RefExamle />
        <MessageList /> */}
        <CommentsList />

    </div>
  );
}

export default App;
