import React, { useState } from 'react'; // changed
import { Formik } from 'formik';
import {
  Breadcrumb, Button, Card, Form
} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom'; // changed

function SignUp (props) {
  // new begin
  const [isSubmitted, setSubmitted] = useState(false);
  const onSubmit = (values, actions) => setSubmitted(true);

  if (isSubmitted) {
    return <Navigate to='/log-in' />;
  }
  
  if (props.isLoggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Sign up</Breadcrumb.Item>
      </Breadcrumb>
      <Card className='mb-3'>
        <Card.Header>Sign up</Card.Header>
        <Card.Body>
          <Formik
            initialValues={{
              username: '',
              firstName: '',
              lastName: '',
              password: '',
              group: 'rider',
              photo: []
            }}
            onSubmit={onSubmit} {/* changed */}
          >
            {/* hidden for clarity */}
          </Formik>
          <Card.Text className='text-center'>
            Already have an account? <Link to='/log-in'>Log in!</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SignUp;