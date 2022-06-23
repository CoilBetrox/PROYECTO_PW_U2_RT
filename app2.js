console.log('objetos y librerias de vue.js');
console.log(Vue);

const app = Vue.createApp({
    
    data() {
        return{
            mensaje: 'Mensaje desde un atributo DATA',
            mensaje2: 'Prueba de mensaje2'
        }
    }

    
})

app.mount('#myApp')
