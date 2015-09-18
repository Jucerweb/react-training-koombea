var React = require('react');
var App = require("./components/app");

import lista from './lista.json';
var {people} = lista;
module.exports = React.render(<App trabajadores={people}/>, document.getElementById('container'));
