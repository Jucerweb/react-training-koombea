var React = require('react');
var lista = require('../lista.json').people;
console.log(lista);
var {ul, li, h1, div, b} = React.DOM;
var sortBy = require('sort-by');

var Trabajador = React.createClass({
	render() {
		return(
      <li>
      	{this.props.data.firstName} {this.props.data.lastName} email: 
      	<a href={"mailto:" + this.props.data.email}>{this.props.data.email}</a>
      </li>
		);
	}
});

// var ListaTrabajadores = React.createClass({
// 	render(){
// 		var listaTrabajadores = lista.map((trabajador, i) => { return <Trabajador key={i} data={trabajador} />});
// 		return(
// 			<ul>
// 				{listaTrabajadores}
// 			</ul>
// 		);
// 	}
// });

var ListaTrabajadores = React.createClass({
	render(){
		var listaTrabajadores = lista.filter(function(el) { return el.role == "Web Development"; });
		listaTrabajadores = listaTrabajadores.sort(sortBy('lastName'));
		listaTrabajadores = listaTrabajadores.map((trabajador, i) => { return <Trabajador key={i} data={trabajador} />});

		return(
			<ul>
				{listaTrabajadores}
			</ul>
		);
	}
});
module.exports = ListaTrabajadores;
