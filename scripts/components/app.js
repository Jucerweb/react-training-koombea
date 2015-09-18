import React from 'react';
var ListaItem = React.createClass({
  displayName: 'ListaItem',
  render(){
    var {firstName, lastName, role} = this.props;
    return(
      <li>
        { `${ firstName} ${lastName}`}  <b> {`${role}`} </b>
      </li>
    );
  }
});
var Lista = React.createClass({
  displayName: 'Lista',
	render() {
    var {trabajadores} = this.props,
    items = trabajadores.map((trabajador, idx) => {
      return (
        <ListaItem {...trabajador} key={idx} />
      );
    })
		return(
      <ul>
        {items}
      </ul>
    );
	}
});

export default Lista;
