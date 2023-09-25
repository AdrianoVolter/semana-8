import axios from "axios";


export default axios.create({
    baseURL: "https://azul-verde-gaivota-toga.cíclico.app/api/v1",
    responseType: "json"
});

