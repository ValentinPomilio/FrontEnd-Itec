function IngresaNombre(){
    let nombre;

    while (true){
        nombre = prompt("Ingrese su nombre")
        if (nombre == ''){
            console.log('No ingreso ningun nombre, vulva a intentarlo!')
        } else {
            break
        }
    }
    return nombre
}

function IngresaEdad(){
    let edad;

    while(true){
        edad = Number(prompt("ingrese su edad"))
        if (Number.isInteger(edad)){
            break
        } else {
            console.log("Recuerda que la edad tiene que ser un numero!")
        }
    } 
    return edad
}

function IngresaContraseña(){
    let contraseña;
    while (true){
        contraseña = prompt("Ingresa una contraseña de mas de 6 digitos")
        if (contraseña.length < 6){
            console.log("La contraseña es muy corta, intentalo nuevamente!")
        } else {
            break
        }
    }
}

let nombre = IngresaNombre();
let edad = IngresaEdad();

if (edad < 18){
    console.log("Eres menor de edad, acceso denegado!")
} else{
    let contraseña = IngresaContraseña();
    console.log('bienvenido!')
    console.log("Hola " + nombre + " en 10 años vas a tener " + (edad + 10))
}