import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (key, url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setResponse(JSON.parse(JSON.stringify(res.data)));
      console.log("from useAxios", response);
    });
  }, [url]);
  return response;
};
