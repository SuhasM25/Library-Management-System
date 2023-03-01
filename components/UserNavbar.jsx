import { NavLink } from "react-router-dom"
import '../styles/UserNavbar.css';
function UserNavbar(){

    return(
        <>
        <div className = "nav">
            <div className = "header">
                <h1>USER PORTAL</h1>
            </div>
            <ul className = "user_navbar">
                <li><NavLink to = "/user/:id">DASH BOARD</NavLink></li>
                <li><NavLink to = "/user/book-list">BOOK LIST</NavLink></li>
                <li><NavLink to = "/">LOG OUT</NavLink></li>
            </ul>
        </div>
        </>
    )
}
export default UserNavbar