import get_db from '../fullstack_challenge_api/utils/db';
import Deals from '../../../models/Deals';

const handler = async (req, res) => {

    const {method} = req;

    await get_db();

    if(method === "GET") {
        try{
            const deals = await Deal.find()
            res.status(200).json(deals);
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        try{
            const deals = await Deal.create(req.body)
            res.status(201).json(deals);
        }catch(err){
            res.status(500).json(err)
        }
    }
};

export default handler;