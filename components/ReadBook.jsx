import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../styles/ReadBook.css';

function ReadBook(){

    let [ Book, setBook ] = useState([]) 

   let params = useParams()

   useEffect(()=>{

    let fetchdata = async()=>{

        let response = await fetch(`http://localhost:4001/books/${params.id}`)
        let data = await response.json()
        setBook(data)
    }
    fetchdata()
   })

    return(
        <>
        <div className = "read_book">
            <div className = "head">
                <h1 className = "heading">READ BOOK</h1>
                <h1 className = "title_book">Title : { Book.title }</h1>
           </div>
            <p className = "paragraph">{Book.longDescription}</p>
        </div>
        </>
    )
}
export default  ReadBook