let vm = new Vue({
    el:'#app',
    data:{
        title:'A faire',
        task:null,
        tasks:[]
    },
    methods:{
        addTask: function(){
            this.tasks.push({id: Date.now(), description: this.task, done:false, ifIsEditMode:false});
            //console.log('tasks', this.tasks);
            this.task = null;
        },
        switchMode: function(task){
            task.ifIsEditMode = !task.ifIsEditMode;
            //console.log(task);
        },
        deleteTask: function(task){
            this.tasks = this.tasks.filter(function(t){
                return t.id !== task.id;
            })
        }
    }
})
