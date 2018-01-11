// connexion à l'url de l'API
const baseUrl = "http://jsonplaceholder.typicode.com";

//Compasant List
const List = {
	template: '#list-template',
	data : ( ) => ({
		posts: [ ]
	}),

	mounted ( ) {
		this.getPosts ( );
	},

	methods: {
		getPosts() {
			axios.get(baseUrl + '/posts').then(response =>{
				this.posts = response.data;
				console.log(this.posts);
			}).catch(error => {
				console.console.log(error);
			})
		}
	}
};

Composant Post
const Post = {
	template: '#post-template',
	data: () => ({
		post: null
	}),

	mounted ( ){
		this.getPosts( );
	},

	methods: {
		
	}
}
