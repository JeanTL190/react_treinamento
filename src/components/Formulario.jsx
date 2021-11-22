import React from "react";
import EdicaoMusicas from "./EdicaoMusicas";
import { inserirAlbum } from "../Servico";

export default class Formulario extends React.Component {
  categorias = [
    "Eletrônica",
    "MPB",
    "Pop",
    "Rap",
    "Reggae",
    "Rock",
    "Samba",
    "Sertanejo"
  ];

  render() {
    return (
      <div className="modal">
        <a className="close" onClick={this.props.onClose}>
          &times;
        </a>
        <form>
          <h2>Cadastro de Filme</h2>
          <div className="formulario">
            {" "}
            <div>
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" required />
              <br />
              <label htmlFor="capa">URL da capa: </label>
              <input type="text" name="foto" required />
              <br />
              <label htmlFor="categoria">Categoria: </label>
              <select name="categoria" required>
                {this.categorias.map((categoria) => (
                  <option value={categoria}>{categoria}</option>
                ))}
              </select>
              <br />
              <label htmlFor="artista">Artista: </label>
              <textarea name="artista" required />
              <br />
              <label htmlFor="gravadora">Gravadora: </label>
              <textarea name="gravadora" required />
              <br />
              <label htmlFor="ano">Ano: </label>
              <input type="number" name="ano" required />
              <br />
            </div>
          </div>
          <input type="submit" className="botao-cadastrar" value="Enviar" />
        </form>
      </div>
    );
  }
}
