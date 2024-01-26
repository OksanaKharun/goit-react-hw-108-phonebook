import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/dataUser/userThunk';
import css from './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   


 const handleOnSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
       .then(() => {
        setEmail('');
        setPassword('');
      })
     .catch(() => alert('Incorrect login or password'));

    form.reset();
  };



  return (
    <Container className={css.Form}>
      <Form className='log-in' onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='lable'>Email</Form.Label>
          <Form.Control
            className='login-input'
            
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className='login-input'
            
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button className='login-btn'
          type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;