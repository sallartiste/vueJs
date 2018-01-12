// connexion à l'url de l'API
const baseUrl = "http://jsonplaceholder.typicode.com";

//Compasant List
const List = {
	template: '#list-template',

	data : () => ({
		posts: []
	}),

	mounted () {
		this.getPosts ();
	},

	methods: {
		getPosts() {
			axios.get(baseUrl + '/posts').then(response =>{
				this.posts = response.data;
				console.log(this.posts);
			}).catch(error => {
				console.log(error);
			})
		}
	}
};

//Composant Post
const Post = {
	template: '#post-template',
	data: () => ({
		post: null
	}),

	mounted (){
		this.getPosts();
	},

	methods: {
	    getPost() {
		    var id = this.$route.params.id;
		    axios.get(baseUrl + '/posts/' + id).then(response => {
			    this.post = response.data
			    console.log(this.post);
		    }).catch(error => {
			    console.log(error);
		    })
	    }
	}
};

//On creer le router de Vue
var router  = new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'homepage',
			path: '/',
			component: List
		},
		{
			name: 'post',
			path: '/:id',
			component: Post
		}
	]
});

//On cree l'instance Vue avec notre router et montage dans "#app"
var vue = new Vue({router});
var app = vue.$mount('#app');
