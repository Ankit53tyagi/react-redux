import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './container/Header/Header';
import { ProductList } from './container/ProductsList/ProductList';

function App() {
  return (
    <>
        <Header />
      <Routes>
        <Route path='/' element={<ProductList/>} />
      </Routes>
    </>
  );
}

export default App;
