import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://moviesdatabase.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "6d0c778124msh15217dd8f3755fdp19e0eajsnf63dde291f74",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  });
};


