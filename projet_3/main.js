
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

/*    V_ON = Evenement ecouté par Vue     */
 let vn = new Vue ({
       el:'#app2',
       methods:{
             toast(){
                   this.toastedPain++
             }
       },
       data:{
           toastedPain:0,
           worlds: ['Terran', 'Julie', 'New kroy','vaste']
       }
 });

 new Vue ({
     el:'#app3',
     data:{
         noms:['Jean','Pierre','Luc','Thomas'],
         newName: ''
     }
 })
