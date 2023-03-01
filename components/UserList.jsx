import { useEffect, useState } from "react"
import '../styles/UserList.css';

function UserList(){

    let [ user, setUser ] = useState([])
    
    useEffect(()=>{

        let fetchdata = async()=>{

            let response = await fetch("http://localhost:4001/users")
            let data = await response.json()
            setUser(data)
        }
        fetchdata()
    }, [ user ])

    let remove = (id, name)=>{

        fetch(`http://localhost:4001/users/${id}`,{
            
            method : "DELETE"
        })
        alert(`${name} deleted permanently`)
    }    

    return(
        <>
        <div className = "userList_container">
            <h1> USER LIST -{ user.length }</h1>
            <div className = "user_layout">
                {
                    user.map( ( person )=>(

                        <div className = "user_section" key = { person.id }>
                            <h2>{person.userName}</h2>
                            <h2>{person.age}</h2>
                            <h2>{person.Email}</h2>
                            <h2>{person.Mobile}</h2>
                            <button className = "bt_userList" onClick = {()=>remove( person.id, person.userName )}>DELETE</button>
                        </div>
                        ))
                }
            </div>
        </div>
        </>
    )
}
export default UserList