import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const useGetUser = () => {

  const [user, setUser] = useState({});
  // setUser({message:"", data: {username: "hello", email: ""}});

  const getUser = async () => {
    try{
      let token = Cookies.get("token");
      let headers = {
        "Content-Type": "application/json",
        "token": token
      };
      let response = await axios.get("http://localhost:3001/user/getUser", {headers});
      setUser(response.data.data);
        // console.log(response.data);
        // console.log(user);
    }
    catch{
      console.log(error);
    }
  }

  return {user ,getUser};
}

export default useGetUser;