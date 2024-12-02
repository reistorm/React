import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Message name="Maxim"/>
    </div>
    
  );
}

function Message(props) {
  return (
    <div className="Message">
       <header className="Message-header">My First React App</header>
       <h3 className="Message-h3">Hello, {props.name}</h3>
       <p>На большее просто нет времени</p>
     </div>
  )
}

export default App;
