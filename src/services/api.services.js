import axios from "axios";

const URL = "https://back-gratibox-paulo.herokuapp.com/";

function config(token) {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
}

function signInUser(user) {
    return axios.post(`${URL}sign-in`, user);
}

function signUpUser(user) {
    return axios.post(`${URL}sign-up`, user);
}

function getPlan(token) {
    return axios.get(`${URL}plans`, config(token));
}

export{
    signInUser,
    signUpUser,
    getPlan,
}