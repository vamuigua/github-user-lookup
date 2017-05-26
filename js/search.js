var apiKey = require('./../.env').apiKey;

//Call-back function after gitlook function
function output() {
    console.log("SUCEESS!");
}

//Gitlook Function
function gitlook() {}

//function to make an authenticated API call for username
gitlook.prototype.getRepos = function (username) {
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function (response) {
        $('#result-name').text("Username:"+response.name);
        console.log(response);
    }).fail(function (error) {
        console.log(error.responseJSON.message);
    });
};

/*
//function to make an authenticated API call for Repos
gitlook.prototype.getRepos = function(username){
$.get('https://api.github.com/users/'+username+'/repos'+'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
*/

//Export modules
exports.gitlookModule = gitlook;