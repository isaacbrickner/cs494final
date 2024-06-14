import { NextApiRequest, NextApiResponse } from "next"
import { json } from "stream/consumers";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const r = await fetch('https://api.unsplash.com/photos/?client_id=GWugU3QGp5qUFnUtW1OwQ_0hkox2p0Bax0cUUaNzV6c&random');
   
    const jsonData = await r.json();

    console.log(jsonData);

    res.status(200).json(jsonData)
  }    