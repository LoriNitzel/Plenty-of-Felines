app.controller('mainController', ['$scope', mainController]);
app.controller('matchesController', ['$scope', 'catsService', '$routeParams', matchesController]);
app.controller('allcatsController', ['$scope', 'catsService', '$routeParams', allcatsController]);
app.controller('questionsController', ['$scope', 'holdingService', questionsController]);

function mainController($scope){
  var vm = this;
 
  vm.GuestEnter = function(){
    window.location = './views/welcome.html';
  };


};


function matchesController($scope, catsService, $routeParams){
  var vm = this;
}


function allcatsController($scope, catsService, $routeParams){
  var vm = this; 
  vm.test = "vlah";
  
  catsService.getCats().then(function(catdata){
    console.log(catdata);
    vm.cats = catdata;
  })
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
};


