import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Products/>
    </div>
  );
}

export default App;
