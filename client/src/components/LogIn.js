import React from 'react';
import { Formik } from 'formik'; // new
import {
  Breadcrumb, Button, Card, Form
} from 'react-bootstrap'; // changed
import { Link } from 'react-router-dom';

function LogIn (props) {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/#/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Log in</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Header>Log in</Card.Header>
        <Card.Body>
          {/* new begin */}
          <Formik>
            {() => (
              <Form noValidate>
                <Form.Group className='mb-3' controlId='username'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control name='username' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control name='password' type='password' />
                </Form.Group>
                <div className='d-grid mb-3'>
                  <Button type='submit' variant='primary'>Log in</Button>
                </div>
              </Form>
            )}
          </Formik>
          {/* new end */}
          <Card.Text className='text-center'>
            Don't have an account? <Link to='/sign-up'>Sign up!</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default LogIn;