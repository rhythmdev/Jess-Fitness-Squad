
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Information from './components/Information/Information';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Information></Information>
     <Blog></Blog>
    </div>
  );
}

export default App;
