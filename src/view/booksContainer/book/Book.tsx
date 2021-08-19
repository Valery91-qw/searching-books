import {BookType} from "../../../bll/books/books-model";
import style from "./Book.module.css"

export const Book = ({authors, categories, title, imageLinks}: BookType) => {

    const viewCategories = categories?.split(',')
    const viewAuthor = authors?.split(',')

    return (
            <a className={style.wrapper} href='/'>
                <img alt="book_image" src={imageLinks.smallThumbnail}/>
                {viewCategories
                    ? <p>{viewCategories[0]}</p>
                    : null
                }
                <h3>{title}</h3>
                {viewAuthor
                    ? viewAuthor.map((auth, i) => <p key={auth + i}>{auth}</p>)
                    : null
                }
            </a>
    )
}