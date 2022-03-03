import React from 'react';
import {Link,NavLink, Routes, Route, useMatch, useLocation, BrowserRouter} from "react-router-dom";
import './styles.css';
import {Box} from '@chakra-ui/react';
import Home from './Home';
import Orders from './Orders';
import Products from './Products';

function Admin() {
    let to = "/admin/*";
    const match = useMatch(to);


    console.log(match);
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
            </Routes>
        
        </Box>
    </div>
  )
}

export default Admin;

