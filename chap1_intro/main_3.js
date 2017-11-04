var vm = new Vue({
    el: '#new-instance',
    data: {
        userInput: 0,
        randomNumber: 5
    },

    methods: {
      getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

        console.log(getRandomNumber);
      }
  },

  computed:{
      message: function(){
          if(this.userInput == this.randomNumber){
              this.randomNumber = this.getRandomNumber(1, 10);
              return 'Tu as gagné !';
          }else {
            this.randomNumber = this.getRandomNumber(1, 10);
            return 'Désolé, essayes encore !'
          }
      }

  }

})
