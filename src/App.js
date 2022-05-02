import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/HomePage/Home/Home';
import Products from './Pages/HomePage/Products/Products';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import RequireAuth from './Pages/LoginRegister/RequiredAuth/RequiredAuth';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Footer from './Pages/SharedItems/Footer/Footer';
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
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
