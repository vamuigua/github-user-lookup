var apiKey = require('./../.env').apiKey;
var gitlook = require('./../js/search.js').gitlookModule;
var output = require('./../js/search.js').outputModule;

//Display Repo-Details
function displayRepos(repoName, repoDescription) {
  $('#repos').append("<li><h4>" + repoName + "</h4><br>" + repoDescription + "<hr><br>");
}

//Main run function
$(document).ready(function() {
  $('#gitlook-form').submit(function(event) {
    var gitlookObject = new gitlook();
    var outputObject = new output();
    var username = $('#username-input').val();
    $('#username-input').val("");
    gitlookObject.getUsername(username);
    outputObject.getRepos(username, displayRepos);
    event.preventDefault();
  });
});
