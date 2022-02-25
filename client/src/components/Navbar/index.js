import React from 'react';
import styles from './styles.module.css';
import {Link} from "react-router-dom";
import { Button } from '@chakra-ui/react';

import {useAuth} from '../../contexts/AuthContext';

function Navbar() {
  const {loggedIn} = useAuth();

  console.log(loggedIn);
  return (
    <div>
        <nav className={styles.nav}>
          <div className={styles.left}>
              <div className={styles.logo}>
                <Link to="/" background-color="teal">eCommerce</Link>
              </div>
              <ul className={styles.menu}>
                  <li>
                      <Link to="/" >Products</Link>
                  </li>
              </ul>

          </div>
          <div className={styles.right}>
          {
            !loggedIn && (
               <>
                <Link to="/signin">
                  <Button colorScheme='purple'>Login</Button>
                </Link>
                <Link to="/signup" >
                  <Button colorScheme='purple'>Register</Button>
                </Link>
               </> 
            )
          }
          {
            loggedIn && (
              <Link to="profile">
                <Button colorScheme="purple">Profile</Button>
              </Link>
            )
          }
          </div>
        </nav>
    </div>
  )
}

export default Navbar;
