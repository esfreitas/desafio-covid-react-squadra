import { URL_API } from "./base";

export function consultarPais(){
    return fetch(`${URL_API}/cases?country=France`).then(resultado => resultado.json());
}