var vm = new Vue({
    el:'#app',
    data:{
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis quam scelerisque, consectetur eros eu, gravida ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
    },
    filters:{
        coupeFraz: function(value){
            if(value.length < 30){
                return value;
            }
            return value.slice(0,30) + '...';
        }
    }
})
