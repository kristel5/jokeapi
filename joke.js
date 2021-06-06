var app= new Vue({
    el:'#app',
    data:{ //variable para vue
        //kristel guijosa cruz
        Open:[],
        chiste:[],
        Titulo:"green",
        Result:null,
        },
    mounted(){
        this.Buscarchistes();  //mounted llama a la api
        },
    methods:{
        buscarchistes: async function(){
            var Url="x-rapidapi-host": "webknox-jokes.p.rapidapi.com"+this.titu+"x-rapidapi-key";  //direccion de la pagina de la api+el nombre del chiste
        const response= await fetch(Url);
            this.chiste= await response.json() ;   
                console.log(this.chiste);
        },
    }
    
    
})
