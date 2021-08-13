import axios from "axios";
import {apiKey} from "./variable";

const API_KEY = process.env.REACT_APP_APIKEY || apiKey

export const googleBookApi = {
    getBooks(searchString: string) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes`, {
          params: {
              key: API_KEY,
              q: searchString,
          }
      })
    }
}