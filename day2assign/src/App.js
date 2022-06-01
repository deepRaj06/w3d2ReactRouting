import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Products from './Components/Products';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='products/*' element={<Products/>}>
          <Route path=':id' element={<Product/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
