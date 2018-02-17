<template>
    <div>
        <ul>
            <li v-for="user in data">
                <user-details :usr="user" v-on:accept="registerUser(user)"></user-details>
            </li>
        </ul>
    </div>
</template>

<script>
  export defaut {
      name: 'user-list',
      components: {
        'user-details': UserDetails
    },
    props: ['data','usersComing'],
    methods:{
        registerUser: function(user){
            this.usersComing.push(user);
        }
    },
    data: function(){
      userWhoWillComing: []
    }
  }
</script>

<style></style>
