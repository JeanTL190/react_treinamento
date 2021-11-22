import React from "react";
import Popup from "reactjs-popup";
import Detalhes from "./components/Detalhes";
import Header from "./components/Header";
import ListaAlbuns from "./components/ListaAlbuns";
import { lerAlbuns } from "./Servico";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albuns: [],
      albunsSertanejo: [],
      album: {},
      openDetalhes: false
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js";
    script.async = true;
    document.body.appendChild(script);
    this.fetchData();
  }
  fetchData = () => {
    lerAlbuns().then((res) => this.setState({ albuns: res.data }));
    lerAlbuns("Sertanejo").then((res) =>
      this.setState({ albunsSertanejo: res.data })
    );
  };
  mostrarDetalhes = (album) =>
    this.setState({
      album: album,
      openDetalhes: true
    });

  fecharDetalhes = (_) =>
    this.setState({
      album: {},
      openDetalhes: false
    });

  render() {
    return (
      <div className="app">
        <Header></Header>

        <ListaAlbuns
          titulo="Últimos Álbuns"
          albuns={this.state.albuns}
          mostrarDetalhes={this.mostrarDetalhes}
        ></ListaAlbuns>

        <Popup open={this.state.openDetalhes} onClose={this.fecharDetalhes}>
          <Detalhes onClose={this.fecharDetalhes}>{this.state.album}</Detalhes>
        </Popup>

        <ListaAlbuns
          titulo="Sertanejo"
          albuns={this.state.albunsSertanejo}
          mostrarDetalhes={this.mostrarDetalhes}
        ></ListaAlbuns>
        <Popup open={this.state.openDetalhes} onClose={this.fecharDetalhes}>
          <Detalhes onClose={this.fecharDetalhes}>{this.state.album}</Detalhes>
        </Popup>
      </div>
    );
  }
}
