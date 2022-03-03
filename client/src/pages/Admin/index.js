import React from 'react';
import {Link,NavLink, Routes, Route, useMatch} from "react-router-dom";
import './styles.css';
import {Box} from '@chakra-ui/react';
import Home from './Home';
import Orders from './Orders';
import Products from './Products';
import ProductDetail from './ProductDetail';
import NewProduct from './Products/new';

function Admin() {
    let to = "/admin/*";
    const match = useMatch(to);

    return (
    <div>
      <nav>
          <ul className='admin-menu'>
              <li> 
                  <NavLink to={`${match.pathnameBase}/home`}>Home</NavLink>
              </li>
              <li>
                  <NavLink to={`${match.pathnameBase}/orders`}>Orders</NavLink>
              </li>
              <li>
                  <NavLink to={`${match.pathnameBase}/products`}>Products</NavLink>
              </li>
          </ul>
      </nav>
        <Box mt={10}>
            <Routes>
                <Route exact path='/home' element={<Home/>}></Route>
                <Route path='/orders' element={<Orders/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/products/:product_id' element={<ProductDetail/>}></Route>
                <Route path='/products/new' element={<NewProduct/>}></Route>
            </Routes>
        </Box>
    </div>
  )
}

export default Admin;

