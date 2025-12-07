import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const validarDatos = (e) => {
    e.preventDefault()

    setMensaje('');
    setTipoMensaje('');

    if(email === "" || password === ""){
      setMensaje("Todos los campos son obligatorios.");
      setTipoMensaje('danger');
      return;
    }
    if(password.length < 6){
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje('danger');
      return;
    }

    setMensaje(`¡Bienvenido, ${email}!`);
    setTipoMensaje('success');
    setEmail('');
    setPassword('');
  }


  return (
    // Se añade 'noValidate' para que la validación del navegador no interfiera con la nuestra.
    <Form className='formulario-login' onSubmit={validarDatos} noValidate>
      {/*Se usa el componente Alerta y le pasamos el mensaje y el tipo como props */}
      <Alerta mensaje={mensaje} tipo={tipoMensaje} />
      
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Ingresa tu email" 
          onChange = {(e) => setEmail(e.target.value)} 
          value={email} 
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Ingresa tu contraseña" 
        name="Password" 
        onChange = {(e) => setPassword(e.target.value)} 
        value={password} 
        required
      />
      </Form.Group>
      
      <Button variant="primary" type="submit">Enviar</Button>
    </Form>
  );
}

export default Login;