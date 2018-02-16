var vm = new Vue({
    el:'#app',
    data:{
        about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis quam scelerisque, consectetur eros eu, gravida ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',

        email:'eric@becode.org',
        gsm:'04 05 06 07 08',
        emailForNewsLetter:'',
        opinion:'',
        OpinionShit:'',
        githubUser:'',
        githubUserResult:''
    },

    filters:{
        coupeFraz: function(value){
            if(value.length < 30){
                return value;
            }
            return value.slice(0,30) + '...';
        }
    },

    computed:{
        waysToContact: function(){
            return 'email: ' + this.email + ' Tel: ' + this.gsm;
        },
        buttonDesactived: function(){
            /*if(this.emailForNewsLetter.length < 2 || this.emailForNewsLetter.indexOf('@') === -1 || this.emailForNewsLetter.indexOf('.') === -1){
                return true;
            }else {
                return false;
            }*/
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  return !re.test(this.emailForNewsLetter);
        }
    },

    watch:{
        opinion: function(newValue){
            if(newValue.indexOf('putin') !== -1){
                this.opinionShit='Aaaah, Soit poli mon frère!';
            }else {
                this.opinionShit='';
            }
        },
        /*githubUser:function(username){
            axios.get('https://api.github.com/users/' + username)
            .then(function(data){
                console.log(data);
            });
        }*/
        githubUser: _.debounce(function(username){
            axios.get('https://api.github.com/users/' + username)
            .then(function(data){
                console.log(data);
            });
        }
       , 700)
    }
})
