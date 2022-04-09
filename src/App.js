import './App.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
const [email, setEamil] = useState ('');
const [password, setPassword] = useState('');
const handleEamilBlur = (event) => {
 setEamil(event.target.value)
};
const handlePasswordBlur = (event) => {
  setPassword(event.target.value)
}
const handleLoginIn = event => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user ;
  })
  .catch(error => {
    console.error(error);
  })
  event.preventDefault()
};

  return (
    <div >
      <div className='registration  mx-auto w-50'>
        <h2 className='text-primary'>Please Register!!</h2>
        <Form onSubmit={handleLoginIn }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEamilBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
