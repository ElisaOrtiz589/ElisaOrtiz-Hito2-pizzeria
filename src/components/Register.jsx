import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta'; 

const Register = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Se manejarán los mensajes de una forma más descriptiva.
  //    - 'mensaje' guardará el texto a mostrar.
  //    - 'tipoMensaje' guardará si es de éxito ('success') o error ('danger').
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const validarDatos = (e) => {
    e.preventDefault()

    setMensaje('');
    setTipoMensaje('');

    if(email === "" || password === "" || confirmPassword === ""){
      setMensaje("Todos los campos son obligatorios.");
      setTipoMensaje('danger');
      return;
    }
    if(password.length < 6){
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje('danger');
      return;
    }
    if(password !== confirmPassword){
      setMensaje("Las contraseñas no coinciden.");
      setTipoMensaje('danger');
      return;
    }

    setMensaje("Registro exitoso. ¡Bienvenido!");
    setTipoMensaje('success');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    // Se añade 'noValidate' para que la validación de React siempre se ejecute.
    <Form className='formulario-register' onSubmit={validarDatos} noValidate>

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
        onChange = {(e) => setPassword(e.target.value)} 
        value={password} 
        required
        />
      </Form.Group>

      
      <Form.Group className="mb-3 text-start" controlId="formConfirmPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Ingresa tu contraseña de nuevo" 
        onChange = {(e) => setConfirmPassword(e.target.value)} 
        value={confirmPassword} 
        required
        />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Register; 