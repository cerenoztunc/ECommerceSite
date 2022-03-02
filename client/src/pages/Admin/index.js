import React from 'react';
import {Link, Routes, Route, useMatch} from "react-router-dom";
import './styles.css';
import {Box} from '@chakra-ui/react';
import Home from './Home';

function Admin() {
    const path = useMatch();
    const currentPath = path.matchPath;
  return (
    <div>
      <nav>
          <ul className='admin-menu'>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/">Orders</Link>
              </li>
              <li>
                  <Link to="/">Products</Link>
              </li>
          </ul>
      </nav>
        <Box mt={10}>
                <Routes>
                    <Route path={currentPath} element={<Home/>}></Route>
                </Routes>
        </Box>
    </div>
  )
}

export default Admin;
