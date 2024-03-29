import About from './About';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Product from './Product';
import Services from './Services';
import FooterNew from './FooterNew';
import FormNew from './FormNew';
import Home from './Home';
import Form from './Form';
import Navbar from './Navbar';
import Header from './Header';
import Shop from './Shop';


function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Services' element={<Services />}></Route>
        <Route path='Form' element={<FormNew />}></Route>
        <Route path='ContextForm' element={<Form />}></Route>
        <Route path='Data' element={<About />}></Route>
        <Route path='Product' element={<Product />}></Route>
        <Route path='Shop' element={<Shop />}></Route>
      </Routes>
      <FooterNew />
    </>
  );
}

export default App
