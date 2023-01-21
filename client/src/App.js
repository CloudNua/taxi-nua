import React, { useState } from 'react'; // changed
import {
  Button, Container, Form, Navbar
} from 'react-bootstrap'; // changed
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';

import Landing from './components/Landing';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import axios from 'axios'; // new


import './App.css';

function App () {
  // new begin
  const [isLoggedIn, setLoggedIn] = useState(() => {
    return window.localStorage.getItem('taxi.auth') != null;
  });

  const logIn = async (username, password) => {
    const url = '/api/log_in/';
    try {
      const response = await axios.post(url, { username, password });
      window.localStorage.setItem(
        'taxi.auth', JSON.stringify(response.data)
      );
      setLoggedIn(true);
    }
    catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Routes>
      <Route path='/' element={<Layout isLoggedIn={isLoggedIn} />}>
        <Route index element={<Landing />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='log-in' element={<LogIn logIn={logIn} />} />
      </Route>
    </Routes>
  );
}

function Layout ({ isLoggedIn }) { // changed
  return (
    <>
      <Navbar bg='light' expand='lg' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='logo'>Taxi</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            {
              isLoggedIn && (
                <Form>
                  <Button type='button'>Log out</Button>
                </Form>
              )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='pt-3'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;