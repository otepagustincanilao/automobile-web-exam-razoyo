import axios from "axios";

async function list_cars(req, res) {
  const resp = await axios.get("http://localhost:4000/api/v1/cars");
  const authToken = resp.headers.authorization;
  res.status(200).json({ data: resp.data, auth_token: authToken });
}

export default list_cars;
