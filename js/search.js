var apiKey = require('./../.env').apiKey;

//Call-back function after gitlook function
function output() {}

//Gitlook Function
function gitlook() {}

//function to make an authenticated API call for username
gitlook.prototype.getUsername = function (username) {
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function (response) {
        console.log(response.name);
        $('#result-name').text("Username:" + response.name);
        //displayName(response.name);
    }).fail(function (error) {
        console.log(error.responseJSON.message);
    });
};


//function to make an authenticated API call for Repos
output.prototype.getRepos = function (username, displayRepos) {
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function (response) {
        for (var i = 0; i < response.length + 1; i++) {
            if (response[i].description === null) {
                response[i].description = 'No description in repo';
            } else {
                displayRepos(response[i].name, response[i].description);
            }

        }
    }).fail(function (error) {
        console.log(error.responseJSON.message);
    });
};


//Export modules
exports.gitlookModule = gitlook;
exports.outputModule = output;