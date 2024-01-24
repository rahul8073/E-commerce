
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import SignIn from './pages/signIn';
import Everything from './pages/everything';
import Product_detail from './pages/product_detail';
import Women from './pages/women';
import Men from './pages/men';
import Accessories from './pages/accessories';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
    {/* <Product/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/Everything' element={<Everything/>}/>
        <Route path='/product_detail' element={<Product_detail/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
