//composant static de VueJs
Vue.component('static-posts', {

  //Definition du model (template) que le composant utilisera pour le rendu
  template: '#static-posts-template',

  // la fonction Data est l'endroit où nous deffinition  toutes les variables  dont on aura besoin
  // Dans ce cas, on prend en compte que le tableau de postes
  data: ( ) => ({
    posts: [ ]
  }),

  mounted( ) {
    this.getPosts( );
  },

  //Les methodes que nous definissions pour ces composant
  methods: {
    getPosts( ) {
      this.posts = [
        {
          "title": "Le premier titre du poste!"
        },
        {
          "title": "Le deuxième titre du poste!"
        },
        {
          "title": "Le troisième titre du poste!"
        }
      ];
    }
  }
});

//On crée une nouvelle instance
new Vue({
	el: '#app'
});
