import './App.css';
import Counter from './components/counter';
import MessageList from './components/renderArray';
import Timer from './components/timer';
import RefExamle from './components/useRef';
import Show from './components/visible';

function App() {
  const userName = 'Alex';
  return (
    <div>
        <h1>Hello, {userName}</h1>
        <Counter />
        <Show />
        <Show data="Текст и компонента" />
        <Timer />
        <RefExamle />
        <MessageList />

    </div>
  );
}

export default App;
