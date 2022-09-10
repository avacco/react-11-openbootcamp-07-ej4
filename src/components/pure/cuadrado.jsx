import React, { useState } from 'react';


  let estiloInicial = {
    margin: '20px',
    borderStyle: 'solid',
    height: '255px',
    width: '255px', 
    backgroundColor: 'black',
    color: 'white'
  }

  // Usa un booleano para decidir si se ha definido un estilo (bloquea los cambios de estilo).
  let definido = false;
  // Usa otro booleano para controlar el intervalo de cambio de estilo. Cuando esté en false, dejará de cambiar estilos.
  let intervalo = false;

const Cuadrado = () => {

  const [cuadradoStyle, setCuadradoStyle] = useState(estiloInicial);
  const cambiarEstilo = () => {
    if(!definido){
      // asigna numeros al azar entre 0 y 255 a cada valor de rojo, verde y azul para generar colores aleatorios
      let red = Math.random() * (255 - 0) + 0;
      let green = Math.random() * (255 - 0) + 0;
      let blue = Math.random() * (255 - 0) + 0;

      setCuadradoStyle({
        margin: '20px',
        borderStyle: 'solid',
        height: '255px',
        width: '255px', 
        backgroundColor: `rgb(${red},${green},${blue})`, // aplica los colores aleatorios
        color: 'black'
        });

        
        // Mientras intervalo sea true, continuará cambiando estilos
        if(intervalo === true){
        setTimeout(cambiarEstilo,500);
      }
    }
  }

  // Controles de onMouseXYZ y onDoubleClick

  const iniciarIntervalo = () => {
    intervalo = true;
    cambiarEstilo();
  }

  const terminarIntervalo = () => {
    intervalo = false;
  }

  const definirEstilo = () => {
    definido = !definido;
  }

  return (
    <div 
    style={cuadradoStyle} 
    onMouseEnter={iniciarIntervalo} 
    onMouseLeave={terminarIntervalo}
    onDoubleClick={definirEstilo}
    >
    </div>
  );
}

export default Cuadrado;
