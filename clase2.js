//calbacks  funcion como argumento de funcion. 
//es lo primero que tenemos cuando hay asincronia.


/*

function fetchData(callback) {
    setTimeout(() => {
        const data = "datos obtenidos";
        callback(data)
    }, 1000);
}
function processDara (data){
    console.log("data:" + data)
}

function modifyData (data){
    console.log ("data:" + data.toUpperCase)
}

fetchData(processData)
fetchData(modifyData)



//callback hell cuando anidamos callbacks

function fetchData(callback){
    callback("info que le paso al callback")
}
function processData (data,callback){
    callback(data,toUpperCase())
}

function saveData (data,callback){
    console.log("dara",data)
    callback()
}
//const data = function fetchData (callback){
    callback("datos")*/
//}
//console.log(data)
/*fetchData(function (data){
    processData(data, function(processData){
        saveData(processData, function(){
            console.log("proceso finalizado")
        })
    })
})*/

//promesas

//unobjeto que representa finalizacon
//se cumple o se rechasa

//3 estados PENDING (PENDIENTE, FULTILLED(CUMPLIDA), REJECTIVE (RECHAZADA)

/*const pendiente = new Promise((resolve,reject) => {
    console.log("promesa pendiente")
    const exito = true;
    if(exito){
        resolve("promesa exitosa");
    } else {
        reject ("promesa rechazada");
    }
   
})

promesa
.then(resultado => {
    console.log(resultado)
})
.catch(error=> {
    console.log(error)
})
.finally(() => {
    console.log ("termino la promesa")
})*/

//encamdenamiento

/*const primeraPromesa = new Promise ((resolve, reject) => {
    resolve ("primer resultado")
})

primeraPromesa
    .then(resultado=> {
    console.log("resultado segunda promesa")
})


    .then(resultado2=> {
    console.log("resultado 2 ")
})
.then(resultado3=> {
    console.log("resultado 3 ")
})
.catch()*/

/*function moneda(eleccion){
    return new Promise ((resolve, reject)=> {
        const resultado = Math.random()<0.5 ? "cara" : "cruz";
        const eleccion ="cruz"
        if (resultado ===eleccion){
            resolve("gane")
        }else{
            reject("perdi")
        }
    })
   
    
}
moneda("cruz")
.then(mensaje => {
    console.log(mensaje)
})
.catch(error => {
    console.log(error)
})*/

/*obtenerDatos()
.then(datos =>{
    console.log(datos)
})
.catch(error =>{
    console.log(error)
})


//async await solo se usa en funcion asincrona
//pausa la funcion del resto del codigo
//hasta que se resuelva la funcion
//await es "espera que la funcion termine y haces lo que sigue"
//try catch xa manejo de errores

async function datos(){
    try{

        const datos = await obtenerDatos();
        console.log(datos)
    }catch(error){
        console.log(error)
    }
}*/

function obtenerDatosAPI() {
    return new Promise((resolve, reject)=>{
        const exito =true;
        if(exito){
            resolve("datoa de la api")
        }else{
    reject("error al obtenr data")

 }
} )    
 }
   async function mostrarData(){
    try{
        const data = await obtenerDataApi();
        console.log(datos)
    }catch(error){
console.log(error)
    }
   } mostrarData()
   //metodos de promesas. PROMISE
   //Promise.allSattled (todas terminaron y todas se cumplierron las que estan en el array)
   //cuando queiro ejecutar toda slas promesas, si falla una lo va a tomar como error general y cae en el catch
   
   
   Promise.all([promesa1, promesa2, promesa3])
   .then(datos =>{   //[2,"hola", 100]
    
    console.log(datos) 
    //devuelve un array con los resultados de todas
})
.catch(error =>{
    console.log(error)
})