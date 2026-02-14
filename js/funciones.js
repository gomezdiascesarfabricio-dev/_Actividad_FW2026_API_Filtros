const inst = Vue.createApp({
    created() {
        this.cargaPersonajes();
        this.personajesFiltrados=this.personajes;
    },

    data() {
        return {
            personajes: [],
            personajesFiltrados: [],
            seleccionaCategoria:'Todos',
            personajeSeleccionado: null,
        }
    },
    methods: {
        cargaPersonajes() {
            axios.get("https://dragonball-api.com/api/characters?limit=10").then(respuesta => {
                this.personajes = respuesta.data.items;
                console.log(respuesta);
                this.personajesFiltrados=this.personajes;
            });
        },
        filtrarPorCategoria(categoria) {
            this.seleccionaCategoria = categoria;
            if (this.seleccionaCategoria == 'Todos') {
                this.personajesFiltrados = this.personajes;
            }
            else {
                this.personajesFiltrados = this.personajes.filter(personaje => personaje.race.includes(categoria));
            }
        },
    }


});

const app = inst.mount("#contenedor")
