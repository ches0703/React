import axios from "axios";

const getPosts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw e
    })
}

export { getPosts }