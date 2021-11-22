import axios from "axios";

const baseURL = "https://frameworks-web.herokuapp.com/api/albuns";
const headers = { matricula: "2018000069" };

export const lerAlbuns = (categoria) =>
  axios
    .get(categoria ? `${baseURL}?categoria=${categoria}` : baseURL, { headers })
    .catch(onError);

export const inserirAlbum = (data) =>
  axios
    .post(baseURL, data, { headers })
    .then(() => onSuccess("cadastrado"))
    .catch(onError);

const onSuccess = (op) => {
  alert(`Album ${op} com sucesso`);
  window.location.reload();
};

const onError = (e) => {
  alert("Ocorreu um erro");
  console.log(e);
};
