import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/LandingPage';
import UserLogin from './components/UserLogin';
import UserPortal from './components/UserPortal';
import AdminPortal from './components/AdminPortal'; 
import AdminLogin from './components/AdminLogin';
import Error404 from './components/404';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home/>}/> 
            <Route path = "/user-Login" element = {<UserLogin/>}/>
            <Route path = '/admin-Login' element = {<AdminLogin/>}/>
            <Route path = "/user/*" element = {<UserPortal/>}/>
            <Route path = "/admin/*" element = {<AdminPortal/>}/>
            <Route path = "*" element = {<Error404/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
