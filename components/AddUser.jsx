import { useState } from "react"
import { useNavigate } from "react-router-dom";
import '../styles/AddUser.css';

function AddUser(){

    let [ userName, setUserName ] = useState('')
    let [ age, setAge ] = useState('')
    let [ Email, setEmail ] = useState('')
    let [ Mobile, setMobile ] = useState('')

    let user_details = { userName, age, Email, Mobile }
    let navigate = useNavigate()

    let Handler =(e)=>{

        e.preventDefault()        
        fetch(" http://localhost:4001/users",{

            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(user_details)
        })

        alert(`${userName} added successfully`)
        navigate("/admin/user-list")
    }

    return(
        <>
        <div className = "user_container">
            <div className = "user_box">
                <h1>ADD AN USER</h1>
                <div className = "Form_User">
                    <form onSubmit = {Handler}>
                        <input type = "text" placeholder = "USERNAME" value = {userName} onChange = {(e)=>setUserName(e.target.value)}/><br/>
                        <input type = "number" placeholder = "AGE" value = {age} onChange = {(e)=>setAge(e.target.value)}/><br/>
                        <input type = "email" placeholder = "EMAIL" value = {Email} onChange = {(e)=>setEmail(e.target.value)}/><br/>
                        <input type = "text" placeholder = "MOBILE NUMBER" value = {Mobile} onChange = {(e)=>setMobile(e.target.value)}/><br/>
                        <button className = "bt_user">submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddUser