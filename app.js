console.log('objetos y librerias de vue.js');
console.log(Vue);

const app = Vue.createApp({
    //backticks ``
    //{{}} Vue utiliza una representacion declarativa para evaluar/ejecutar expresiones JS
    template: `
    <h1> Hola Mundo desde Vue.js </h1>
    <p>Expresion JS</p>
    <p>{{1+1}}</p>

    <h2> Arreglo </h2>
    <p>{{[1,2,3,4,5]}}</p>

    <p>Objeto</p>
    <p>{{ {nombre:"Roberth", apellido:"Troya"} }}</p>
    
    <p>Funcion ternaria</p>
    <p>{{1+1==3 ? 'Activo' : 'Inactivo'}}</p>

    `
})

app.mount('#myApp')
