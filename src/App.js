import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Header from './Pages/SharedItems/Header/Header';
import NotFound from './Pages/SharedItems/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
