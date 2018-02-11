let vm = new Vue({
    el:'#app',
    data:{
        title:'lifecycle hooks',
        usersUrl:'https://jsonplaceholder.typicode.com/users',
        users:[]
    },
    created:function(){
        axios.get(this.usersUrl)
        .then(function(response){
            vm.users = response.data;
            console.log(vm.users);
        })
    }
})
