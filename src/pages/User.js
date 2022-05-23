import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";



const User = () => {
    const[user,setUser] =useState(null)
    const [loading,setLoading] = useState(true)
    const { id } = useParams() //파라미터를 받아 id 값이 바뀔때마다 찍어줌
    console.log(user)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response=>{
            setUser(response.data)
            setLoading(false)
        })
    },[])

    const userDetail = loading ? <Spinner /> : (
        
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return(
        <>
            <h1>User 정보</h1> 
            {userDetail}

            {/* 로딩이 트루면 스피너 보여주고 아니면 유저리스트를 보여줌 */}
             
        </>
    )
}

export default User