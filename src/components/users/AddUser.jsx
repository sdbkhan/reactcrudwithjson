import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
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

  const onSubmit = async (e) => {
    console.log(user);
    e.preventDefault();
    const result = await axios.post("http://localhost:3003/users", user);
    console.log(result);
    history.push("/");
  };

  return (
    <div className="container w-25">
      <h1 className="text-center mb-4 text-dark font-weight-bold">
        Add New Users
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
          <button className="btn btn-dark" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;