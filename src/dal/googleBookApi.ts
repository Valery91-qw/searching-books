import axios from "axios";
import {apiKey} from "./variable";

const API_KEY = process.env.REACT_APP_APIKEY || apiKey

export const googleBookApi = {
    getBooks(searchString: string) {
      return axios.get<ResponseType>(`https://www.googleapis.com/books/v1/volumes`, {
          params: {
              key: API_KEY,
              q: searchString,
          }
      })
          .then(res => res)
    }
}


export type BookTypes = {
    volumeInfo: {
        authors: Array<string>
        categories: Array<string>
        description: string
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
        pageCount: number
    }
}
export type ResponseType = {
    kind: string
    totalItems: number
    items: Array<BookTypes>
}