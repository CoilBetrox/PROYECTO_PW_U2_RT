const listaT = [
    {tarea: 'Lavar Platos', descrip: 'Lavar hasta antes de las 7'},
    {tarea: 'Bañar al perro', descrip: 'Usar nuevo jabón'}
]

const app = Vue.createApp({
    data() {
        return {
            lista: listaT,
            tarea: '',
            descrip: ''
        }
    },
    methods: {
        agregaTarea(tipo){
            if(tipo === 'Top'){
                if(this.tarea === ''){
                    window.alert("Ingrese una tarea")
                }else{
                    this.lista.unshift({tarea: this.tarea, descrip: this.descrip})
                }
            }else{
                if(this.tarea === ''){
                    window.alert("Ingrese una tarea")
                }else{
                    this.lista.push({tarea: this.tarea, descrip: this.descrip})
                }
            }
            this.tarea = ''
            this.descrip = ''
        }
    }
})

app.mount('#myApp')