import { NextApiRequest, NextApiResponse } from "next";

export default function getAllDeals(req:NextApiRequest, res:NextApiResponse) {
    
    res.json([{company_id: '', date: ''}]);

}