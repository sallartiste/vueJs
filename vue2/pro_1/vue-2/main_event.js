new Vue({
    el:'#app',
    data:{
        title:'A faire',
        task:null,
        tasks:[]
    },
    methods:{
        addTask: function(){
            this.tasks.push({id: Date.now(), description: this.task, done:false});
            console.log('tasks', this.tasks);
            this.task = '';
        }
    }
})
