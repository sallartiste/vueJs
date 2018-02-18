<template>
  <div>
      <h2>Détails de l'utilisateur {{this.$route.params.id}}</h2>
      <p>
        <router-link to="/users">Retour</router-link>
      </p>
  </div>
</template>

<script>
export default {
  name: 'user-details',
  props: ['user'],
  methods: {
    acceptInvit: function() {
      this.$emit('accept');
    }
  }
}
</script>
