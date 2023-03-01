import { NavLink } from "react-router-dom"
import '../styles/AdminNavbar.css';

function AdminNavbar(){

    return(
        <>
        <div className = "Admin_nav">
            <div className = "Admin_header">
                <h1>ADMIN PORTAL</h1>
            </div>
            <ul className = "admin_navbar">
                <li><NavLink to = "/admin/">DASH BOARD</NavLink></li>
                <li><NavLink to = "/admin/add-book">ADD BOOK</NavLink></li>
                <li><NavLink to = "/admin/add-user">ADD USER</NavLink></li>
                <li><NavLink to = "/admin/book-list">BOOK LIST</NavLink></li>
                <li><NavLink to = "/admin/user-list">USER LIST</NavLink></li>
                <li><NavLink to = "/">LOG OUT</NavLink></li>
            </ul>
        </div>
        </>
    )
}
export default AdminNavbar