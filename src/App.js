import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './container/Header/Header';
import { ProductList } from './container/ProductsList/ProductList';
import ProductDetails from './container/ProductsList/ProductDetails';

function App() {
  return (
    <>
        <Header />
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>
    </>
  );
}

export default App;
