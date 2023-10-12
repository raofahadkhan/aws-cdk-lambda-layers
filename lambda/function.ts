import axios from "axios";

export const handler = async (event: any) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log("apiresponse==>", res);
};
