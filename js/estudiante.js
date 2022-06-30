const lista = [
    { nombre: 'Roberth1', apellido: 'Troya1', edad: 99 },
    { nombre: 'Roberth2', apellido: 'Troya2', edad: 98 },
    { nombre: 'Roberth3', apellido: 'Troya4', edad: 97 },
    { nombre: 'Roberth4', apellido: 'Troya4', edad: 96 },
    { nombre: 'Roberth5', apellido: 'Troya5', edad: 95 },
    { nombre: 'Roberth6', apellido: 'Troya6', edad: 94 }
    
]


const app = Vue.createApp({
    //Options API
    data() {
        return {
            //propiedades reactivas
            lista: lista
        }
    },
    methods: {
        agregaEstudiante(){
            this.lista.unshift({nombre: 'Roberth7', apellido: 'Troya7', edad: 93})
        }

    }
})

app.mount('#myApp')