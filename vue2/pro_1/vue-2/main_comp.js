Vue.component('global-cmp', {
    template: '<div>GLOBAL component</div>'
});

let myCmp = {
    //ajout des données
    data: function(){
        return {
            randomNumber: Math.floor(Math.random() * 10)
        }
    },

    template:'<p>LOCAL component: {{randomNumber}} <button v-on:click="refrefhNumber()">F5</button> viens du parent {{msg}}</p>',

    //ajout des methodes
    methods: {
      refrefhNumber() {
        this.randomNumber = Math.floor(Math.random() * 10)
      }
    },
    props: ['msg']
};

let vm = new Vue({
    el:'#app',
    components: {
      'my-compo':myCmp
  },
  data:{
    message:'Je suis ici'
  }
})
