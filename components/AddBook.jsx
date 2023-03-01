import { useState } from "react"
import '../styles/AddBook.css';
import { useNavigate } from "react-router-dom";

function AddBook(){

    let [ title, setTitle ] = useState('')
    let [ author, setAuthor ] = useState('')
    let [ category, setCategory] = useState('')
    let [ pages, setPages ] = useState('')
    let [ shortDescription, setShortDescription ] = useState('')
    let [ longDescription, setLongDescription] = useState('')
    let [imageUrl,setImageUrl] = useState('')
    
    let book_list = { title, author, category, pages, shortDescription, longDescription }
    let navigate = useNavigate()

    let handler = (e)=>{

        e.preventDefault();
        fetch("http://localhost:4001/books",{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(book_list)
        })        

        alert(`${title} book added successfully`)
        navigate("/admin/book-list")
    }

    return(
        <>
        <div className = "book_container">
            <div className = "add_book">
                <h1>ADD A BOOK</h1>
                <div className = "Form_Book">
                    <form onSubmit = {handler} >
                        <input type = "text" placeholder = "title of the book" value = { title } onChange = {(e)=>setTitle(e.target.value)}/><br/>
                        <input type = "text" placeholder = "author of the book" value = { author } onChange = {(e)=>setAuthor(e.target.value)}/><br/>
                        <input type = "category" placeholder = "book category" value = { category } onChange = {(e)=>setCategory(e.target.value)}/><br/>
                        <input type = "pages" placeholder = "number of pages" value = { pages } onChange = {(e)=>setPages(e.target.value)}/><br/>
                        <textarea className = "shortDescription" placeholder = "short description" value = { shortDescription } onChange = {(e)=>setShortDescription(e.target.value)}/>
                        <textarea className = "longDescription" placeholder = "long description" value = { longDescription } onChange = {(e)=>setLongDescription(e.target.value)}/>
                        <input type = "url" placeholder = "image url" value = {imageUrl} onChange = {(e)=>setImageUrl(e.target.value)}/>
                        <button className = "bt_book">SUBMIT</button>
                    </form>
                </div>    
            </div>
        </div>        
        </>
    )
}
export default AddBook