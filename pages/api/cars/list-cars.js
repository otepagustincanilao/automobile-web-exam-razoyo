import axios from "axios";

async function get_handler(req, res) {
  const resp = await axios.get("http://localhost:4000/api/v1/cars");
  res.status(200).json({ data: resp.data });
}

export default get_handler;
