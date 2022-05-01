import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Products from './Pages/HomePage/Products/Products';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/SharedItems/Header/Header';
import NotFound from './Pages/SharedItems/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/products' element={<Products />} ></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
