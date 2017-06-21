var apiKey = require('./../.env').apiKey;

//Gitlook Function
function gitlook() {}

//Call-back function after gitlook function
function output() {}

//function to make an authenticated API call for username
gitlook.prototype.getUsername = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    $('#result-img').html('<img src="' + response.avatar_url + '">');
    if(response.name === null){
      response.name = "No name set";
    }
    $('#result-name').text(response.name);
    event.preventDefault();
  }).fail(function(error) {
    $('#result-name').text(error.responseJSON.message);
    $('#repos').empty();
    $('#result-img').empty();
  });
};

//function to make an authenticated API call for Repos
output.prototype.getRepos = function(username, displayRepos) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    $('#repos').empty();
    for (var i = 0; i < response.length + 1; i++) {
      if (response[i].description === null) {
        response[i].description = 'No description in repo';
      }
      displayRepos(response[i].name, response[i].description);


    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};


//Export modules
exports.gitlookModule = gitlook;
exports.outputModule = output;
