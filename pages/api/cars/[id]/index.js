import axios from "axios";

async function get_car(req, res) {
const BearerAuthToken = req.headers.authorization

  const id = req.query.id
  const resp = await axios.get(`http://localhost:4000/api/v1/cars/${id}`,
  {
    headers: {
      'Authorization': BearerAuthToken
    }
  });

  res.status(200).json({ data: resp.data });
}

export default get_car;

