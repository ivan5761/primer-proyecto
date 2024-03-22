//variables 
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabrasVeces = 'vez';
let maximosIntentos = 6;
while (numeroUsuario != numeroSecreto) {
 numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor:`));

    console.log(numeroUsuario);
    /* 
    este codigo realiza 
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste el numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
    if(numeroUsuario > numeroSecreto) {
        alert('el numero secreto es menor');
    } else {
        alert('el numero secreto es mayor');
    }
   // intentos = intentos + 1;
   //intentos += 1;
   intentos++;

   // palabrasVeces = 'veces';
    if (intentos > maximosIntentos) {
        alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
        break;
    }
    }
}