import {Routes,Route} from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminDashboard from './AdminDashboard';
import AddBook from './AddBook';
import AddUser from './AddUser';
import BookList from './bookList';
import ReadBook from './ReadBook';
import UserList from './UserList';

function AdminPortal(){

    return(
        <>
        <AdminNavbar/>
        <Routes>
            <Route path = "/" element = {<AdminDashboard/>}/>
            <Route path = "/add-book" element = {<AddBook/>}/>
            <Route path = "/add-user" element = {<AddUser/>}/>
            <Route path = "/book-list" element = {<BookList/>}/>
            <Route path = "/book-list/:id" element = {<ReadBook/>}/>
            <Route path = "/user-list" element = {<UserList/>}/>
        </Routes>
        </>
    )
}
export default AdminPortal