import axios from "axios";

// Requêter un utilisateur avec un ID donné.
export default async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
