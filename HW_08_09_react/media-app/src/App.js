import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import './components/Header/index.css';
import './components/Articles/index.css'



function App() {
  return (
    <div className="App">
      <Header/>
      <Articles/>
    </div>
  );
}

export default App;
