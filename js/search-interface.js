var apiKey = require('./../.env').apiKey;
var gitlook = require('./../js/search.js').gitlookModule;

//Main run function
$(document).ready(function () {
    $('#gitlook-form').submit(function (event) {
        var gitlookObject = new gitlook();
        var username = $('#username-input').val();
        gitlookObject.getRepos(username);
        event.preventDefault();
    });
});