import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const loginSubmit = () => {
  const router = useRouter();
  const login = async (data) => {
    try {
      let response = await axios.post("http://localhost:3001/user/login", data);

      if (response.status === 200) {
        Cookies.set("token", response.data.token);
        console.log(response.data);
        router.push("/profile");
      }
      else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {login};
};

export default loginSubmit;