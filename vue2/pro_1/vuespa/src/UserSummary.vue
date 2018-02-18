<template>
  <div class="user-summary">
     id: {{usr.id}}, ville: {{usr.address.city}}, e-mail:<router-link :to="`/users/${usr.id}`">{{usr.email}}</router-link> <br />
     <br>
     <button v-on:click="acceptInvit">
       Accept. Invit
     </button>
  </div>
</template>

<script>
export default {
  name: "user-summary",
  props: ['usr'],
   methods:{
       acceptInvit: function(){
           this.$emit('accept');
       }
   }
}
</script>
 <style>
   .user-summary{
     border: 1px solid grey;
     margin: 10px;
     padding: 15px;
     width: 250px;
     float: left;
   }
 </style>
