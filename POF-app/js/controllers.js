app.controller('mainController', ['$scope', mainController]);
app.controller('matchesController', ['$scope', '$routeParams', 'catsService', matchesController]);
app.controller('questionsController', ['$scope', 'holdingService', questionsController]);

function mainController($scope){
  var vm = this;
 
  vm.GuestEnter = function(){
    window.location = './views/welcome.html';
  };


};

function matchesController($scope, catsService, $routeParams){
  var vm = this; 



  catsService.getCats().then(function(data){
    console.log(data);
  });

}



function questionsController($scope, holdingService){
  var vm = this;

  vm.holdingService = holdingService;

    var holdAnswer = [];
    this.answerdata = function(info){
      holdAnswer.push(info);
      console.log(holdAnswer);
        if (holdAnswer.length === 8) {
          holdingService.postAnswers(holdAnswer).then(function(response){
            console.log(response);
          });
        }
  }
}


