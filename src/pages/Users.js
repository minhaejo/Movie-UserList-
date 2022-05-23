import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";




const User = () => {
    const[users,setUsers] =useState([])
    const [loading,setLoading] = useState(true)
    
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            setUsers(response.data)
            setLoading(false)
        })
    },[])

    return(
        <>
            <h1>Users</h1> 
            {loading ? <Spinner /> :
            <UserList users={users} />}
            {/* 로딩이 트루면 스피너 보여주고 아니면 유저리스트를 보여줌 */}
             
        </>
    )
}

export default User