//FORMA CORRECTA DE ESCRIBIR UNA PROMESA
const miPromesa2 = () => {
    return new Promise ((resolve,reject) => {
        if(true){
            resolve('La promesa 2 termino correctamente')
        }
        else{
            reject('La promesa 2 termino incorrectamente')
        }
    })
}

//FORMA LARGA DE ESCRIBIR UNA PROMESA Y MALA FORMA POR USAR CONSTANTES Y CREAR UNA CLASE QUE SIEMPRE SE EJECUTA COMO "NEW PROMISE"
const miPromesa = new Promise( (resolve,reject) => {
    if(false){
        resolve('La promesa termino correctamente')
    }
    else{
        reject('La promesa termino incorrectamente')
    }
} );

//FORMA LARGA DE ESCRIBIR LA RESPUESTA DE LA PROMESA
miPromesa.then( (repuesta) =>{
    console.log(repuesta);
} ).catch((error) => {
    console.warn(error);
} ).finally( (data) => {
    console.log('Finally')
})

//FORMA COMPACTA DE ESCRIBIR LA RESPUESTA DE LA PROMESA
/* miPromesa2()
.then((repuesta) => {console.log (repuesta)})
.catch((eror) => {console.log (eror)})
.finally((data) => {console.log ('Finally')}) //NO SE OCUPA CASI NUNCA SALVO EXEPCIONES
*/

//ASYNC - AWAIT OTRA FORMA DE ESCRIBIR LA DEVOLUCION DE LA PROMESA
const funcionPrincipal = async () => {
try{
    const repuesta = await miPromesa2();
    console.log('RESPUESTA => ',repuesta);
    }
catch (error) {
    console.warn(error);
}
}
//EJECUTANDO ASYNC - AWAIT - ES DECIR EJECUTAR LA FUNCION
funcionPrincipal()
