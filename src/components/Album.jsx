import React from "react";

export default (props) => (
  <div className="column">
    <div className="botoes">
      <a className="edit">&#9998;</a>
      <a className="delete">&#128465;</a>
    </div>
    <div className="card" onClick={props.mostrarDetalhes}>
      <img alt="" src={props.album.capa} />
      <p>{props.album.nome}</p>
    </div>
  </div>
);
