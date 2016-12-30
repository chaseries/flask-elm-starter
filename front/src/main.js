require('./scss/main.scss')

var elm = require('./Main.elm');
var mount = document.getElementById("app");
var app = elm.Main.embed(mount);
