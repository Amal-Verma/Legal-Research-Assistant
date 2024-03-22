import axios from "axios";

const getBot = () => {
  const [response, setResponse] = useState({});
  
  const getResponse = async (prompt) => {
    try{
      let response = await axios.post("http://localhost:5000/bot/getResponse", {prompt});
      setResponse(response.data.response);
    }
    catch{
      console.log(error);
    }
  }

  return {response, getResponse};
}