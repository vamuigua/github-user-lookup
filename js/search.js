var apiKey = require('./../.env').apiKey;

//Call-back function after gitlook function
function output(){
    console.log("SUCEESS!");
}

//Gitlook Function
function gitlook(){
}

//function to make an authenticated API call
gitlook.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

//Export modules
exports.gitlookModule = gitlook;