let i = 'Hola Mundo';

//LET: Se asocia a cada ambito y se destruye al finalizarlo
//VAR: no está asociado a ningún ambito y s epuede reinicializar el el mismo ambito sin problema
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);