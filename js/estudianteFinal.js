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
            lista: lista,
            mensaje: 'Ingresar Texto',
            apellido: '',
            edad: 0
        }
    },
    methods: {
        agregaEstudianteI(){
            this.lista.unshift({nombre: this.mensaje, apellido: 'Inicio', edad: 93})
            this.mensaje = ''
        },
        agregaEstudianteF(){
            this.lista.push({nombre: this.mensaje, apellido: 'Fin', edad: 93})
            this.mensaje = ''
        },
        agregaEstudiante(tipo){
            if(tipo === 'I'){
                this.lista.unshift({nombre: this.mensaje, apellido: this.apellido, edad: this.edad})
            }else{
                this.lista.push({nombre: this.mensaje, apellido: this.apellido, edad: this.edad})
            }
            this.mensaje = ''
            this.apellido = ''
            this.edad = ''
        },
        eventoKey(event){
            if(event.charCode === 13){
                console.log('Se dispara el evento')
                console.log(event)
                this.lista.unshift({nombre: this.mensaje, apellido: 'Troya7', edad: 93})
            }
        },
        eventoKeyDesestructurado({ charCode, key }){
            //evento desestructurado
            //console.log(charCode)
            //console.log(key)
            console.log('Entro al evento')
            if(charCode === 13){
                console.log('Se dispara el evento')
                this.lista.unshift({nombre: this.mensaje, apellido: 'Troya7', edad: 93})
            }
        },
        eventoFinal(){
            //Ejemplo de modificadores de eventos
            console.log('Entro al evento')
            this.lista.unshift({nombre: this.mensaje, apellido: 'Troya7', edad: 93})
        }

    }
})

app.mount('#myApp')