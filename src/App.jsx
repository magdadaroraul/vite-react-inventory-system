import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Registration from './pages/Registration';
import Login from './pages/Login';

function AppFunction() {
  return (
    <div>
      <h1>REGISTRATION</h1>
      <Registration/>
      <h1>LOGIN</h1>
      <Login/>
    </div>
  );
}

export default AppFunction;