import get_db from '../fullstack_challenge_api/utils/db';
import Companies from '../../../models/Companies';


export default async function handler(req,res) {
const {method} = req;

    get_db();

    if(method === "GET") {
        try{
            const companies = await Companies.find();
            res.status(200).json(companies);
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method === "POST") {
        try{
            const companies  = await Companies.create(req.body);
            res.status(201).json(product);

        }catch(err){
            res.status(500).json(err)
        }
        
    }
}