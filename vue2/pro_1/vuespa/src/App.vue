<template>
  <div>
    <h2>Utilisation de la requete ajax de parent par l'enfant</h2>
       <!--<user-list :data="users" :users-coming="userWhoWillComing"></user-list>-->
       <router-view :data="users" :users-coming="userWhoWillComing"></router-view>
       <hr />
       <div v-for="user in userWhoWillComing">
           {{user.id}}. {{user.name}} ({{user.email}})
       </div>
  </div>
</template>

<script>
//import UserList from './UserList.vue';

export default {
  name: 'app',
  //components: {
    //'user-list' : UserList
  //},

  data () {
    return {
      usersUrl:'https://jsonplaceholder.typicode.com/users',
      users:[],
      userWhoWillComing:[]
    }
  },
  created: function() {
     axios.get(this.usersUrl)
       .then((response) => {
         this.users = response.data;
         //console.log(vm.users);
     })
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
