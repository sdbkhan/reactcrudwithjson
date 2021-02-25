import { useState,useEffect } from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const {id} =useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
      loadUser();
  },[]);

  const onSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    const result = await axios.put(`http://localhost:3003/users/${id}`, user);
    console.log(result);
    history.push("/");
  };
  const loadUser=async()=>{
      const result=await axios.get(`http://localhost:3003/users/${id}`);
    //   console.log(result);
    setUser(result.data);

  }

  return (
    <div className="container w-25">
      <h1 className="text-center mb-4 text-dark font-weight-bold">
        Edit A User
      </h1>
      <form onSubmit={(e) => onSubmit(e)} className="cstm_form">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Firstname"
            id="name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group ">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Enter Your Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Phone Number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Website Name"
            id="website"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group text-center">
          <button className="btn btn-warning btn-block" type="submit">
            Update user
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;