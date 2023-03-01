import { useEffect, useState } from "react"
import { useLocation,useNavigate } from "react-router-dom";
import '../styles/Book_list.css';

function BookList(){

    let [Books, setBooks] = useState([])

    useEffect(()=>{

        let fetchdata = async()=>{
            let response = await fetch("http://localhost:4001/books")
            let data = await response.json()
            setBooks(data)
        }
        fetchdata()
    },[ Books ])


    let remove = ( id, title )=>{

        fetch(`http://localhost:4001/books/${id}`,{
            method : "DELETE"
        });
        alert(`${title} book is removed permanently`)
    }

    let navigate = useNavigate()
    let location = useLocation()

    let read = (id)=>{
        
        if(location.pathname === "/admin/book-list"){
            navigate(`/admin/book-list/${id}`)
        }
        else{
            navigate(`/user/book-list/${id}`)
        }
    }

    return(
        <>
            <div className = "book_list_container">
                <div className = "header_book">
                    <h1 className = "book_header">BOOK LIST</h1>
                    <h1>NUMBER OF BOOKS - { Books.length }</h1>
                </div>

                <div className = "books_box">
                        { Books.map((book_data)=>(
                        <div className = "books_section" key = {book_data.id}>
                            <div className = "book_image">
                                <img src = {book_data.imageUrl} alt = "Android in action" width = "150" height = "250"/>
                            </div>
                            <div className = "each_book">
                                <h1>Title : {book_data.title}</h1>
                                <hr/>
                                <h3>Authors : {book_data.author}</h3>
                                <h3>Category : {book_data.category}</h3>
                                <h4>page count : {book_data.pages}</h4>
                                <button className = "read_more" onClick = {()=>read( book_data.id )}>Read More</button>
{ (location.pathname === "/admin/book-list") && <button className = "remove" onClick = {()=>remove( book_data.id, book_data.title ) }>Delete</button> }
                            </div>
                        </div>
                        ))}
                    </div>
            </div>
        </>
    )
}
export default BookList