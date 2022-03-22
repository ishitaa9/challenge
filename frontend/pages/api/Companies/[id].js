import get_db from '../fullstack_challenge_api/utils/db';
import Companies from '../../../models/Companies';


export default async function handler(req,res) {
const { 
    method, 
    query:{ id }, } = req;

    get_db();

    if(method === "GET") {
        try{
            const companies = await Product.findById(id);
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err)
        }

    }

    if(method === "PATCH") {
        try{
            const companies  = await Product.findByIdAndUpdate(id, req.body, {new: true,});
            res.status(201).json(product);

        }catch(err){
            res.status(500).json(err)
        }
        
    }

    if(method === "DELETE") {
        try{
            await Companies.create(req.body);
            res.status(200).json("The Company has been deleted!");

        }catch(err){
            res.status(500).json(err)
        }
        
    }
}