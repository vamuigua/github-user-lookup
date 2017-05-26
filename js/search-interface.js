var apiKey = require('./../.env').apiKey;
var gitlook = require('./../js/search.js').gitlookModule;
var output = require('./../js/search.js').outputModule;

/*
//Display Username
function displayName(username) {
    if (username === null) {
        $('#result-name').text("The users has no name in profile");
    } else {
        $('#result-name').text(username);
    }
}
*/

//Display Repo-Details
function displayRepos(repoName, repoDescription) {
    $('#repos').append("<li><h4>" + repoName + "</h4><br>" + repoDescription + "<br>");
}

//Main run function
$(document).ready(function () {
    $('#gitlook-form').submit(function (event) {
        var gitlookObject = new gitlook();
        var outputObject = new output();
        var username = $('#username-input').val();
        gitlookObject.getUsername(username);
        outputObject.getRepos(username, displayRepos);
        event.preventDefault();
    });
});