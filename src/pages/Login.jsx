import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;