import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://13.41.55.97/invoice";

export const useFetch = (axiosParams, immediate = true) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    immediate && fetchData(axiosParams);
  }, []); // execute once only

  return { data, error, loading };
};

export default useFetch;

// Use
// const { response, loading, error } = useAxios({
//   method: "POST",
//   url: "/posts",
//   headers: {
//     accept: "*/*",
//   },
//   data: {
//     userId: 1,
//     id: 19392,
//     title: "title",
//     body: "Sample text",
//   },
// });
