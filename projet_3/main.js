
var vm = new Vue({
      el:'#app',
      data:{
            rebours:[]
      }
})

var counter = 10;
setInterval(function(){
      if(counter > 0){
            vm.rebours.push(counter--)
      }
},1000)
