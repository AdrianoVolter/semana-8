import axios from "axios";


export default axios.create({
    baseURL: "https://solar-energy-api.cyclic.app/",
    responseType: "json"
});

