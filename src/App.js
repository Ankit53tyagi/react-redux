import React,{lazy,Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './container/Header/Header';
const ProductList = lazy(() => import('./container/ProductsList/ProductList'));
const ProductDetails = lazy(() => import('./container/ProductsList/ProductDetails'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'80vh'}}><h5>Loading...</h5></div>}>
        <Routes>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/product/:id' element={<ProductDetails/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
