import { NextApiRequest, NextApiResponse } from "next";

export default function getAllCompanies(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "GET") {({message: 'sorry we only accept GET request'})
        res.status(500).json
    }
    res.json({hello: 'world', method: req.method});

}