import axios from "axios";

export const config = {
  fetchUrl: "https://wootlab-moviedb.herokuapp.com/api"
};

const callPlainApi = (url, data, method) =>
  new Promise((resolve, reject) => {
    const axiosOptions = { timeout: 30000 };
    if (method === "PUT") {
      axios
        .put(`${config.fetchUrl}${url}`, data, {
          timeout: axiosOptions.timeout
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    }
    if (method === "POST") {
      axios
        .post(`${config.fetchUrl}${url}`, data, {
          timeout: axiosOptions.timeout
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    } else {
      axios
        .get(`${config.fetchUrl}${url}`, {
          timeout: axiosOptions.timeout
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    }
  });

export const callApi = (url, data, method) => {
  // console.log(`Calling Axios API... ${url}`);
  return callPlainApi(url, data, method);
};
