import axios from "axios";
import { useState } from "react";

const getBot = () => {
  const [response, setResponse] = useState({});
  
  const getResponse = async (prompt) => {
    try{
      let nresponse = await axios.post("http://localhost:5000/bot", {prompt});
      setResponse(nresponse.data);
      console.log(nresponse.data);
    }
    catch(e){
      console.log(e);
    }
  }

  return {response, getResponse};
}

export default getBot;  