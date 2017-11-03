var vm = new Vue({
  el: '#new-instance',
  data:{
    greeting: 'Hello mokili',
    name: '',
    isLoggedIn: false,
  },
  methods: {
    sayHello: function(){
      alert('Salut ' + this.name);
    },

    login: function(){
      this.isLoggedIn = !this.isLoggedIn;
    }

  }
})
