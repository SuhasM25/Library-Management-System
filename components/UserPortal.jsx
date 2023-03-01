import UserNavbar from "./UserNavbar"
import {Routes,Route} from 'react-router-dom';
import UserDasboard from "./UserDashBoard";
import BookList from "./bookList";
import ReadBook from "./ReadBook";

function UserPortal(){

    return(
        <>
        <UserNavbar/>
        <Routes>
            <Route path = "/:id" element = {<UserDasboard/>}/>
            <Route path = "/book-list" element = {<BookList/>}/> 
            <Route path = "/book-list/:id" element = {<ReadBook/>}/>
        </Routes>
        </>
    )
}
export default UserPortal