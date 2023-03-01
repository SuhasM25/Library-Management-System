import '../styles/UserDashboard.css';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function UserDasboard(){

    let params = useParams()

    let [ user, setUser ] = useState('')

    useEffect(()=>{

        let fetchdata = async()=>{
           let response = await fetch(`http://localhost:4001/users/${params.id}`)
           let data = await response.json()
           setUser(data)
        } 
        fetchdata()  
    },[user])


    return(
        <>
        
        <div className = "container_board">
            <div className = "container_header">
                <h1>WELCOME { user.userName } TO USER DASHBOARD</h1>
            </div>

            <div className = 'container_user'>
                <ul className = 'user_property'>
                    <pre>
                    <li>USERNAME   = </li>
                    <li>AGE        = </li>
                    <li>EMAIL      = </li>
                    <li>PHONE      = </li>
                    </pre>
                </ul>
                <ul className = 'user_value'>
                    <li> { user.userName } </li>
                    <li> { user.age } </li>
                    <li> { user.Email } </li>
                    <li> { user.Mobile } </li>
                </ul>
            </div>

            <div className = "learn_box_one">
                <h1 className = "lab">Learning Lab</h1>
                <p className = "content_one">
                    The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and
                    patrons can empower themselves with a practical understanding of current technology.
                </p>
            </div>

            <div className = "learn_box_two">
                <h1 className = "learn">LEARN</h1>
                <h1 className = 'linkedin_learn'>LinkedIn Learning</h1>
                <p className = 'content_two'>
                    LinkedIn Learning (formerly Lynda) is an online educational site that features
                    thousands of courses and video tutorials where you can discover, complete, and
                    track courses related to your industry or interests.
                </p>
                <h5 className = 'start'>get started ➜</h5>
            </div>

            <div className = 'learn_box_three'>
                <p className = 'content_three'> Learn Something New or Get Tech Help </p>
                <p className = 'content_three'> Register on the online calendar. For more information call (203) 622-7920. </p>
                <h5>view calendar ➜</h5>
            </div>      
        </div>
        </>
    )
}
export default UserDasboard