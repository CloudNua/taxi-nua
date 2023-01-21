import React, { useState } from 'react'; // changed
import { Formik } from 'formik';
import {
  Breadcrumb, Button, Card, Form
} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom'; // changed

function LogIn (props) {

  const [isSubmitted, setSubmitted] = useState(false);
  const onSubmit = (values, actions) => {
    props.logIn(values.username, values.password);
    setSubmitted(true);
  };

  if (isSubmitted) {
    return <Navigate to='/' />;
  }


  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Log in</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Header>Log in</Card.Header>
        <Card.Body>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={onSubmit} {/* changed */}
          >
            {/* hidden for clarity */}
          </Formik>
          <Card.Text className='text-center'>
            Don't have an account? <Link to='/sign-up'>Sign up!</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default LogIn;