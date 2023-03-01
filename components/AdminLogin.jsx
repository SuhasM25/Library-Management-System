import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/AdminLogin.css'

function AdminLogin(){

    let [ adminEmail, setAdminEmail ] = useState('')
    let [adminPwd, setAdminPwd ] = useState('') 

    let navigate = useNavigate()

    let ClickHandler = (e)=>{
        e.preventDefault()
        if(adminEmail === "suhasm@gmail.com" && adminPwd === "8971671695"){
            alert("Logged in successfully")
            navigate('/admin/')
        }
        else{
            alert("invalid credentials")
        }
    }   

    return(
        <>
        <div className = "admin_container">
            <div className = "admin_box">
                <h1>ADMIN LOGIN</h1>
                <div className = "Admin_Form">
                    <form onSubmit = {ClickHandler}>
                        <input className = "admin_email" type = "email" placeholder = "email address" value = {adminEmail} onChange = {(e)=>setAdminEmail(e.target.value)} /><br/>
                        <input className = "admin_pwd" type = "password" placeholder = "password" value = {adminPwd} onChange = {(e)=>setAdminPwd(e.target.value)} /><br/>
                        <button className = "admin_login">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default AdminLogin