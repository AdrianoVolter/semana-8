import axios from "axios";


export default axios.create({
    baseURL: "https://solar-energy-api.cyclic.app/api/v1",
    responseType: "json"
});

