const listaP = [
    {nombre: 'Name1', apellido: 'Ape1', edad: 28, direccion:'dir1', correo:'name1ape1@correo.com'},
    {nombre: 'Name2', apellido: 'Ape2', edad: 27, direccion:'dir2', correo:'name2ape2@correo.com'},
    {nombre: 'Name3', apellido: 'Ape3', edad: 26, direccion:'dir3', correo:'name3ape3@correo.com'},
    {nombre: 'Name4', apellido: 'Ape4', edad: 27, direccion:'dir4', correo:'name4ape4@correo.com'},
    {nombre: 'Name5', apellido: 'Ape5', edad: 28, direccion:'dir5', correo:'name5ape5@correo.com'},
    {nombre: 'Name6', apellido: 'Ape6', edad: 27, direccion:'dir6', correo:'name6ape6@correo.com'},
    {nombre: 'Name7', apellido: 'Ape7', edad: 25, direccion:'dir7', correo:'name7ape7@correo.com'},
    {nombre: 'Name8', apellido: 'Ape8', edad: 26, direccion:'dir8', correo:'name8ape8@correo.com'},
    {nombre: 'Name9', apellido: 'Ape9', edad: 28, direccion:'dir9', correo:'name9ape9@correo.com'},
    {nombre: 'Name10', apellido: 'Ape10', edad: 29, direccion:'dir10', correo:'name10ape10@correo.com'},
    {nombre: 'Name11', apellido: 'Ape11', edad: 28, direccion:'dir11', correo:'name11ape11@correo.com'}
]



const app = Vue.createApp({
    //Options API
    data() {
        return {
            //propiedades reactivas
            lista: listaP
        }
    },
    methods: {
        agregaProfesor(){
            var num = listaP.length + 1
            this.lista.push({nombre: 'Name'+num, apellido: 'Ape'+num, edad: 26, direccion:'dir'+num, correo:'name'+num+'ape'+num+'@correo.com'})
        }

    }
})

app.mount('#myApp')