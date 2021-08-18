import {BookType} from "../../../bll/books/books-model";

export const Book = ({authors, categories, title, imageLinks}: BookType) => {

    const viewCategories = categories?.split(',')
    const viewAuthor = authors?.split(',')

    return (
            <a href='/'>
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