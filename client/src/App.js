import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <div id="content">
          <Routes>
          <Route path="/" exact element={<Products/>} />
          <Route path="/product/:product_id" element={<ProductDetail/>} />
          <Route path="/signin" element={<Signin/>} /> 
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/basket" element={<Basket/>}/>
          <Route path='/profile' element={<ProtectedRoute />}/>  
          <Route
          path="*"
          element={<Error404 to="/" />}/>       
        </Routes>
        </div>
        
      </div>
    </BrowserRouter>
   
  );
}



export default App;
