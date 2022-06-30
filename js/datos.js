const app = Vue.createApp({
    //Options API
    data () {
        return {
            //propiedades reactivas
            mensaje: 'Hola Mundo',
            mensaje1: 'Mi primer mensaje'
        }
    },
    methods: {
        cambiarMensaje(event){
            console.log(event)
            this.mensaje= 'Texto cambiado'
        },
        cambiarMensajeMayus(){
            this.mensaje1 = this.mensaje1.toUpperCase()
        },
        cambiarTodo(){
            this.cambiarMensaje()
            this.cambiarMensajeMayus()
        }
    }
})

app.mount('#myApp')