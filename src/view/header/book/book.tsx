import {BookTypes} from "../../../dal/googleBookApi";

type PropsType = {
    book: BookTypes
}

export const Book = (props: PropsType) => {
    return(
        <div>
            <img alt="book_image" src={props.book.volumeInfo.imageLinks.smallThumbnail}/>
            {props.book.volumeInfo.categories
                ? <p>{props.book.volumeInfo.categories[0]}</p>
                : null
            }
            <h3>{props.book.volumeInfo.title}</h3>
            {props.book.volumeInfo.authors
                ? props.book.volumeInfo.authors.map((auth, i) => <p key={auth + i}>{auth}</p>)
                : null
            }
        </div>
    )
}