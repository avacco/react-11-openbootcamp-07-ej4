import React, {useState} from 'react';

// Estilos
let red = 0;
let green = 200;
let blue = 150;

  // Para usuario logeado
  const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
  }

  // Para usuario no logeado
  const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold' // cambia los - por camelCase
  }

// Login / logout
const LoginButton = ({loginAction, propStyle}) => {
  return (
    <button style={propStyle} onClick={loginAction}>Ingresar</button>
  )
}

const LogoutButton = ({logoutAction, propStyle}) => {
  return (
    <button style={propStyle} onClick={logoutAction}>Salir</button>
  )
}

const OptionalRender = () => {

  // Sesion iniciada o no
  const [access, setAccess] = useState(false);

  // Numero de mensajes
  const [nMessages, setNMessages] = useState(0);

  const loginButton = () => {
    setAccess(true);
  }

  const logoutButton = () => {
    setAccess(false);
  }

  let optionalButton;

  
  /*
  const updateAccess = () => {
    setAccess(!access);
  }
  */

/*

  if(access){
    optionalButton = <button onClick={updateAccess}>Salir</button>
  }else{
    optionalButton = <button onClick={updateAccess}>Ingresar</button>
  }
*/

  if(access){
    optionalButton = <LogoutButton logoutAction = {logoutButton} propStyle = {unloggedStyle}></LogoutButton>
  }else{
    optionalButton = <LoginButton loginAction = {loginButton} propStyle = {loggedStyle}></LoginButton>
  }

  //Mensajes sin leer
  let addMessages = () => {
    setNMessages(nMessages + 1);
  }

  return (
    <div>
      { /* Boton condicional */ }
      { optionalButton }

      { /*Renderiza solo cuando esté logeado */ }
      {access ? (<div>

        { /* Numero de mensajes no leidos */ }
        { /* Si se cumplen las dos primeras condiciones, renderiza lo que esta despues del ultimo && */ }
        { nMessages > 0 && nMessages === 1 && <p>Tienes {nMessages} mensaje sin leer</p> }
        { /* Si se cumple la primera condicion, renderiza lo que esta despues del && */ }
        { nMessages > 1 && <p>Tienes {nMessages} mensajes sin leer</p> }
        { nMessages === 0 && <p>No tienes nuevos mensajes</p> }


        { /* Tambien se pueden usar operadores ternarios */ }
        <button onClick={addMessages}> {nMessages === 0 ? 'Añadir un primer mensaje' : 'Añadir mas mensajes'} </button>
      </div>) : null}


      

    </div>
  );
}

export default OptionalRender;
