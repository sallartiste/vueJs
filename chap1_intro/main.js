var app = new Vue({
el: '#app',
data: {
  message: 'Je suis entrain de retrouver la vue',
  link: 'http://sallartiste.com',
  target: '_blanc',
  bibo: 'Salut le monde',
  success: true,
  persons: ['Eric', 'Maggy', 'Lloyd', 'Imanih'],
  style: {background: '#f00'}
},
methods: {
  close: function(){
    this.success = false
  }
}

})
