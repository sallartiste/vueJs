var vm = new Vue({
  el: '#new-instance',
  data:{
    greeting: 'Hello mokili',
    name: '',
    isLoggedIn: false,
    inventory:[
      {name:'Pomme', price:'0,50'},
      {name:'Fraise', price:'0,99'},
      {name:'Banane', price:'1,50'},
      {name:'Avocat', price:'2,99'}
    ],
    X: 1
  },
  methods: {
    sayHello: function(){
      alert('Salut ' + this.name);
    },

    login: function(){
      this.isLoggedIn = !this.isLoggedIn;
    },
},

computed:{
    doubleX: function(){
        return this.X*2;
    }
}
})
