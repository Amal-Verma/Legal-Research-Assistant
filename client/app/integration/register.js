import axios from "axios";

const registerSubmit = () => {
  const register = async (data) => {
    try {
      let response = await axios.post(
        "http://localhost:3001/user/register",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
};

export default registerSubmit;
