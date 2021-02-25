import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const Home = () => {
    /*1*/
    const[users, setUsers]=useState([]);  

    /*2*/
    useEffect(()=>{   
        loadUsers();
    },[])
/*3*/
    const loadUsers= async ()=>{
        const result=await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse());
    };
    const deleteUser=async id=>{
   const result= await  axios.delete(`http://localhost:3003/users/${id}`);
   loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
  <thead class="table-dark">
    <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">UserName</th>
        <th scope="col">Email</th>
        <th>Action</th>
    </tr>
  </thead>
 <tbody>
     {
         users.map((user,index)=>(
             <tr>
             <th scope="row">{index+1}</th>
             <td>{user.name}</td>
             <td>{user.username}</td>
             <td>{user.email}</td>
             <td>
                 <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                 <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                 <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
             </td>
             </tr>
         ))
     }
  </tbody>
</table>
            </div>
            
        </div>
    )
}

export default Home;
