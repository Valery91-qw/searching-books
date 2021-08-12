import axios from "axios";
import {apiKey} from "./variable";


export const googleBookApi = {
    getBooks() {
       return  axios.get('https://books.google.com/books/v1', {
           params : {
               key: apiKey
           }
       })
    }
}