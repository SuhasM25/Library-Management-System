import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/UserLogin.css'

function UserLogin(){

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [user,setUser] = useState([])

    useEffect(()=>{

        let fetchdata = async()=>{

            let response = await fetch("http://localhost:4001/users")
            let data = await response.json()
            setUser(data)
        }
        fetchdata()
    },[user])

    let navigate = useNavigate()

    let handleClick = (e)=>{
       
         e.preventDefault()
        
        let result = user.filter((person)=>{
         return person.Email === email
        })

        if((result[0].Email === email)){
        
         alert("logged in successfully")
         navigate(`/user/${result[0].id}`)
        }
         else{
                 alert('invalid credentials')
             }}

    return(
        <>
        <div className = "container1">
            <div className = "box1">
                <h1>USER LOGIN</h1>
                <div className = "Form_Container">
                    <form action = "" onSubmit = {handleClick}>
                        <input className = "email" type = "email" placeholder = "email address" value = {email} onChange = {(e)=>setEmail(e.target.value)}/><br/>
                        <input className = "pwd" type = "password" placeholder = "password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                        <button className = "bt_login">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserLogin